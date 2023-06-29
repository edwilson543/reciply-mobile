import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Route} from '../constants';
import {useColorScheme} from 'react-native';

import {MyMenuList, MenuDetails} from '../../screens/menus';
import {MenuStackParams} from '../navigation.types';
import {headerScreenStyles} from '../../styles/navigation';
import HeaderTitle from '../../components/HeaderTitle';

const MenusStack = createNativeStackNavigator<MenuStackParams>();

export function MenuStackScreen() {
  const colourTheme = useColorScheme();

  return (
    <MenusStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
        ...headerScreenStyles(colourTheme),
      }}>
      <MenusStack.Screen name={Route.MyMenuList} component={MyMenuList} />
      <MenusStack.Screen name={Route.MenuDetails} component={MenuDetails} />
    </MenusStack.Navigator>
  );
}
