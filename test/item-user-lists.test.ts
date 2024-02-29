import { html, fixture, expect } from '@open-wc/testing';
import type { UserList } from '@internetarchive/ia-userlist-settings';
import type { ItemUserLists } from '../src/item-user-lists';
import '../src/item-user-lists';

describe('ItemUserlists', () => {
  it('creates default create new list button', async () => {
    const el = await fixture<ItemUserLists>(
      html`<item-user-lists
        itemId="goody"
        .lists=${[]}
        .userListsService=${{} as any}
      >
      </item-user-lists>`
    );

    const liElements = el.shadowRoot?.querySelectorAll('li');
    expect(liElements?.length).to.equal(1);
    const li = liElements?.[0];
    expect(li?.classList.contains('selected')).to.be.false;
    const button = li?.querySelector('button') as HTMLButtonElement;
    expect(button?.innerText).to.equal('Create new list');
  });

  it('creates selected user list button', async () => {
    const el = await fixture<ItemUserLists>(
      html`<item-user-lists
        itemId="goody"
        .lists=${[
          { id: '1', list_name: 'My list', item_is_member: true } as UserList,
        ]}
        .userListsService=${{} as any}
      >
      </item-user-lists>`
    );

    const liElements = el.shadowRoot?.querySelectorAll('li');
    expect(liElements?.length).to.equal(2);
    const li = liElements?.[0];
    expect(li?.classList.contains('selected')).to.be.true;
    const button = li?.querySelector('button') as HTMLButtonElement;
    expect(button?.innerText).to.equal('My list');
  });
});
