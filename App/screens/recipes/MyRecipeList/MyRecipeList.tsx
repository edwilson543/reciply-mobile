import React from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import useMyRecipeList from '../../../services/restAPI/recipeRequests/myRecipeList';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const {recipeList, isLoading} = useMyRecipeList();

  return (
    <MyRecipeListView
      recipes={recipeList}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
