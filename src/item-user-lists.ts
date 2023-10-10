/**
 * Creates list of li userlist elements.
 *
 * Events emitted:
 *   'selectDropdown'
 *     - option selected/unselected, returns selected count
 *   'closeDropdown'
 *     - have parent close the dropdown
 */

/* eslint-disable no-param-reassign */
import {
  html,
  css,
  svg,
  LitElement,
  TemplateResult,
  SVGTemplateResult,
} from 'lit';
import { property, customElement } from 'lit/decorators.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { IaIconLabel } from '@internetarchive/ia-dropdown';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type {
  UserList,
  UserListsServiceInterface,
} from '@internetarchive/ia-userlist-settings';
import type { userListDataInterface } from './item-user-lists-model';
import { createNewList } from './create-new-list';

interface userListOptionInterface {
  selectedHandler?: Function;
  label: string | TemplateResult;
  id: string;
  isSelected?: boolean;
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
  @property({ type: String }) identifier = 'Flash';

  /**
   * List of item userlists
   */
  @property({ type: Array }) lists: userListDataInterface[] = [];

  /**
   * User lists service
   */
  @property({ type: Object }) userListsService?: UserListsServiceInterface;

  get checkIcon(): SVGTemplateResult {
    return svg`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="height: 12px; width: 12px;"
    >
    <path
      d="m33.3333333 90-33.3333333-33.3333333 13.3333333-13.3333334 20 20 53.3333334-53.3333333 13.3333333 13.3333333z"
      fill-rule="evenodd"
    />
  </svg>`;
  }

  get plusIcon(): SVGTemplateResult {
    return svg`<svg
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      style="height: 12px; width: 12px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`;
  }

  renderUserListOption(option: userListOptionInterface): TemplateResult {
    const { label, isSelected, id } = option;
    const selected = isSelected ? 'selected' : '';
    const component = html`<button
      id="${id}"
      @click=${() => this.optionClicked(option)}
    >
      ${label}
    </button> `;

    return html`<li class=${selected}>${component}</li>`;
  }

  optionClicked(option: userListOptionInterface): void {
    this.dispatchEvent(
      new CustomEvent('optionSelected', {
        detail: { option },
      })
    );
    option.selectedHandler?.(option);
  }

  private checkedIcon(checked: boolean): TemplateResult {
    if (checked) {
      return html`${this.checkIcon}`;
    }
    return html`<div style="width: 12px; height: 12px;"></div>`;
  }

  // Convert userlist data into a list of options
  get userListOptions(): userListOptionInterface[] {
    const options: userListOptionInterface[] = [];

    this.lists.forEach(list => {
      const listOption = {
        label: html` <ia-icon-label>
          <div slot="icon">${this.checkedIcon(list.item_is_member)}</div>
          <div class="truncate">${list.name}</div>
        </ia-icon-label>`,
        id: list.id,
        selectedHandler: (option: userListOptionInterface) =>
          this.onSelected(option),
      } as userListOptionInterface;
      options.push(listOption);
    });

    const createNewListOption: userListOptionInterface = {
      label: html`<ia-icon-label>
        <div slot="icon">${this.plusIcon}</div>
        Create new list
      </ia-icon-label>`,
      id: 'create-new-list',
      selectedHandler: () => this.createList(),
    };
    options.push(createNewListOption);

    return options;
  }

  private async createList(): Promise<void> {
    await createNewList(this.userListsService);
  }

  private onSelected(option: userListOptionInterface): void {
    let selectedCount = 0;
    /* above disable no-param-reassign */
    this.lists = this.lists.map(list => {
      if (list.id === option.id) {
        list.item_is_member = !list.item_is_member;
      }
      if (list.item_is_member) {
        selectedCount += 1;
      }
      return list;
    });

    this.dispatchEvent(
      new CustomEvent('selectDropdown', {
        detail: { selected: selectedCount },
        bubbles: true,
        composed: true,
      })
    );
    this.closeDropdown();
  }

  private closeDropdown(): void {
    this.dispatchEvent(
      new CustomEvent('closeDropdown', {
        bubbles: true,
        composed: true,
      })
    );
  }

  render() {
    return html`
      ${this.userListOptions.map(o => this.renderUserListOption(o))}
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
    `;
  }
}
