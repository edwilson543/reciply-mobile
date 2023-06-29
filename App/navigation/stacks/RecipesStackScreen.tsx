import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';

import {RecipeDetails, MyRecipeList} from '../../screens/recipes';
import {RecipeStackParams} from '../navigation.types';
import {headerScreenStyles} from '../../styles/navigation';
import HeaderTitle from '../../components/HeaderTitle';
import {useColourScheme} from '../../styles/colourScheme';

const RecipesStack = createNativeStackNavigator<RecipeStackParams>();

export function RecipesStackScreen() {
  const colourScheme = useColourScheme();

  return (
    <RecipesStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
        ...headerScreenStyles(colourScheme),
      }}>
      <RecipesStack.Screen name={Route.MyRecipeList} component={MyRecipeList} />
      <RecipesStack.Screen
        name={Route.RecipeDetails}
        component={RecipeDetails}
      />
    </RecipesStack.Navigator>
  );
}
