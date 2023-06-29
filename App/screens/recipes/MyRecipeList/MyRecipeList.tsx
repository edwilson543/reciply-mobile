import React from 'react';

import {MyRecipeListProps} from '../../../navigation/navigation.types';
import MyRecipeListView from './MyRecipeListView';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  // TODO -> hook & mock for fetching data
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
