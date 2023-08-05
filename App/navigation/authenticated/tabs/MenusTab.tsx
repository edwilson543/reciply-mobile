import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

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

export function MenusTab() {
  const colourScheme = useColourScheme();

  return (
    <MenusStack.Navigator screenOptions={headerStyles(colourScheme)}>
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
