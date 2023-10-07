import { html, fixture, expect } from '@open-wc/testing';

import type { IaItemUserLists } from '../src/ia-item-user-lists';

describe('IAItemUserlists', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IaItemUserLists>(
      html`<ia-item-user-lists></ia-item-user-lists>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
