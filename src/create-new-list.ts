import { html } from 'lit';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/ia-userlist-settings';
import { userListServiceUrl } from './user-lists-service-url';

export async function createNewList(): Promise<void> {
  const modalManager = document.querySelector('modal-manager') as ModalManager;
  modalManager?.setAttribute('id', 'create-user-list-modal');

  const createUserListsServiceUrl = `${userListServiceUrl}/me/lists`;

  modalManager.showModal({
    config: new ModalConfig({
      title: html`List settings`,
      headerColor: '#194880',
      showCloseButton: true,
      showHeaderLogo: false,
      closeOnBackdropClick: true,
    }),
    customModalContent: html`
      <iaux-userlist-settings
        .userList=${{}}
        .baseAPIUrl=${createUserListsServiceUrl}
        @listModalClosed=${() => {
          modalManager.closeModal();
        }}
        @listDetailsSaved=${(e: CustomEvent) => {
          // eslint-disable-next-line no-console
          console.log(e.detail.outputData);
          modalManager.closeModal();
          document.dispatchEvent(
            new CustomEvent('closeDropdown', {
              bubbles: true,
              composed: true,
            })
          );
          document.dispatchEvent(
            new CustomEvent('createUserList', {
              detail: { created: e.detail.outputData },
              bubbles: true,
              composed: true,
            })
          );
        }}
      ></iaux-userlist-settings>
    `,
  });
}
