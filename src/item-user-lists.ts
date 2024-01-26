/**
 * Creates list of li userlist elements.
 *
 * Events emitted:
 *   'selectDropdown'
 *     - option selected/unselected, returns selected count
 *   'closeDropdown'
 *     - have parent close the dropdown
 */
import { html, css, LitElement, type TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import type {
  UserList,
  UserListsServiceInterface,
} from '@internetarchive/ia-userlist-settings';
// import spinner from './assets/images/spinner';
import { createNewList } from './create-new-list';
import plusIcon from './assets/icons/plusIcon';
import checkIcon from './assets/icons/checkIcon';

// type itemUserListStatusType = 'loading' | 'loaded' | 'error';

type optionStatusType = 'loading' | 'selected' | 'unselected' | 'error';
interface userListOptionInterface {
  selectedHandler?: Function;
  label: string | TemplateResult;
  id: string;
  isSelected?: boolean;
  status?: optionStatusType;
}

/**
 * Component to display a list of userlists
 * Used in ia-dropdown component
 * to have different type and behavior of options
 */
@customElement('item-userlists')
export class ItemUserlists extends LitElement {
  /**
   * Item identifier
   */
  @property({ type: String }) itemId = '';

  /**
   * List of item userlists
   */
  @property({ type: Array }) lists: UserList[] = [];

  /**
   * User lists service
   */
  @property({ type: Object }) userListsService!: UserListsServiceInterface;

  // Events

  private updateCount(): void {
    this.dispatchEvent(
      new CustomEvent('updateDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  }

  private closeDropdown(): void {
    this.dispatchEvent(
      new CustomEvent('closeDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  }

  // Event handlers

  private optionClicked(option: userListOptionInterface): void {
    option.selectedHandler?.(option);
  }

  private async onSelected(option: userListOptionInterface): Promise<void> {
    this.closeDropdown();

    const thisList =
      this.lists.find(list => option.id === list.id) || ({} as any);

    if (thisList.item_is_member) {
      await this.removeMember(thisList.id, thisList.member_id);
    } else {
      await this.addMember(thisList.id);
    }
    this.updateCount();
  }

  private async createList(): Promise<void> {
    await createNewList(this.userListsService, () => this.closeDropdown());
  }

  // Options

  // Convert userlist data into a list of options
  get userListOptions(): userListOptionInterface[] {
    const options: userListOptionInterface[] = [];

    this.lists.forEach(list => {
      const listOption = {
        label: html` <ia-icon-label>
          <div slot="icon" class="icon-size">
            ${this.checkedIcon(list.item_is_member)}
          </div>
          <div class="truncate">${list.list_name}</div>
        </ia-icon-label>`,
        id: list.id,
        isSelected: list.item_is_member,
        selectedHandler: (option: userListOptionInterface) =>
          this.onSelected(option),
      } as userListOptionInterface;
      options.push(listOption);
      // eslint-disable-next-line no-console
      console.log('listOption', listOption);
    });

    const createNewListOption: userListOptionInterface = {
      label: html`<ia-icon-label>
        <div slot="icon" class="icon-size">${plusIcon}</div>
        Create new list
      </ia-icon-label>`,
      id: 'create-new-list',
      selectedHandler: () => this.createList(),
    };
    options.push(createNewListOption);

    return options;
  }

  // Data

  private async addMember(listId: string): Promise<void> {
    await this.userListsService?.addMemberToList(listId, {
      identifier: this.itemId,
    });
  }

  private async removeMember(listId: string, memberId: string): Promise<void> {
    await this.userListsService?.removeMemberFromList(listId, memberId);
  }

  // UI Helpers
  private checkedIcon(checked?: boolean): TemplateResult {
    if (checked) {
      return checkIcon;
    }
    return html``;
  }

  // Templates

  userListOptionTemplate(option: userListOptionInterface): TemplateResult {
    const { label, isSelected, id } = option;
    const selected = isSelected ? 'selected' : undefined;
    const component = html`<button
      id="${id}"
      @click=${(e: Event) => {
        e.stopImmediatePropagation();
        this.optionClicked(option);
      }}
    >
      ${label}
    </button> `;

    return html`<li class="${ifDefined(selected)}">${component}</li>`;
  }

  render() {
    return html`
      ${this.userListOptions.map(o => this.userListOptionTemplate(o))}
    `;
  }

  static get styles() {
    return css`
      :host {
        display: inline;
        background-color: #fff;
      }

      li:hover {
        list-style: none;
        cursor: pointer;
      }

      li {
        background: #fff;
        list-style: none;
        height: 30px;
        cursor: pointer;
        border-bottom: 1px #f1f1f1 solid;
        color: #2c2c2c;
        width: 140px;
        text-overflow: ellipsis;
      }

      li button {
        background: none;
        color: inherit;
        border: none;
        font: inherit;
        cursor: pointer;
        width: 100%;
        padding: 0px 10px;
        font-size: 12px;
        --iconLabelGutterWidth: 8px;
        --iconWidth: 12px;
        margin: 0;
      }

      /* cover the list with the label */
      li > * > :first-child {
        margin: 0;
        display: inline-block;
        height: 30px;
        box-sizing: border-box;
        text-align: left;
        line-height: initial;
      }

      /* color opacity calculator: https://codepen.io/quyenvsp/pen/jOLBBmX
        foreground: #2c2c2c 44;
        background: #fff;
      */
      button:hover {
        /* 10% 234 */
        background-color: #eaeaea;
      }

      button:focus,
      button:focus-visible {
        /* 20% 213 */
        background-color: #d5d5d5;
      }

      button:active {
        /* 30% 192 */
        background-color: #c0c0c0;
      }

      .icon-size {
        width: 12px;
        height: 12px;
      }
    `;
  }
}
