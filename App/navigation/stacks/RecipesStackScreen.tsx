import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';
import {useColorScheme} from 'react-native';

import {RecipeDetails, MyRecipeList} from '../../screens/recipes';
import {RecipeStackParams} from '../stackParams';
import {header} from '../../styles/layout';
import HeaderTitle from '../../components/HeaderTitle';

const RecipesStack = createNativeStackNavigator<RecipeStackParams>();

export function RecipesStackScreen() {
  const colourTheme = useColorScheme();

  return (
    <RecipesStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
        ...header.headerScreenStyles(colourTheme),
      }}>
      <RecipesStack.Screen name={Route.MyRecipeList} component={MyRecipeList} />
      <RecipesStack.Screen
        name={Route.RecipeDetails}
        component={RecipeDetails}
      />
    </RecipesStack.Navigator>
  );
}
