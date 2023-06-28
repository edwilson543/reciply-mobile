import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';

import {MyMenuList, MenuDetails} from '../../screens/menus';
import {MenuStackParams} from '../stackParams';
import {header} from '../../styles/layout';
import HeaderTitle from '../../components/HeaderTitle';

const MenusStack = createNativeStackNavigator<MenuStackParams>();

export function MenuStackScreen() {
  return (
    <MenusStack.Navigator
      screenOptions={{headerTitle: HeaderTitle, ...header.headerScreenStyles}}>
      <MenusStack.Screen name={Route.MyMenuList} component={MyMenuList} />
      <MenusStack.Screen name={Route.MenuDetails} component={MenuDetails} />
    </MenusStack.Navigator>
  );
}
