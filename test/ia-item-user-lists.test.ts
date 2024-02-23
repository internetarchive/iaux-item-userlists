import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import { UserListsService } from '@internetarchive/ia-userlist-settings';
import { UserListsServiceFactory } from '../src/user-lists-service';

import type { IaItemUserLists } from '../src/ia-item-user-lists';
import '../src/ia-item-user-lists';

describe('IAItemUserlists', () => {
  let mockCreateUserListsService: sinon.SinonStub;
  let mockUserListsService: sinon.SinonStubbedInstance<UserListsService>;

  beforeEach(() => {
    mockUserListsService = sinon.createStubInstance(UserListsService);
    mockCreateUserListsService = sinon.stub().returns(mockUserListsService);

    sinon
      .stub(UserListsServiceFactory, 'create')
      .callsFake(mockCreateUserListsService);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('creates UserListsService and loads item', async () => {
    mockUserListsService.fetchOwnListsContainingItem.resolves({ success: [] });

    const el = await fixture<IaItemUserLists>(
      html`<ia-item-user-lists item="goody"></ia-item-user-lists>`
    );

    await expect(el).shadowDom.to.be.accessible();

    sinon.assert.calledOnce(mockCreateUserListsService);

    sinon.assert.calledOnce(mockUserListsService.fetchOwnListsContainingItem);

    sinon.assert.calledWith(
      mockUserListsService.fetchOwnListsContainingItem,
      'goody'
    );

    const button = el.shadowRoot
      ?.querySelector('ia-dropdown')
      ?.shadowRoot?.querySelector('.click-main') as HTMLButtonElement;
    expect(button).to.not.have.attribute('disabled');

    const label = el.shadowRoot?.querySelector('div.label')?.innerHTML;
    expect(label).to.contain('Add to list');
  });

  it('is disabled on error', async () => {
    mockUserListsService.fetchOwnListsContainingItem.throws();

    const el = await fixture<IaItemUserLists>(
      html`<ia-item-user-lists item="goody"></ia-item-user-lists>`
    );

    await expect(el).shadowDom.to.be.accessible();

    sinon.assert.calledOnce(mockCreateUserListsService);

    sinon.assert.calledOnce(mockUserListsService.fetchOwnListsContainingItem);

    sinon.assert.calledWith(
      mockUserListsService.fetchOwnListsContainingItem,
      'goody'
    );

    const button = el.shadowRoot
      ?.querySelector('ia-dropdown')
      ?.shadowRoot?.querySelector('.click-main') as HTMLButtonElement;
    expect(button).to.have.attribute('disabled');

    const label = el.shadowRoot?.querySelector('div.label')?.innerHTML;
    expect(label).to.contain('Load Error');
  });
});
