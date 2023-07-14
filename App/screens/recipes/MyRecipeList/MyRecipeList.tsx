import React from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {myRecipeListEndpoint} from '../../../services/restAPI/recipeRequests/constants';
import {useDataGet} from '../../../services/restAPI/request';
import {RecipePreview} from '../../../utils/types/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const {data, isLoading} =
    useDataGet<Array<RecipePreview>>(myRecipeListEndpoint);

  return (
    <MyRecipeListView
      recipes={data}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
