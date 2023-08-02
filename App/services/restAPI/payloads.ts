import {Day, MealTime} from './constants';

interface BaseError {
  non_field_errors?: Array<string>;
}

// Auth
export interface RegisterPayload {
  username: string;
  email: string;
  password1: string;
  password2: string;
}

export interface RegisterErrors extends BaseError, RegisterPayload {
  password: string;
}

export interface LoginSuccessPayload {
  token: string;
}

// Recipes

interface RecipeBasePayload {
  id: number;
  name: string;
  description: string;
}

export interface RecipeListPayload extends RecipeBasePayload {
  hero_image_source: string;
}

interface RecipeImage {
  id: number;
  is_hero: boolean;
  image_source: string;
}

export interface RecipeDetailsPayload extends RecipeBasePayload {
  images: Array<RecipeImage>;
  created_at: string;
  updated_at: string | null;
}

export interface CreateRecipeErrors extends BaseError {
  name?: Array<string>;
}

// Menus

interface MenuBasePayload {
  id: number;
  name: string;
  description: string;
}

export interface MenuItemPayload {
  id: number;
  recipe: RecipeListPayload;
  day: Day;
  meal_time: MealTime;
}

export interface MenuListPayload extends MenuBasePayload {
  number_of_items: number;
}

export interface MenuDetailsPayload extends MenuListPayload {
  items: Array<MenuItemPayload>;
}

export interface AddItemToMenuRequestPayload {
  recipeId: number;
  day: Day;
  meal_time: MealTime;
}

export interface AddItemToMenuResponsePayload {
  recipeId: number;
  day: Day;
  meal_time: MealTime;
}
