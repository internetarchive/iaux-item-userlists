import { html, fixture, expect } from '@open-wc/testing';

import type { IaItemUserlists } from '../src/ia-item-userlists';

describe('IAItemUserlists', () => {
  it('passes the a11y audit', async () => {
    const el = await fixture<IaItemUserlists>(
      html`<ia-item-userlists></ia-item-userlists>`
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
