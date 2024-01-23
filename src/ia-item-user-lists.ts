/**
 * Button and dropdown for adding item to user lists
 */
// #region Imports
import { html, css, LitElement, type TemplateResult } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
import { Task, TaskStatus, initialState } from '@lit/task';
import type { IaDropdown } from '@internetarchive/ia-dropdown';
import {
  type UserListsServiceInterface,
  type UserList,
  createUserListsService,
} from './user-lists-service';

import '@internetarchive/ia-dropdown';
import './item-user-lists';

import spinner from './assets/images/spinner';
import plusIcon from './assets/icons/plusIcon';
import checkIcon from './assets/icons/checkIcon';
// #endregion

type DataAction = 'load' | 'createList' | 'select' | 'unselect';

@customElement('ia-item-user-lists')
export class IaItemUserLists extends LitElement {
  // Item identifier
  @property({ type: String }) item = '';

  // Count for main button icon state
  @state() private selectedCount: number = 0;

  // Data for userlist dropdown
  @state({
    hasChanged(newVal: UserList[], oldVal: UserList[]) {
      // eslint-disable-next-line no-console
      console.log('userListData hasChanged called', newVal, oldVal);
      if (newVal?.length !== oldVal?.length) return true;

      // Check if any item is_member has changed
      for (let i = 0; i < newVal.length; i += 1) {
        if (newVal[i].item_is_member !== oldVal[i].item_is_member) {
          // eslint-disable-next-line no-console
          console.log('userListData hasChanged', newVal, oldVal);
          return true;
        }
      }
      return false;
    },
  })
  private userListData: UserList[] = [];

  private listID: string = '';

  @state() private dataAction: DataAction = 'load';

  // UserListsService
  @state() private userListsService: UserListsServiceInterface =
    createUserListsService();

  // ??? is this used?
  @query('ia-dropdown') private dropdown!: IaDropdown;

  // #region Tasks */
  dataActionTask = new Task(this, {
    task: async ([action, listId]) => {
      if (!this.item || !this.userListsService) {
        return initialState;
      }
      switch (action) {
        case 'load':
          return this.updateSelectedCount();
        case 'createList':
          return this.appendUserList(listId);
        case 'select':
          return this.selectUserList(listId);
        case 'unselect':
          return this.unselectUserList(listId);
        default:
          return initialState;
      }
    },
    args: () => [this.dataAction, this.listID],
    autoRun: false,
  });
  // #endregion

  /* Data Action Methods */
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

  private async updateSelectedCount(): Promise<number> {
    const result = await this.updateItemUserList();
    this.selectedCount = result.filter(item => item.item_is_member).length;
    return this.selectedCount;
  }

  private async appendUserList(listId: string): Promise<number> {
    await this.userListsService.addMemberToList(listId, {
      identifier: this.item,
    });
    return this.updateSelectedCount();
  }

  private async selectUserList(listId: string): Promise<number> {
    await this.userListsService.addMemberToList(listId, {
      identifier: this.item,
    });
    return this.updateSelectedCount();
  }

  private async unselectUserList(listId: string): Promise<number> {
    await this.userListsService.addMemberToList(listId, {
      identifier: this.item,
    });
    return this.updateSelectedCount();
  }

  /* Event Handlers */

  // listID, memberID
  // Listen for select Dropdown event from item-userlists
  selectEventListener = () => {
    this.dataActionTask.run(['load']);
  };

  // Listen for create List event from create-new-list
  newListEventListener = (e: CustomEvent) => {
    // TEMP: Set selected count for main button icon state
    this.selectedCount += 1;

    // eslint-disable-next-line no-console
    console.log('createUserList listener', e.detail.created);

    this.appendUserList(e.detail.created.id);

    this.dispatchEvent(
      new CustomEvent('closeDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  };

  // #region Lifecycle Methods
  async firstUpdated(): Promise<void> {
    // Give the browser a chance to paint
    // eslint-disable-next-line no-promise-executor-return
    await new Promise(r => setTimeout(r, 0));

    // Setup event listeners
    this.addEventListener(
      'selectDropdown',
      // eslint-disable-next-line no-undef
      this.selectEventListener as EventListener
    );

    window.addEventListener(
      'createUserList',
      // eslint-disable-next-line no-undef
      this.newListEventListener as EventListener
    );

    this.dataActionTask.run(['load']);
  }
  // #endregion

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

  get itemUserLists(): TemplateResult {
    if (this.dataActionTask.status !== TaskStatus.COMPLETE) {
      return html``;
    }
    return html`
      <item-userlists
        slot="list"
        .itemId=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
      >
      </item-userlists>
    `;
  }

  async dropdownClicked(): Promise<void> {
    // eslint-disable-next-line no-console
    console.log('dropdownClicked', this.dropdown.open);
    if (!this.dropdown.open) {
      // get userlist data
      await this.dataActionTask.run(['load']);
      this.dropdown.open = true;
    } else {
      this.dropdown.open = false;
    }
  }

  render() {
    return html`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?disabled=${this.dataActionTask.status !== TaskStatus.COMPLETE}
          ?openViaCaret=${false}
          ?isCustomList=${true}
          ?closeOnEscape=${true}
          ?closeOnBackdropClick=${true}
          ?hasCustomClickHandler=${true}
          @click=${this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">
            ${this.dataActionTask.render({
              initial: () => this.mainButton(spinner),
              pending: () => this.mainButton(spinner),
              complete: listCount =>
                this.mainButton(listCount < 2 ? plusIcon : checkIcon),
              error: () => this.mainButton(undefined),
            })}
          </div>
          ${this.itemUserLists}
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
