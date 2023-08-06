import React, {useEffect, useState} from 'react';

import {useIsFocused} from '@react-navigation/native';

import MyMenuListView from './MyMenuListView';
import {MyMenuListProps} from '../../../navigation/authenticated/navigation.types';
import {useMyMenuList} from '../../../services/restAPI/requests/menus';

export function MyMenuList({navigation}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useMyMenuList(refreshKey);
  const isFocused = useIsFocused();

  useEffect(() => {
    /** Refresh the data when navigating back to this screen. */
    isFocused && onRefresh();
  }, [isFocused]);

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
