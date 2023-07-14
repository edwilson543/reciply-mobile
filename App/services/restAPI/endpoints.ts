export const APILocation = 'http://127.0.0.1:8000/api/';

// Auth
export const loginEndpoint = 'login/';
export const logoutEndpoint = 'logout/';

// Recipes
const RecipeUrlBase = 'recipes/recipe';
export const myRecipeListEndpoint = `${RecipeUrlBase}/list/`;
export const createRecipeEndpoint = `${RecipeUrlBase}/create/`;
export const recipeDetailsEndpoint = (recipeId: number) =>
  `${RecipeUrlBase}/${recipeId}`;
