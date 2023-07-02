import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {ScreenName} from './constants';

/**
 * Parameters for screens in the auth stack.
 * */

export type UnauthenticatedStackParamsList = {
  SignIn: undefined;
};

/**
 * Parameters for tabs in the root tab navigator.
 * */

export type TabParamsList = {
  Recipes: undefined;
  Menus: undefined;
};

/**
 * Parameters for individual screens.
 * At present all type keys must match the ScreenName enum values in constants.ts.
 * */

export type RecipeStackParamsList = {
  MyRecipeList: undefined;
  RecipeDetails: {recipeId: number};
};

export type MenuStackParamsList = {
  MyMenuList: undefined;
  MenuDetails: {menuId: number};
};

/**
 * Recipe screens prop types.
 */

// MyRecipeList

export type MyRecipeListNavigationProp = NativeStackNavigationProp<
  RecipeStackParamsList,
  ScreenName.MyRecipeList
>;

export type MyRecipeListRouteProp = RouteProp<
  RecipeStackParamsList,
  ScreenName.MyRecipeList
>;

export type MyRecipeListProps = {
  navigation: MyRecipeListNavigationProp;
  route: MyRecipeListRouteProp;
};

// RecipeDetails

export type RecipeDetailsNavigationProp = NativeStackNavigationProp<
  RecipeStackParamsList,
  ScreenName.RecipeDetails
>;

export type RecipeDetailsRouteProp = RouteProp<
  RecipeStackParamsList,
  ScreenName.RecipeDetails
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
  MenuStackParamsList,
  ScreenName.MyMenuList
>;

export type MyMenuListRouteProp = RouteProp<
  MenuStackParamsList,
  ScreenName.MyMenuList
>;

export type MyMenuListProps = {
  navigation: MyMenuListNavigationProp;
  route: MyMenuListRouteProp;
};

// MenuDetails

export type MenuDetailsNavigationProp = NativeStackNavigationProp<
  MenuStackParamsList,
  ScreenName.MenuDetails
>;

export type MenuDetailsRouteProp = RouteProp<
  MenuStackParamsList,
  ScreenName.MenuDetails
>;

export type MenuDetailsProps = {
  navigation: MenuDetailsNavigationProp;
  route: MenuDetailsRouteProp;
};
