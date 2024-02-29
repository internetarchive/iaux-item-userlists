/**
 * Button and dropdown for adding item to user lists
 */
import { html, css, LitElement, nothing, type TemplateResult } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { Task, TaskStatus, initialState } from '@lit/task';
import type { IaDropdown } from '@internetarchive/ia-dropdown';
import {
  type UserListsServiceInterface,
  type UserList,
  UserListsServiceFactory,
} from './user-lists-service';

import '@internetarchive/ia-dropdown';
import './item-user-lists';

import spinner from './assets/images/spinner';
import plusIcon from './assets/icons/plusIcon';
import checkIcon from './assets/icons/checkIcon';

type DataAction = 'initial' | 'load';

@customElement('ia-item-user-lists')
export class IaItemUserLists extends LitElement {
  // Item identifier
  @property({ type: String }) item = '';

  // Count for main button icon state
  @state() private selectedCount: number = 0;

  // Data for userlist dropdown
  @state({
    hasChanged(newVal: UserList[], oldVal: UserList[]) {
      if (newVal?.length !== oldVal?.length) return true;

      // Check if any item is_member has changed
      for (let i = 0; i < newVal.length; i += 1) {
        if (newVal[i].item_is_member !== oldVal[i].item_is_member) {
          return true;
        }
      }
      return false;
    },
  })
  private userListData: UserList[] = [];

  // Which action to perform on data
  @state() private dataAction: DataAction = 'initial';

  // UserListsService
  @state() private userListsService: UserListsServiceInterface =
    UserListsServiceFactory.create();

  @query('ia-dropdown') private dropdown!: IaDropdown;

  private listID: string = '';

  // Events

  async dropdownClicked(e: Event): Promise<void> {
    e.preventDefault();
    if (!this.dropdown.open) {
      // get userlist data
      await this.dataActionTask.run(['load']);
      this.dropdown.open = true;
    } else {
      this.dropdown.open = false;
    }
  }

  // Event Handlers

  // Listen for simple close Dropdown event from item-userlists
  closeListener = (): void => {
    this.dropdown.open = false;
  };

  // Listen for close and wait Dropdown event from item-userlists
  selectListener = (): void => {
    this.dropdown.open = false;
    this.dataActionTask.run(['initial']);
  };

  // Listen for create List event from create-new-list
  updateListener = (): void => {
    this.dataActionTask.run(['load']);
  };

  // Lifecycle Methods

  async firstUpdated(): Promise<void> {
    // Give the browser a chance to paint
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(r => setTimeout(r, 0));

    // Setup event listeners
    this.addEventListener('closeDropdown', this.closeListener);

    this.addEventListener('selectDropdown', this.selectListener);

    this.addEventListener('updateDropdown', this.updateListener);

    this.dataActionTask.run(['load'])?.then(() => {
      this.dispatchEvent(
        new CustomEvent('userItemListDataReceived', {
          detail: {
            total_lists: this.userListData.length,
          },
        })
      );
    });
  }

  // Tasks

  /**
   * Task managing all async data and UI updates
   * @param action {DataAction} - Action to perform
   * @param listId {string} - List ID
   */
  private dataActionTask = new Task(this, {
    task: async ([action]) => {
      if (!this.item || !this.userListsService) {
        return initialState;
      }
      switch (action) {
        case 'load':
          return this.updateSelectedCount();
        default:
          return initialState;
      }
    },
    args: () => [this.dataAction],
    autoRun: false,
  });

  // Data Action Methods

  /**
   * Fetch user lists for item
   * @returns Promise<UserList[]>
   */
  private async updateItemUserList(): Promise<UserList[]> {
    const result = await this.userListsService.fetchOwnListsContainingItem(
      this.item
    );
    if (!result.success) {
      throw new Error(result.error?.message);
    }
    this.userListData = result.success as UserList[];
    return this.userListData;
  }

  /**
   * Return count of lists selected for this item after update from API
   * @returns Promise<number>
   */
  private async updateSelectedCount(): Promise<number> {
    const result = await this.updateItemUserList();
    this.selectedCount = result.filter(item => item.item_is_member).length;
    return this.selectedCount;
  }

  // Main button

  renderIcon(icon: TemplateResult): TemplateResult {
    return html`
      <div slot="icon" class="icon-img">${icon}</div>
      <div class="label">Add to list</div>
      <div class="label-sm">Lists</div>
    `;
  }

