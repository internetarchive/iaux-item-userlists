// Get users lists
export interface ItemListJSONValueInterface {
  id: number;
  list_name: string;
  description: string;
  is_private: boolean;
  date_created: string;
  date_updated: string;
  item_is_member: boolean;
  members?: any[];
}

export interface ItemListJSONInterface {
  success: boolean;
  value?: ItemListJSONValueInterface[];
}

// local test data
export interface userListDataInterface {
  name: string;
  item_is_member: boolean;
  id: string;
}

export const userListTestData: userListDataInterface[] = [
  {
    name: 'A very long list name that will wrap to the next line and then some',
    item_is_member: true,
    id: '0',
  },
  {
    name: 'Silver age comics are the best',
    item_is_member: true,
    id: '1',
  },
  {
    name: 'Old reel leaders',
    item_is_member: false,
    id: '2',
  },
  {
    name: 'Microsoft stuff',
    item_is_member: true,
    id: '3',
  },
  {
    name: 'Radio shows from the golden age of radio',
    item_is_member: false,
    id: '4',
  },
];
