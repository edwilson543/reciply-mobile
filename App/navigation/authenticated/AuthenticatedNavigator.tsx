import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {MenusTab, RecipesTab} from './tabs';
import {TabParamsList} from './navigation.types';
import {TabName} from '../constants';

const Tab = createBottomTabNavigator<TabParamsList>();

export default function AuthenticatedNavigator() {
  /** Wrap each of the tabs authenticated users can access inside a navigator. */
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name={TabName.Recipes} component={RecipesTab} />
      <Tab.Screen name={TabName.Menus} component={MenusTab} />
    </Tab.Navigator>
  );
}
