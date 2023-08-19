import {deleteData, postData, useGetData} from '../client';
import {Day, MealTime} from '../constants';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';
import {
  MenuItemPayload,
  CreateMenuErrors,
  MenuDetailsPayload,
  CreateMenuRequestPayload,
} from '../payloads';

export const useMyMenuList = () =>
  useGetData<Array<payloads.MenuListPayload>>(endpoints.myMenuListEndpoint);

export const useMenuDetails = (menuId: number) =>
  useGetData<payloads.MenuDetailsPayload>(
    endpoints.menuDetailsEndpoint(menuId),
  );

export const createMenu = async ({
  name,
  description,
  add_suggestions,
}: CreateMenuRequestPayload) => {
  const form = new FormData();
  form.append('name', name);
  form.append('description', description);
  form.append('add_suggestions', add_suggestions);
  return postData<MenuDetailsPayload, CreateMenuErrors>(
    endpoints.createMenuEndpoint,
    form,
  );
};

export const addItemToMenu = async (
  menuId: number,
  recipeId: number,
  day: Day,
  mealTime: MealTime,
) => {
  const form = new FormData();
  form.append('recipe_id', recipeId);
  form.append('day', day);
  form.append('meal_time', mealTime);
  return postData<MenuItemPayload, any>(
    endpoints.menuAddItemEndpoint(menuId),
    form,
  );
};

export const removeItemFromMenu = async (
  menuItemId: number,
): Promise<Response> => {
  return deleteData(endpoints.menuRemoveItemEndpoint(menuItemId));
};
