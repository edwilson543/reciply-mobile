/** At present all type keys must match the enum values in constants.ts */

export type AuthStackParams = {
  SignIn: undefined;
};

export type TabParams = {
  Recipes: undefined;
  Menus: undefined;
};

export type RecipeStackParams = {
  MyRecipeList: undefined;
  RecipeDetails: {recipeId: number};
};

export type MenuStackParams = {
  MyMenuList: undefined;
  MenuDetails: {menuId: number};
};
