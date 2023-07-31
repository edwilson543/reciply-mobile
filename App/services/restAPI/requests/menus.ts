import {deleteData, postData, useGetData} from '../client';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';
import {
  AddItemToMenuRequestPayload,
  AddItemToMenuResponsePayload,
} from '../payloads';

export const useMyMenuList = (refreshKey: number) =>
  useGetData<Array<payloads.MenuListPayload>>(
    endpoints.myMenuListEndpoint,
    refreshKey,
  );

export const useMenuDetails = (menuId: number) =>
  useGetData<payloads.MenuDetailsPayload>(
    endpoints.menuDetailsEndpoint(menuId),
  );

export const createMenu = async (
  name: string,
  description: string,
): Promise<Response> => {
  const form = new FormData();
  form.append('name', name);
  form.append('description', description);
  return postData(endpoints.createMenuEndpoint, form);
};

export const addItemsToMenu = async (
  items: Array<AddItemToMenuRequestPayload>,
  menuId: number,
): Promise<AddItemToMenuResponsePayload> => {
  const form = new FormData();
  form.append('items', items);
  return postData(endpoints.menuAddItemsEndpoint(menuId), form).then(
    response => response.json() as unknown as AddItemToMenuResponsePayload,
  );
};

export const removeItemFromMenu = async (
  menuItemId: number,
): Promise<Response> => {
  return deleteData(endpoints.menuRemoveItemEndpoint(menuItemId));
};
