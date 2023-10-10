import { html } from 'lit';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/ia-userlist-settings';
import { userListServiceUrl } from './user-lists-service-url';

export async function createNewList(): Promise<void> {
  let modalManager = document.querySelector('modal-manager') as ModalManager;
  if (!modalManager) {
    const body = document.querySelector('body');
    modalManager = document.createElement('modal-manager') as ModalManager;
    body?.appendChild(modalManager);
  }

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
        @userListSaved=${async (e: CustomEvent) => {
          const data = await e.detail.outputData.json();

          window.dispatchEvent(
            new CustomEvent('createUserList', {
              detail: { created: data },
              bubbles: true,
              composed: true,
            })
          );

          modalManager.closeModal();
        }}
      ></iaux-userlist-settings>
    `,
  });
}