  renderError(): TemplateResult {
    return html`
      <div class="label">User Lists<br />Load Error</div>
      <div class="label-sm">Load<br />Error</div>
    `;
  }

  mainButton(icon: TemplateResult | undefined): TemplateResult {
    return html`
      <div class="action-bar-text">
        <ia-icon-label>
          ${icon ? this.renderIcon(icon) : this.renderError()}
        </ia-icon-label>
      </div>
    `;
  }

  // Templates

  get isFetched(): boolean {
    return this.dataActionTask.status === TaskStatus.COMPLETE;
  }

  get isDisabled(): boolean {
    return this.dataActionTask.status !== TaskStatus.COMPLETE;
  }

  get itemUserListsTemplate(): TemplateResult {
    return html`
      <item-user-lists
        slot="list"
        .itemId=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
        @addMember=${(e: CustomEvent) =>
          this.dispatchEvent(
            new CustomEvent('memberAdded', {
              detail: {
                ...e.detail,
                total_items: this.selectedCount,
              },
            })
          )}
        @removeMember=${(e: CustomEvent) =>
          this.dispatchEvent(
            new CustomEvent('memberRemoved', {
              detail: {
                ...e.detail,
                total_items: this.selectedCount,
              },
            })
          )}
        @userListError=${(e: CustomEvent) => {
          this.dispatchEvent(
            new CustomEvent('userListError', {
              detail: { ...e.detail },
            })
          );
        }}
        @listCreated=${(e: CustomEvent) => {
          this.dispatchEvent(
            new CustomEvent('listCreated', {
              detail: {
                ...e.detail,
                total_lists: this.selectedCount,
              },
            })
          );
        }}
      >
      </item-user-lists>
    `;
  }

  render() {
    return html`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?isDisabled=${this.isDisabled}
          ?openViaCaret=${false}
          ?isCustomList=${true}
          ?closeOnEscape=${true}
          ?closeOnBackdropClick=${true}
          ?hasCustomClickHandler=${true}
          @click=${this.isDisabled ? nothing : this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.dataActionTask.render({
              initial: () => this.mainButton(spinner),
              pending: () => this.mainButton(spinner),
              complete: listCount =>
                this.mainButton(listCount === 0 ? plusIcon : checkIcon),
              error: () => this.mainButton(undefined),
            })}
          </div>
          ${this.itemUserListsTemplate}
        </ia-dropdown>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }

    ia-icon-label {
      cursor: pointer;
      display: flex;
    }

    .icon-img {
      height: 16px;
      width: 16px;
      padding-bottom: 3px;
    }

    div.list-title {
      font-weight: 600;
      color: #2c2c2c;
    }

    ia-dropdown {
      --dropdownBgColor: #fff;
      --dropdownItemPaddingRight: 0;
      --dropdownItemPaddingLeft: 2px;
      --dropdownBorderColor: #2c2c2c;
      --dropdownBorderWidth: 2px;
      --iconLabelGutterWidth: 4px;
      --iconWidth: 10px;
      --dropdownOffsetTop: 2px;
      --buttonSlotPaddingRight: 0;
      --dropdownMainButtonFlexDirection: column;
      --dropdownMainButtonPadding: 6px 4px;
      --dropdownMainButtonHoverBgColor: rgba(44, 44, 44, 0.1);
      --dropdownMainButtonActiveBgColor: rgba(44, 44, 44, 0.3);
      --iconLabelGutterWidth: 0;
      --iconWidth: 16px;
      --dropdownMainButtonBorder: 2px solid #2c2c2c;
      --dropdownMainButtonBorderRadius: 3px;
    }

    .action-bar-text {
      font-weight: normal;
      --iconLabelFlexDirection: column;
      --iconLabelGutterWidth: 0;
      --iconWidth: 16px;
    }

    /* inside button.click-main, classname from details.inc buttons */
    @media (min-width: 985px) {
      .action-bar-text .label-sm {
        display: none;
      }
      .action-bar-text .label {
        padding-bottom: 2px;
        padding-top: 2px;
      }
    }

    @media (max-width: 984px) {
      .action-bar-text .label {
        display: none;
        padding-top: 2px;
        padding-bottom: 0px;
      }
    }

    .click-backdrop {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100vw;
      height: 100vh;
      z-index: 1;
      background-color: transparent;
    }
  `;
}
