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
        <ia-item-user-lists item="goody"></ia-item-user-lists>
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
