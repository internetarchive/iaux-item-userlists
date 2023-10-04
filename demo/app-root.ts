import { html, css, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';
import '../src/ia-item-userlists';

@customElement('app-root')
export class AppRoot extends LitElement {
  render() {
    return html`
      <div>
        <ia-item-userlists> fjsdklkl </ia-item-userlists>
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
