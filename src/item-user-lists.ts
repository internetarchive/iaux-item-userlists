import { html, css, LitElement, nothing, type TemplateResult } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import type {
  UserList,
  UserListsServiceInterface,
} from '@internetarchive/ia-userlist-settings';
// import spinner from './assets/images/spinner';
import { createNewList } from './create-new-list';
import plusIcon from './assets/icons/plusIcon';
import checkIcon from './assets/icons/checkIcon';

/**
 * option interface for user lists
 */
interface userListOptionInterface {
  id: string;
  label: string | TemplateResult;
  isSelected?: boolean;
  selectedHandler?: Function;
}

/**
 * Render select-/unselect-many options <li></li> from @property {UserList[]}
 *
 * ia-dropdown <slot name="list">
 * to have different type of options
 */
@customElement('item-user-lists')
export class ItemUserLists extends LitElement {
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

  private closeDropdown = (): void => {
    this.dispatchEvent(
      new CustomEvent('closeDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  };

  private selectDropdown = (): void => {
    this.dispatchEvent(
      new CustomEvent('selectDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  };

  private updateDropdown = (): void => {
    this.dispatchEvent(
      new CustomEvent('updateDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  };

  // Event handlers

  private optionClicked = (e: Event, option: userListOptionInterface) => {
    e.stopPropagation();
    option.selectedHandler?.(option);
  };

  private onSelected = async (
    option: userListOptionInterface
  ): Promise<void> => {
    this.selectDropdown();

    const thisList =
      this.lists.find(list => option.id === list.id) || ({} as any);

    if (thisList.item_is_member) {
      await this.removeMember(thisList.id, thisList.member_id);
    } else {
      await this.addMember(thisList.id);
    }
    this.updateDropdown();
  };

  private addCreatedList = async (createdId: string): Promise<void> => {
    await this.addMember(createdId);
    this.updateDropdown();
  };

  /**
   * Convenience method to create new list passing close/update event dispatchers
   */
  private createList = (): void => {
    this.closeDropdown();
    createNewList(
      this.userListsService,
      this.selectDropdown,
      this.addCreatedList
    );
  };

  // Options

  // Convert property userList[] into options[]
  private userListOptions = (): userListOptionInterface[] => {
    let options: userListOptionInterface[] = [];
    options = this.lists.map(list => this.listOption(list));
    options.push(this.newListOption);
    return options;
  };

  // Convert UserList into option
  private listOption(list: UserList): userListOptionInterface {
    return {
      id: list.id,
      label: this.labelTemplate(list),
      isSelected: list.item_is_member,
      selectedHandler: (option: userListOptionInterface) =>
        this.onSelected(option),
    } as userListOptionInterface;
  }

  // Create new list option
  get newListOption(): userListOptionInterface {
    return {
      id: 'create-new-list',
      label: html` <ia-icon-label>
        <div slot="icon" class="icon-size">${plusIcon}</div>
        Create new list
      </ia-icon-label>`,
      selectedHandler: () => this.createList(),
    };
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

  // Templates

  private labelTemplate(list: UserList): TemplateResult {
    const { item_is_member: checked, list_name: name } = list;

    return html`
      <ia-icon-label>
        <div slot="icon" class="icon-size">
          ${checked ? checkIcon : nothing}
        </div>
        <div class="truncate">${name}</div>
      </ia-icon-label>
    `;
  }

  private optionTemplate(option: userListOptionInterface): TemplateResult {
    return html` <li class="${option.isSelected ? 'selected' : ''}">
      ${this.buttonTemplate(option)}
    </li>`;
  }

  private buttonTemplate(option: userListOptionInterface): TemplateResult {
    return html`
      <button @click=${(e: Event) => this.optionClicked(e, option)}>
        ${option.label}
      </button>
    `;
  }

  render() {
    return html` ${this.userListOptions().map(o => this.optionTemplate(o))} `;
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
