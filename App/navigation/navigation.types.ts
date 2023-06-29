import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {Route} from './constants';

/**
 * Parameters for screens in the auth stack.
 * */

export type AuthStackParams = {
  SignIn: undefined;
};

/**
 * Parameters for tabs in the root tab navigator.
 * */

export type TabParams = {
  Recipes: undefined;
  Menus: undefined;
};

/**
 * Parameters for individual screens.
 * At present all type keys must match the Route enum values in constants.ts.
 * */

export type RecipeStackParams = {
  MyRecipeList: undefined;
  RecipeDetails: {recipeId: number};
};

export type MenuStackParams = {
  MyMenuList: undefined;
  MenuDetails: {menuId: number};
};

/**
 * Recipe screens prop types.
 */

// MyRecipeList

export type MyRecipeListNavigationProp = NativeStackNavigationProp<
  RecipeStackParams,
  Route.MyRecipeList
>;

export type MyRecipeListRouteProp = RouteProp<
  RecipeStackParams,
  Route.MyRecipeList
>;

export type MyRecipeListProps = {
  navigation: MyRecipeListNavigationProp;
  route: MyRecipeListRouteProp;
};

// RecipeDetails

export type RecipeDetailsNavigationProp = NativeStackNavigationProp<
  RecipeStackParams,
  Route.RecipeDetails
>;

export type RecipeDetailsRouteProp = RouteProp<
  RecipeStackParams,
  Route.RecipeDetails
>;

export type RecipeDetailsProps = {
  navigation: RecipeDetailsNavigationProp;
  route: RecipeDetailsRouteProp;
};

/**
 * Menu screens prop types.
 */

// MyMenuList

export type MyMenuListNavigationProp = NativeStackNavigationProp<
  MenuStackParams,
  Route.MyMenuList
>;

export type MyMenuListRouteProp = RouteProp<MenuStackParams, Route.MyMenuList>;

export type MyMenuListProps = {
  navigation: MyMenuListNavigationProp;
  route: MyMenuListRouteProp;
};

// MenuDetails

export type MenuDetailsNavigationProp = NativeStackNavigationProp<
  MenuStackParams,
  Route.MenuDetails
>;

export type MenuDetailsRouteProp = RouteProp<
  MenuStackParams,
  Route.MenuDetails
>;

export type MenuDetailsProps = {
  navigation: MenuDetailsNavigationProp;
  route: MenuDetailsRouteProp;
};
