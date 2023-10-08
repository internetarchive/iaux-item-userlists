import { html } from 'lit';
import { ModalConfig, ModalManager } from '@internetarchive/modal-manager';
import '@internetarchive/ia-userlist-settings';

export async function createNewList(): Promise<void> {
  const modalManager = document.querySelector('modal-manager') as ModalManager;
  modalManager?.setAttribute('id', 'create-user-list-modal');

  const userListsServiceUrl =
    'https://www-laton.archive.org/services/users/me/lists';

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
        .baseAPIUrl=${userListsServiceUrl}
        @listModalClosed=${() => {
          modalManager.closeModal();
        }}
        @listDetailsSaved=${(e: CustomEvent) => {
          // eslint-disable-next-line no-console
          console.log(e.detail);
          modalManager.closeModal();
        }}
      ></iaux-userlist-settings>
    `,
  });
}
