import {deleteData, postData, useGetData} from '../client';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';

export const useMenuList = (refreshKey: number) =>
  useGetData<Array<payloads.MenuListPayload>>(
    endpoints.myMenuListEndpoint,
    refreshKey,
  );

export const useMenuDetails = (menuId: number) =>
  useGetData<payloads.MenuDetailsPayload>(
    endpoints.menuDetailsEndpoint(menuId),
  );

export const createMenu = async (form: FormData): Promise<Response> => {
  return postData(endpoints.createMenuEndpoint, form);
};

export const addItemsToMenu = async (
  form: FormData,
  menuId: number,
): Promise<Response> => {
  return postData(endpoints.menuAddItemsEndpoint(menuId), form);
};

export const removeItemFromMenu = async (
  menuItemId: number,
): Promise<Response> => {
  return deleteData(endpoints.menuRemoveItemEndpoint(menuItemId));
};
