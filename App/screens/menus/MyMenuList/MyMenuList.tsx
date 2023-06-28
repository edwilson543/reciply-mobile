import React from 'react';
import {Button, Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Route} from '../../../navigation/constants';
import {MenuStackParams} from '../../../navigation/stackParams';

type MyMenuListProps = NativeStackScreenProps<
  MenuStackParams,
  Route.MyMenuList
>;

export function MyMenuList({navigation}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Christmas bulk</Text>
        <Button
          title={'view details'}
          onPress={() =>
            navigation.push(Route.MenuDetails, {menuId: 333666999})
          }
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Fajitas mon - thur, chicken wraps fri - sun</Text>
        <Button
          title={'view details'}
          onPress={() =>
            navigation.push(Route.MenuDetails, {menuId: 3131313131})
          }
        />
      </View>
    </View>
  );
}
