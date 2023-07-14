import React from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {myRecipeListEndpoint} from '../../../services/restAPI/endpoints';
import {useGetData} from '../../../services/restAPI/request';
import {RecipePreview} from '../../../utils/types/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const {data, isLoading} =
    useGetData<Array<RecipePreview>>(myRecipeListEndpoint);

  return (
    <MyRecipeListView
      recipes={data}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
