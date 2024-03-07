import {
  UserListsService,
  type UserListsServiceInterface,
  type UserList,
} from '@internetarchive/ia-userlist-settings';
import { SearchService } from '@internetarchive/search-service';
import { UserService } from '@internetarchive/user-service';
import { FetchHandler } from './fetch-handler';
import { userListServiceUrl } from './user-lists-service-url';

export type { UserListsServiceInterface, UserList };
// UserListsService creator (for easier testing)
export const UserListsServiceFactory = {
  create(options: Record<string, unknown>): UserListsService {
    const { serviceUrl, serviceProtocol = 'https://' } = options;
    const baseUrl = serviceUrl
      ? `${serviceProtocol}${serviceUrl}`
      : userListServiceUrl;
    return new UserListsService({
      fetchHandler: new FetchHandler(),
      searchService: SearchService.default,
      userService: new UserService(),
      baseUrl,
    });
  },
};
