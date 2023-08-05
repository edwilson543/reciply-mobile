import {NavigatorScreenParams, RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {MenuDetailsPayload} from '../../services/restAPI/payloads';
import {ScreenName} from '../constants';

/**
 * Parameters for tabs in the root tab navigator.
 * */

export type TabParamsList = {
  Recipes: NavigatorScreenParams<RecipeStackParamsList>;
  Menus: NavigatorScreenParams<MenuStackParamsList>;
  Profile: NavigatorScreenParams<ProfileStackParamsList>;
};

/**
 * Parameters for individual screens.
 * At present all type keys must match the ScreenName enum values in constants.ts.
 * */

export type RecipeStackParamsList = {
  MyRecipeList: {refresh?: boolean};
  RecipeDetails: {recipeId: number};
  CreateRecipe: undefined;
};

export type MenuStackParamsList = {
  MyMenuList: undefined;
  MenuDetails: {menuId: number};
  AddItemToMenu: {menu: MenuDetailsPayload};
  CreateMenu: undefined;
};

export type ProfileStackParamsList = {
  Account: undefined;
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

// CreateRecipe

export type CreateRecipeNavigationProp = NativeStackNavigationProp<
  RecipeStackParamsList,
  ScreenName.CreateRecipe
>;

export type CreateRecipeRouteProp = RouteProp<
  RecipeStackParamsList,
  ScreenName.CreateRecipe
>;

export type CreateRecipeProps = {
  navigation: CreateRecipeNavigationProp;
  route: CreateRecipeRouteProp;
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

// AddItemToMenu

export type AddItemToMenuNavigationProp = NativeStackNavigationProp<
  MenuStackParamsList,
  ScreenName.AddItemToMenu
>;

export type AddItemToMenuRouteProp = RouteProp<
  MenuStackParamsList,
  ScreenName.AddItemToMenu
>;

export type AddItemToMenuProps = {
  navigation: AddItemToMenuNavigationProp;
  route: AddItemToMenuRouteProp;
};

// CreateMenu

export type CreateMenuNavigationProp = NativeStackNavigationProp<
  MenuStackParamsList,
  ScreenName.CreateMenu
>;

export type CreateMenuRouteProp = RouteProp<
  MenuStackParamsList,
  ScreenName.CreateMenu
>;

export type CreateMenuProps = {
  navigation: CreateMenuNavigationProp;
  route: CreateMenuRouteProp;
};

/**
 * Profile screens prop types.
 */

// Profile

export type AccountNavigationProp = NativeStackNavigationProp<
  ProfileStackParamsList,
  ScreenName.Account
>;

export type AccountRouteProp = RouteProp<
  ProfileStackParamsList,
  ScreenName.Account
>;

export type AccountProps = {
  navigation: AccountNavigationProp;
  route: AccountRouteProp;
};
