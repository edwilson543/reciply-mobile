import React, {useEffect, useState} from 'react';

import MyRecipeListView from './MyRecipeListView';
import {MyRecipeListProps} from '../../../navigation/authenticated/navigation.types';
import {myRecipeListEndpoint} from '../../../services/restAPI/endpoints';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {useGetData} from '../../../services/restAPI/request';

export function MyRecipeList({navigation, route}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useGetData<Array<RecipeListPayload>>(
    myRecipeListEndpoint,
    refreshKey,
  );

  useEffect(() => {
    /** Allow screens navigating to this page to refresh the list once. */
    if (
      route.params !== undefined &&
      'refresh' in route.params &&
      route.params.refresh
    ) {
      onRefresh();
    }
  }, [route]);

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
