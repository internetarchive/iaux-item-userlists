import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/ia-item-user-lists';

@customElement('app-root')
export class AppRoot extends LitElement {
  // NOTE: we don't have a user to validate for the service
  // so we expect pending, then error.
  render() {
    return html`
      <div>
        <ia-item-user-lists
          @memberAdded=${(e: CustomEvent) =>
            console.log('memberAdded', e.detail)}
          @memberRemoved=${(e: CustomEvent) =>
            console.log('memberRemoved', e.detail)}
          @listCreateOpen=${(e: CustomEvent) =>
            console.log('listCreateOpen', e.detail)}
          @userItemListDataReceived=${(e: CustomEvent) =>
            console.log('userItemListDataReceived', e.detail)}
          @closeDropdown=${() => console.log('closeDropdown')}
          @selectDropdown=${(e: CustomEvent) =>
            console.log('selectDropdown', e.detail)}
        ></ia-item-user-lists>
      </div>
    `;
  }

  static styles = css`
    :host {
      display: block;
    }
    div {
      display: flex;
    }
  `;
}
