import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from 'react-native-screens/lib/typescript/native-stack/types';

import * as screens from '../../../screens/menus';
import {useColourScheme} from '../../../styles/colourScheme';
import {ScreenName} from '../../constants';
import {MenuStackParamsList} from '../navigation.types';
import {headerStyles} from '../styles/header';

const MenusStack = createNativeStackNavigator<MenuStackParamsList>();

type MenusTabProps = {
  navigatorProps?: NativeStackNavigatorProps;
};

export function MenusTab({navigatorProps}: MenusTabProps) {
  const colourScheme = useColourScheme();

  return (
    <MenusStack.Navigator
      {...navigatorProps}
      screenOptions={headerStyles(colourScheme)}>
      <MenusStack.Screen
        name={ScreenName.MyMenuList}
        component={screens.MyMenuList}
      />
      <MenusStack.Screen
        name={ScreenName.MenuDetails}
        component={screens.MenuDetails}
      />
      <MenusStack.Screen
        name={ScreenName.ManageMenuItems}
        component={screens.ManageMenuItems}
      />
      <MenusStack.Screen
        name={ScreenName.CreateMenu}
        component={screens.CreateMenu}
      />
    </MenusStack.Navigator>
  );
}
