/** At present all type keys must match the enum values in constants.ts */

export type AuthStackParams = {
  SignIn: undefined;
};

export type TabParams = {
  Recipes: undefined;
};

export type RecipeStackParams = {
  MyRecipeList: undefined;
  RecipeDetails: {recipeId: number};
};
