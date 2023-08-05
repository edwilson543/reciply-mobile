import React, {useEffect, useState} from 'react';

import {useIsFocused} from '@react-navigation/native';

import MenuDetailsView from './MenuDetailsView';
import {MenuDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {useMenuDetails} from '../../../services/restAPI/requests/menus';

export function MenuDetails({navigation, route}: MenuDetailsProps) {
  /** Show the details of a single menu. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useMenuDetails(route.params.menuId, refreshKey);
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused && refreshKey) {
      setRefreshKey(key => key + 1);
    }
  }, [isFocused, refreshKey]);

  return (
    <MenuDetailsView
      menu={data}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}
