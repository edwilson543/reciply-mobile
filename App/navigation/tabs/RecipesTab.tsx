import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ScreenName} from '../constants';

import {RecipeDetails, MyRecipeList} from '../../screens/recipes';
import {RecipeStackParamsList} from '../navigation.types';
import {headerScreenStyles} from '../../styles/navigation';
import HeaderTitle from '../components/HeaderTitle';
import {useColourScheme} from '../../styles/colourScheme';

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
    </RecipesStack.Navigator>
  );
}
