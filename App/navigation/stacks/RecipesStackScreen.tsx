import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';

import {RecipeDetails, MyRecipeList} from '../../screens/recipes';
import {header} from '../../styles/layout';
import HeaderTitle from '../../components/HeaderTitle';

const RecipesStack = createNativeStackNavigator();

export function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator
      screenOptions={{headerTitle: HeaderTitle, ...header.headerScreenStyles}}>
      <RecipesStack.Screen name={Route.MyRecipeList} component={MyRecipeList} />
      <RecipesStack.Screen
        name={Route.RecipeDetails}
        component={RecipeDetails}
      />
    </RecipesStack.Navigator>
  );
}
