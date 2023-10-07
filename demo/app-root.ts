import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/ia-item-user-lists';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div>
        <ia-item-user-lists></ia-item-user-lists>
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
