import React, {useEffect, useState} from 'react';

import {useIsFocused} from '@react-navigation/native';
import {LayoutAnimation} from 'react-native';

import MenuDetailsView from './MenuDetailsView';
import {MenuDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {useMenuDetails} from '../../../services/restAPI/requests/menus';
import {removeItemFromMenu} from '../../../services/restAPI/requests/menus';

export function MenuDetails({navigation, route}: MenuDetailsProps) {
  /** Show the details of a single menu. */
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, setData, isLoading} = useMenuDetails(
    route.params.menuId,
    refreshKey,
  );
  const isFocused = useIsFocused();

  useEffect(() => {
    isFocused && onRefresh();
  }, [isFocused]);

  async function onRemoveItem(menuItemId: number): Promise<void> {
    removeItemFromMenu(menuItemId)
      .then(
        () =>
          data &&
          setData({
            ...data,
            items: data.items.filter(item => item.id !== menuItemId),
          }),
      )
      .then(() => LayoutAnimation.configureNext(layoutAnimConfig));
  }

  function onRefresh(): void {
    setRefreshKey(n => n + 1);
    LayoutAnimation.configureNext(layoutAnimConfig);
  }

  return (
    <MenuDetailsView
      menu={data}
      onRemoveItem={onRemoveItem}
      onRefresh={onRefresh}
      isLoading={isLoading}
      navigation={navigation}
    />
  );
}

const layoutAnimConfig = {
  duration: 300,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
