import {Day, MealTime} from '../services/restAPI/constants';
import * as payloads from '../services/restAPI/payloads';

// Recipes

export const recipeListFixture = {
  id: 1,
  name: 'some recipe',
  description: 'some description',
  hero_image_source: '',
} as payloads.RecipeListPayload;

export const nutritionalInformationFixture = {
  protein_grams: 100,
  carbohydrates_grams: 10,
};

export const recipeDetailsFixture = {
  id: 1,
  name: 'sausages',
  description: 'some description',
  images: [],
  ingredients: ['400g of chicken'],
  nutritional_information: nutritionalInformationFixture,
  created_at: '',
  updated_at: '',
};

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
