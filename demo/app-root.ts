import { html, css, LitElement } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import type { IaItemUserLists } from '../src/ia-item-user-lists';
import '../src/ia-item-user-lists';

@customElement('app-root')
export class AppRoot extends LitElement {
  @property({ type: String }) itemId = 'goody';

  @property({ type: String }) baseHost = 'archive.org';

  @query('ia-item-user-lists') iaItemUserLists!: IaItemUserLists;

  // NOTE: we don't have a usedr to validate for the service
  // so we expect pending, then error.
  render() {
    return html`
      <div>
        <ia-item-user-lists
          item=${this.itemId}
          .baseHost=${this.baseHost}
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
      <br />
      <section>
        <div>
          <form @submit=${this.changeBaseHost}>
            <label>
              <span>Change Base Host</span>
              <br />
              <span>https://</span>
              <input />
            </label>
          </form>
        </div>
      </section>
    `;
  }

  async changeBaseHost(e: Event) {
    const form = e?.target as HTMLFormElement;
    const newBaseHost = form?.querySelector('input')?.value as string;
    console.log('changeBaseHost', { old: this.baseHost, new: newBaseHost });
    this.baseHost = newBaseHost;
    await this.iaItemUserLists.updateComplete;
    console.log('userlistUpdated', this.iaItemUserLists.baseHost);
    e.preventDefault();
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
