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
        .userList=${{
          id: undefined,
          list_name: '',
          description: '',
          is_private: false,
        }}
        .baseAPIUrl=${createUserListsServiceUrl}
        @listModalClosed=${() => {
          modalManager.closeModal();
        }}
        @userListSaved=${(e: CustomEvent) => {
          // eslint-disable-next-line no-console
          console.log('userListSaved', e.detail.outputData);
          modalManager.closeModal();
          window.dispatchEvent(
            new CustomEvent('closeDropdown', {
              bubbles: true,
              composed: true,
            })
          );
          window.dispatchEvent(
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
