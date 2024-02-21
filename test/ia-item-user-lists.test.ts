import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';

import { UserListsService } from '@internetarchive/ia-userlist-settings';
import { UserListsServiceFactory } from '../src/user-lists-service';

import type { IaItemUserLists } from '../src/ia-item-user-lists';
import '../src/ia-item-user-lists';

describe('IAItemUserlists', () => {
  let mockCreateUserListsService: sinon.SinonStub;
  const mockUserListsService = sinon.createStubInstance(UserListsService);

  beforeEach(() => {
    mockCreateUserListsService = sinon.stub().returns(mockUserListsService);

    sinon
      .stub(UserListsServiceFactory, 'create')
      .callsFake(mockCreateUserListsService);
  });

  afterEach(() => {
    sinon.restore();
  });

  it('creates UserListsService and loads item', async () => {
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
  });
});
