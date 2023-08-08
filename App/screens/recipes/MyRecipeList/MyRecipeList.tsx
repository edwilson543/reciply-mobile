import React, {useState} from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {useMyRecipeList} from '../../../services/restAPI/requests/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useMyRecipeList(refreshKey);

  function onRefresh(): void {
    setRefreshKey(n => n + 1);
  }

  return (
    <MyRecipeListView
      recipes={data}
      isLoading={isLoading}
      onRefresh={onRefresh}
      navigation={navigation}
    />
  );
}
