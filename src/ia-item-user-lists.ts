/**
 * Button and dropdown for adding item to user lists
 */
import {
  html,
  css,
  LitElement,
  svg,
  SVGTemplateResult,
  TemplateResult,
} from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IaDropdown, IaIconLabel } from '@internetarchive/ia-dropdown';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  UserListsService,
  UserListsServiceInterface,
  UserList,
  /* UserListMember, */
} from '@internetarchive/ia-userlist-settings';
import { SearchService } from '@internetarchive/search-service';
import { UserService } from '@internetarchive/user-service';
import { FetchHandler } from './fetch-handler';
import { userListServiceUrl } from './user-lists-service-url';
import './item-user-lists';

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

  @state() private userListsService: UserListsServiceInterface =
    new UserListsService({
      fetchHandler: new FetchHandler(),
      searchService: SearchService.default,
      userService: new UserService(),
      baseUrl: userListServiceUrl,
    });

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
    const createEventListener = (e: CustomEvent) => {
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
      createEventListener as EventListener
    );
  }

  connectedCallback(): void {
    super.connectedCallback?.();
    // Set userlist data
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
    // eslint-disable-next-line no-console
    console.log('fetching userlist data for item', this.item);
    const result = await this.userListsService.fetchOwnListsContainingItem(
      this.item
    );
    if (result.success) {
      // eslint-disable-next-line no-console
      console.log('userlist data', result.success);
      this.userListData = result.success;

      // Initialize selected count for main button icon state
      this.selectedCount = this.userListData.filter(
        item => item.item_is_member
      ).length;
      // this.update();
    } else {
      // eslint-disable-next-line no-console
      console.error('Error loading userlist data', result.error);
    }
  }

  get checkIcon(): SVGTemplateResult {
    return svg`<svg viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style="width: 16px; height: 16px;"
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
      style="width: 16px; height: 16px;"
      >
    <g fill-rule="nonzero">
      <path d="m49.9459358 0c13.7978412 0 25.5896453 4.88776371 35.3754122 14.6632911 9.7857669 9.7755275 14.678652 21.554993 14.678652 35.3383967 0 13.7800281-4.8928851 25.5594936-14.678652 35.3350211-9.7857669 9.7755274-21.577571 14.6632911-35.3754122 14.6632911s-25.5716235-4.8877637-35.3213471-14.6632911c-9.74972353-9.7755275-14.6245887-21.554993-14.6245887-35.3383967-.00224931-9.0014064 2.23243779-17.3524613 6.70406469-25.0531645 4.47162691-7.7007033 10.54380341-13.7834037 18.21652941-18.24810129 7.6727261-4.46469761 16.0145067-6.69704641 25.0253417-6.69704641zm0 6c-7.9548389 0-15.2549008 1.95357387-22.0076943 5.8829701-6.7720278 3.9405885-12.0963254 9.2741139-16.0455165 16.0751171-3.93842488 6.7824623-5.89471047 14.0931257-5.89272481 22.040225 0 12.1941053 4.24437231 22.4500702 12.87283241 31.1013666 8.6242501 8.6470752 18.8695883 12.9003212 31.0731032 12.9003212 12.2065273 0 22.4734846-4.2557068 31.1349929-12.9081521 8.6603017-8.6512398 12.9190715-18.9040965 12.9190715-31.0935357l-.0036695-.6147591c-.1419586-11.9183989-4.4018851-21.9707923-12.915402-30.475401-8.6615083-8.6524453-18.9284656-12.9081521-31.1349929-12.9081521z" />
      <path d="m56 23v22h22v11h-22v22h-11l-.001-22h-21.999v-11h21.999l.001-22z" />
    </g>
  </svg>`;
  }

  get mainButton(): TemplateResult {
    return html`
      <div class="action-bar-text">
        <ia-icon-label>
          <div slot="icon" class="icon-img">
            ${this.selectedCount > 0 ? this.checkIcon : this.plusIcon}
          </div>
          <div class="label">Add to list</div>
          <div class="label-sm">Lists</div>
        </ia-icon-label>
      </div>
    `;
  }

  get itemUserlists(): TemplateResult {
    return html`
      <item-userlists
        slot="list"
        .identifier=${this.item}
        .lists=${this.userListData}
        .userListsService=${this.userListsService}
      >
      </item-userlists>
    `;
  }

  render() {
    return html`
      <div class="list-container">
        <ia-dropdown
          class="list-dropdown"
          ?openViaCaret=${false}
          ?closeOnSelect=${true}
          ?includeSelectedOption=${true}
          ?isCustomList=${true}
          ?closeOnEscape=${true}
        >
          <div class="list-title" slot="dropdown-label">${this.mainButton}</div>
          ${this.itemUserlists}
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
    }

    ia-icon-label {
      display: flex;
    }
    div.list-title {
      font-weight: 600;
      color: #2c2c2c;
    }

    ia-dropdown {
      --dropdownBgColor: #fff;
      --dropdownItemPaddingRight: 0;
      --dropdownItemPaddingLeft: 2px;
      --dropdownBorderColor: blue;
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

    svg {
      height: 30px;
      width: 30px;
    }
  `;
}
