import React, {useState} from 'react';

import MyMenuListView from './MyMenuListView';
import {MyMenuListProps} from '../../../navigation/authenticated/navigation.types';
import {useMyMenuList} from '../../../services/restAPI/requests/menus';

export function MyMenuList({navigation}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useMyMenuList(refreshKey);

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
