import { html } from 'lit';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/ia-userlist-settings';
import type {
  UserList,
  UserListsServiceInterface,
} from '@internetarchive/ia-userlist-settings';

export async function createNewList(
  service?: UserListsServiceInterface,
  closeDropdown?: Function | undefined
): Promise<void> {
  let modalManager = document.querySelector('modal-manager') as ModalManager;
  if (!modalManager) {
    const body = document.querySelector('body');
    modalManager = document.createElement('modal-manager') as ModalManager;
    body?.appendChild(modalManager);
  }

  modalManager?.setAttribute('id', 'create-user-list-modal');

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
        .userListsService=${service}
        @listModalClosed=${() => {
          modalManager.showModal({
            config: new ModalConfig(),
            customModalContent: undefined,
          });
          modalManager.closeModal();
        }}
        @userListSaved=${async (e: CustomEvent<UserList>) => {
          window.dispatchEvent(
            new CustomEvent('createUserList', {
              detail: { created: e.detail },
              bubbles: true,
              composed: true,
            })
          );
          // Clear modal content
          modalManager.showModal({
            config: new ModalConfig(),
            customModalContent: undefined,
          });
          modalManager.closeModal();

          closeDropdown?.();
        }}
      ></iaux-userlist-settings>
    `,
  });
}
