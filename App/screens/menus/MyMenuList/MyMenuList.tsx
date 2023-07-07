import React from 'react';
import {Button, Text, View} from 'react-native';

import {MyMenuListProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';

export function MyMenuList({navigation}: MyMenuListProps) {
  /** List the menus the user has written themselves. */
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text testID={'menus-header'}>Menus</Text>
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
            navigation.push(ScreenName.MenuDetails, {menuId: 333666999})
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
            navigation.push(ScreenName.MenuDetails, {menuId: 3131313131})
          }
        />
      </View>
    </View>
  );
}
