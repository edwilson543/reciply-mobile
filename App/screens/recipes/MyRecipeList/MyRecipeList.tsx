import React from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {myRecipeListEndpoint} from '../../../services/restAPI/endpoints';
import {useGetData} from '../../../services/restAPI/request';
import {RecipePreview} from '../../../utils/types/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const {data, friendlyErrors, isLoading} =
    useGetData<Array<RecipePreview>>(myRecipeListEndpoint);

  console.log('MyRecipeList errors:', friendlyErrors); // TODO -> use

  return (
    <MyRecipeListView
      recipes={data}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
