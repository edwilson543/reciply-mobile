import React from 'react';

import {MyRecipeListProps} from '../../../navigation/navigation.types';
import MyRecipeListView from './MyRecipeListView';
import {useMyRecipeList} from '../../../services/restAPI/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const recipeList = useMyRecipeList();

  return <MyRecipeListView recipes={recipeList} navigation={navigation} />;
}
