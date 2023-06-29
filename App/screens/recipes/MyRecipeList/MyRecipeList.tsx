import React from 'react';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Route} from '../../../navigation/constants';
import {RecipeStackParams} from '../../../navigation/stackParams';
import {MyRecipeListView} from './MyRecipeListView';

type MyRecipeListProps = NativeStackScreenProps<
  RecipeStackParams,
  Route.MyRecipeList
>;

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  return <MyRecipeListView recipes={tempData} navigation={navigation} />;
}

const tempData = [
  {
    recipeId: 123456789,
    name: 'Mars bars on toast',
    description: 'Healthy alternative to apples',
    imageSource: '',
  },
  {
    recipeId: 987654321,
    name: 'Chicken fajita lasagne',
    description: 'Layered lasagne cake with extra cheese',
    imageSource: '',
  },
];
