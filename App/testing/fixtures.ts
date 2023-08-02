import {Day, MealTime} from '../services/restAPI/constants';
import * as payloads from '../services/restAPI/payloads';

export const recipeListFixture = {
  id: 1,
  name: 'some recipe',
  description: 'some description',
  hero_image_source: '',
} as payloads.RecipeListPayload;

export const menuItemFixture = {
  id: 1,
  day: Day.Monday,
  meal_time: MealTime.Lunch,
  recipe: recipeListFixture,
} as payloads.MenuItemPayload;

export const menuDetailsFixture = {
  id: 1,
  name: 'my menu',
  description: '',
  number_of_items: 1,
  items: [menuItemFixture],
};
