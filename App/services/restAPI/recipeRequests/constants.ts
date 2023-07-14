const RecipeUrlBase = 'recipes/recipe';

export const myRecipeListEndpoint = `${RecipeUrlBase}/list/`;

export const createRecipeEndpoint = `${RecipeUrlBase}/create/`;

export const recipeDetailsEndpoint = (recipeId: number) =>
  `${RecipeUrlBase}/${recipeId}`;
