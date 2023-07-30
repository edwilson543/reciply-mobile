import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {MyMenuList, MenuDetails} from '../../../screens/menus';
import {useColourScheme} from '../../../styles/colourScheme';
import {ScreenName} from '../../constants';
import HeaderTitle from '../components/HeaderTitle';
import {headerScreenStyles} from '../header';
import {MenuStackParamsList} from '../navigation.types';

const MenusStack = createNativeStackNavigator<MenuStackParamsList>();

export function MenusTab() {
  const colourScheme = useColourScheme();

  return (
    <MenusStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
        ...headerScreenStyles(colourScheme),
      }}>
      <MenusStack.Screen name={ScreenName.MyMenuList} component={MyMenuList} />
      <MenusStack.Screen
        name={ScreenName.MenuDetails}
        component={MenuDetails}
      />
    </MenusStack.Navigator>
  );
}
