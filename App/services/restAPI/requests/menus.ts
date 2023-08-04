import {deleteData, postData, useGetData} from '../client';
import {Day, MealTime} from '../constants';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';
import {
  AddItemToMenuRequestPayload,
  AddItemToMenuResponsePayload,
  MenuItemPayload,
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

export const addItemToMenu = async (
  menuId: number,
  recipeId: number,
  day: Day,
  mealTime: MealTime,
): Promise<MenuItemPayload> => {
  const form = new FormData();
  form.append('recipe_id', recipeId);
  form.append('day', day);
  form.append('meal_time', mealTime.toUpperCase());
  return postData(endpoints.menuAddItemEndpoint(menuId), form).then(response =>
    response.json(),
  );
};

export const addItemsToMenu = async (
  menuId: number,
  items: Array<AddItemToMenuRequestPayload>,
): Promise<AddItemToMenuResponsePayload> => {
  const form = new FormData();
  form.append('items', items);
  return postData(endpoints.menuAddItemsEndpoint(menuId), form).then(response =>
    response.json(),
  );
};

export const removeItemFromMenu = async (
  menuItemId: number,
): Promise<Response> => {
  return deleteData(endpoints.menuRemoveItemEndpoint(menuItemId));
};
