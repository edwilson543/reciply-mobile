import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ScreenName} from '../../constants';
import {MyMenuList, MenuDetails} from '../../../screens/menus';
import {MenuStackParamsList} from '../../navigation.types';
import {headerScreenStyles} from '../../../styles/navigation';
import HeaderTitle from '../components/HeaderTitle';
import {useColourScheme} from '../../../styles/colourScheme';

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
