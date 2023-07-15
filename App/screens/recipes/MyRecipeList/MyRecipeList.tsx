import React, {useState} from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {myRecipeListEndpoint} from '../../../services/restAPI/endpoints';
import {useGetData} from '../../../services/restAPI/request';
import {RecipePreview} from '../../../utils/types/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, friendlyErrors, isLoading} = useGetData<Array<RecipePreview>>(
    myRecipeListEndpoint,
    refreshKey,
  );

  function onRefresh(): void {
    setRefreshKey(n => n + 1);
  }

  console.log('MyRecipeList errors:', friendlyErrors); // TODO -> use

  return (
    <MyRecipeListView
      recipes={data}
      isLoading={isLoading}
      onRefresh={onRefresh}
      navigation={navigation}
    />
  );
}
