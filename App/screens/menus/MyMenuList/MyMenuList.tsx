import React from 'react';

import MyMenuListView from './MyMenuListView';
import {MyMenuListProps} from '../../../navigation/authenticated/navigation.types';
import {useMyMenuList} from '../../../services/restAPI/requests/menus';

export function MyMenuList({navigation}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  const {data, isLoading, onRefresh} = useMyMenuList();

  return (
    <MyMenuListView
      menus={data}
      isLoading={isLoading}
      onRefresh={onRefresh}
      navigation={navigation}
    />
  );
}
