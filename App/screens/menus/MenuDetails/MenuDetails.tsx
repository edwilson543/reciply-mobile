import React from 'react';
import {Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {MenuStackParams} from '../../../navigation/stackParams';
import {Route} from '../../../navigation/constants';

type MenuDetailsProps = NativeStackScreenProps<
  MenuStackParams,
  Route.MenuDetails
>;

export function MenuDetails({route}: MenuDetailsProps) {
  /** Show the details of a single menu. */
  const menuId = route.params.menuId;

  return (
    <View>
      <Text>I will fetch & show the details for menu: {menuId}</Text>
    </View>
  );
}
