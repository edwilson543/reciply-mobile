import {Day, MealTime} from '../services/restAPI/constants';
import * as payloads from '../services/restAPI/payloads';

// Recipes

export const recipeListFixture = {
  id: 1,
  name: 'some recipe',
  description: 'some description',
  hero_image_source: '',
} as payloads.RecipeListPayload;

// Menus

export const menuListFixture = {
  id: 1,
  name: 'my menu',
  description: 'some description',
  number_of_items: 0,
} as payloads.MenuListPayload;

export const menuItemFixture = {
  id: 1,
  day: Day.Monday,
  meal_time: MealTime.Lunch,
  recipe: recipeListFixture,
} as payloads.MenuItemPayload;

export const menuDetailsFixture = {
  ...menuListFixture,
  items: [menuItemFixture],
};

// Hooks
export const useGetDataJunk = {
  /** Save having to write out all the junk below for typing. */
  setData: jest.fn(),
  friendlyErrors: null,
  isLoading: false,
  onRefresh: jest.fn(),
};
