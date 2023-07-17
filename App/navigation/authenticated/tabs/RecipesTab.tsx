import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from 'react-native-screens/lib/typescript/native-stack/types';

import {
  RecipeDetails,
  MyRecipeList,
  CreateRecipe,
} from '../../../screens/recipes';
import {useColourScheme} from '../../../styles/colourScheme';
import {headerScreenStyles} from '../../../styles/navigation';
import {ScreenName} from '../../constants';
import HeaderTitle from '../components/HeaderTitle';
import {RecipeStackParamsList} from '../navigation.types';

const RecipesStack = createNativeStackNavigator<RecipeStackParamsList>();

type RecipesTabProps = {
  navigatorProps?: NativeStackNavigatorProps;
};

export function RecipesTab({navigatorProps}: RecipesTabProps) {
  const colourScheme = useColourScheme();

  return (
    <RecipesStack.Navigator
      {...navigatorProps}
      screenOptions={{
        headerTitle: HeaderTitle,
        ...headerScreenStyles(colourScheme),
      }}>
      <RecipesStack.Screen
        name={ScreenName.MyRecipeList}
        component={MyRecipeList}
      />
      <RecipesStack.Screen
        name={ScreenName.RecipeDetails}
        component={RecipeDetails}
      />
      <RecipesStack.Screen
        name={ScreenName.CreateRecipe}
        component={CreateRecipe}
      />
    </RecipesStack.Navigator>
  );
}
