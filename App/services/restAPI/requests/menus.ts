import {deleteData, postData, useGetData} from '../client';
import {Day, MealTime} from '../constants';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';
import {
  MenuItemPayload,
  CreateMenuErrors,
  MenuDetailsPayload,
} from '../payloads';

export const useMyMenuList = (refreshKey: number) =>
  useGetData<Array<payloads.MenuListPayload>>(
    endpoints.myMenuListEndpoint,
    refreshKey,
  );

export const useMenuDetails = (menuId: number, refreshKey: number) =>
  useGetData<payloads.MenuDetailsPayload>(
    endpoints.menuDetailsEndpoint(menuId),
    refreshKey,
  );

export const createMenu = async (name: string, description: string) => {
  const form = new FormData();
  form.append('name', name);
  form.append('description', description);
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
