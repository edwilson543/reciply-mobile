import React, {useEffect, useState} from 'react';

import MyMenuListView from './MyMenuListView';
import {MyMenuListProps} from '../../../navigation/authenticated/navigation.types';
import {useMyMenuList} from '../../../services/restAPI/requests/menus';

export function MyMenuList({navigation, route}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useMyMenuList(refreshKey);

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
    <MyMenuListView
      menus={data}
      isLoading={isLoading}
      onRefresh={onRefresh}
      navigation={navigation}
    />
  );
}
