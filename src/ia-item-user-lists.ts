/**
 * Button and dropdown for adding item to user lists
 */
import { html, css, LitElement, type TemplateResult, nothing } from 'lit';
import { property, customElement, state, query } from 'lit/decorators.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import type { IaDropdown } from '@internetarchive/ia-dropdown';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  UserListsService,
  type UserListsServiceInterface,
  type UserList,
  /* UserListMember, */
} from '@internetarchive/ia-userlist-settings';
import { SearchService } from '@internetarchive/search-service';
import { UserService } from '@internetarchive/user-service';
import { FetchHandler } from './fetch-handler';
import { userListServiceUrl } from './user-lists-service-url';
import '@internetarchive/ia-dropdown';
import './item-user-lists';
import spinner from './assets/images/spinner';
import plusIcon from './assets/icons/plusIcon';
import checkIcon from './assets/icons/checkIcon';

type mainButtonStatusType = 'loading' | 'no_lists' | 'lists' | 'error';
@customElement('ia-item-user-lists')
export class IaItemUserLists extends LitElement {
  /**
   * Item identifier
   */
  @property({ type: String }) item = '';

  // Count for main button icon state
  @state() private selectedCount: number = 0;

  // Data for userlist dropdown
  @state() private userListData: UserList[] = [];

  @state() private backdropVisible: boolean = false;

  @state() private userListsService: UserListsServiceInterface =
    new UserListsService({
      fetchHandler: new FetchHandler(),
      searchService: SearchService.default,
      userService: new UserService(),
      baseUrl: userListServiceUrl,
    });

  @state() private mainButtonStatus: mainButtonStatusType = 'loading';

  // ??? is this used?
  @query('ia-dropdown') private dropdown!: IaDropdown;

  constructor() {
    super();

    // Listen for select Dropdown event from item-userlists
    const selectEventListener = (e: CustomEvent) => {
      // Set selected count for main button icon state
      this.selectedCount = e.detail.selected as number;
      this.initUserLists();
    };
    this.addEventListener(
      'selectDropdown',
      // eslint-disable-next-line no-undef
      selectEventListener as EventListener
    );

    // Listen for create List event from create-new-list
    const newListEventListener = (e: CustomEvent) => {
      // TEMP: Set selected count for main button icon state
      this.selectedCount += 1;

      // eslint-disable-next-line no-console
      console.log('createUserList listener', e.detail.created);

      this.addMember(e.detail.created.id);

      this.dispatchEvent(
        new CustomEvent('closeDropdown', {
          bubbles: true,
          composed: true,
        })
      );
    };
    window.addEventListener(
      'createUserList',
      // eslint-disable-next-line no-undef
      newListEventListener as EventListener
    );
  }

  firstUpdated(): void {
    this.initUserLists();
  }

  private async addMember(listId: string): Promise<void> {
    await this.userListsService.addMemberToList(listId, {
      identifier: this.item,
    });
    await this.initUserLists();
  }

  private async initUserLists(): Promise<void> {
    // Load userlist data from API
    const result = await this.userListsService.fetchOwnListsContainingItem(
      this.item
    );
    if (result.success) {
      // eslint-disable-next-line no-console
      console.log('userlist data', result.success);
      this.userListData = [];
      this.userListData = result.success;

      // Initialize selected count for main button icon state
      this.selectedCount = this.userListData.filter(
        item => item.item_is_member
      ).length;

      this.mainButtonStatus = this.selectedCount === 0 ? 'no_lists' : 'lists';
    } else {
      // eslint-disable-next-line no-console
      console.error('Error loading userlist data', result.error);
      // eslint-disable-next-line no-alert
      window.alert('Error loading userlist data');
      this.mainButtonStatus = 'error';
    }
  }

  get mainButtonIcon(): TemplateResult {
    switch (this.mainButtonStatus) {
      case 'loading':
        return spinner;
      case 'no_lists':
        return plusIcon;
      case 'lists':
        return checkIcon;
      case 'error':
        return plusIcon;
      default:
        return spinner;
    }
  }

  get mainButton(): TemplateResult {
    return html`
      <div class="action-bar-text">
        <ia-icon-label @click=${this.mainButtonClicked}>
          <div slot="icon" class="icon-img">${this.mainButtonIcon}</div>
          <div class="label">Add to list</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `;
  }

  mainButtonClicked(): void {
    // eslint-disable-next-line no-console
    console.log('mainButtonClicked', this.dropdown.open);
    this.backdropVisible = this.dropdown.open;
    if (this.dropdown.open) {
      this.dropdown.focus();
      // Set userlist data
      this.initUserLists();
    }
  }

  get itemUserLists(): TemplateResult {
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

  get backdropTemplate(): TemplateResult | typeof nothing {
    // const visibleBackdrop = !this.backdropVisible;
    const visibleBackdrop = true;
    if (visibleBackdrop) return nothing;
    return html`
      <div
        class="click-backdrop"
        @click=${this.backdropClicked}
        @keypress=${this.backdropClicked}
      ></div>
    `;
  }

  backdropClicked(): void {
    this.dropdown.open = false;
    this.backdropVisible = false;
  }

  dropdownClicked(): void {
    // eslint-disable-next-line no-console
    console.log('dropdownClicked', this.dropdown.open);
    this.backdropVisible = this.dropdown.open;
    if (this.dropdown.open) {
      this.dropdown.focus();
      // Set userlist data
      this.initUserLists();
    }
  }

  render() {
    return html`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          disabled=${this.mainButtonStatus === 'loading' ||
          this.mainButtonStatus === 'error'}
          ?openViaCaret=${false}
          ?closeOnSelect=${true}
          ?includeSelectedOption=${true}
          ?isCustomList=${true}
          ?closeOnEscape=${true}
          ?closeOnBackdropClick=${true}
          @click=${this.dropdownClicked}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserLists}
        </ia-dropdown>
        ${this.backdropTemplate}
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
