import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

export function RecipesTab() {
  const colourScheme = useColourScheme();

  return (
    <RecipesStack.Navigator
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
