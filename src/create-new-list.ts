import { html } from 'lit';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/ia-userlist-settings';
import type { UserListsServiceInterface } from '@internetarchive/ia-userlist-settings';

/**
 * @param service {UserListsServiceInterface}
 * @param closeDropdown {Function} - Close the dropdown
 * @param updateCount {Function} -  Update selected count
 */
export async function createNewList(
  service?: UserListsServiceInterface,
  closeDropdown?: Function | undefined,
  updateCount?: Function | undefined
): Promise<void> {
  let modalManager = document.querySelector('modal-manager') as ModalManager;
  if (!modalManager) {
    const body = document.querySelector('body');
    modalManager = document.createElement('modal-manager') as ModalManager;
    body?.appendChild(modalManager);
  }

  const closeModal = () => {
    const modal = modalManager ?? document.querySelector('modal-manager');
    modal?.showModal({
      config: new ModalConfig(),
      customModalContent: undefined,
      userClosedModalCallback: undefined,
    });
    modal?.closeModal();
    modalManager?.removeAttribute('id');
  };

  modalManager?.setAttribute('id', 'create-user-list-modal');

  modalManager.showModal({
    config: new ModalConfig({
      title: html`List settings`,
      headerColor: '#194880',
      showCloseButton: true,
      showHeaderLogo: false,
      closeOnBackdropClick: true,
    }),
    userClosedModalCallback: () => closeModal(),
    customModalContent: html`
      <iaux-userlist-settings
        .userList=${{
          id: undefined,
          list_name: '',
          description: '',
          is_private: false,
        }}
        .userListsService=${service}
        @listModalClosed=${() => closeModal()}
        @userListSaving=${async () => {
          // Call ancestor close
          closeDropdown?.();
        }}
        @userListSaved=${async () => {
          // Clear modal content
          closeModal();
          // Call ancestor update
          updateCount?.();
        }}
      ></iaux-userlist-settings>
    `,
  });
}
