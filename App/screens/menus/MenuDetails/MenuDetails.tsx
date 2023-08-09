import React, {useState} from 'react';

import {LayoutAnimation} from 'react-native';

import MenuDetailsView from './MenuDetailsView';
import {opacityAnimConfig} from '../../../animations';
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
      .then(() => LayoutAnimation.configureNext(opacityAnimConfig));
  }

  function onRefresh(): void {
    setRefreshKey(n => n + 1);
    LayoutAnimation.configureNext(opacityAnimConfig);
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
