import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NativeStackNavigatorProps} from 'react-native-screens/lib/typescript/native-stack/types';

import {
  MyMenuList,
  MenuDetails,
  AddItemToMenu,
  CreateMenu,
} from '../../../screens/menus';
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
      <MenusStack.Screen name={ScreenName.MyMenuList} component={MyMenuList} />
      <MenusStack.Screen
        name={ScreenName.MenuDetails}
        component={MenuDetails}
      />
      <MenusStack.Screen
        name={ScreenName.AddItemToMenu}
        component={AddItemToMenu}
      />
      <MenusStack.Screen name={ScreenName.CreateMenu} component={CreateMenu} />
    </MenusStack.Navigator>
  );
}
