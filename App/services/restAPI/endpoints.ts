export const APILocation = 'http://127.0.0.1:8000/api/';

// Auth
export const loginEndpoint = 'login/';
export const logoutEndpoint = 'logout/';
export const registerEndpoint = 'register/';

// Recipes
const RecipeUrlBase = 'recipes/recipe';
export const myRecipeListEndpoint = `${RecipeUrlBase}/list/`;
export const createRecipeEndpoint = `${RecipeUrlBase}/create/`;
export const recipeDetailsEndpoint = (recipeId: number) =>
  `${RecipeUrlBase}/${recipeId}/`;

// Menus

const MenuUrlBase = 'menus';
export const myMenuListEndpoint = `${MenuUrlBase}/menu/list/`;
export const createMenuEndpoint = `${MenuUrlBase}/menu/create/`;
export const menuDetailsEndpoint = (menuId: number) =>
  `${MenuUrlBase}/menu/${menuId}/`;
export const menuAddItemEndpoint = (menuId: number) =>
  `${MenuUrlBase}/menu/${menuId}/add-item/`;
export const menuAddItemsEndpoint = (menuId: number) =>
  `${MenuUrlBase}/menu/${menuId}/add-items/`;
export const menuRemoveItemEndpoint = (menuItemId: number) =>
  `${MenuUrlBase}/menu-item/${menuItemId}/`;
