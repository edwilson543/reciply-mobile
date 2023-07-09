import React from 'react';

import {Text, View} from 'react-native';

import {MenuDetailsProps} from '../../../navigation/authenticated/navigation.types';

export function MenuDetails({route}: MenuDetailsProps) {
  /** Show the details of a single menu. */
  const menuId = route.params.menuId;

  return (
    <View>
      <Text>I will fetch & show the details for menu: {menuId}</Text>
    </View>
  );
}
