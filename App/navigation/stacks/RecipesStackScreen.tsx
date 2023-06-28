import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';

import HeaderTitle from '../../components/HeaderTitle';
import {RecipeDetails, MyRecipeList} from '../../screens/recipes';

const RecipesStack = createNativeStackNavigator();

export function RecipesStackScreen() {
  return (
    <RecipesStack.Navigator>
      <RecipesStack.Screen
        name={Route.MyRecipeList}
        component={MyRecipeList}
        options={{headerTitle: HeaderTitle}}
      />
      <RecipesStack.Screen
        name={Route.RecipeDetails}
        component={RecipeDetails}
        options={{headerTitle: HeaderTitle}}
      />
    </RecipesStack.Navigator>
  );
}
