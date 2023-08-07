import React from 'react';

import {
  faBookOpen,
  faCalendar,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {TabParamsList} from './navigation.types';
import {MenusTab, RecipesTab, ProfileTab} from './tabs';
import {ColourScheme, useColourScheme} from '../../styles/colourScheme';
import {TabName} from '../constants';

const Tab = createBottomTabNavigator<TabParamsList>();

export default function AuthenticatedNavigator() {
  /** Wrap each of the tabs authenticated users can access inside a navigator. */
  const colourScheme = useColourScheme();
  const iconOptions = iconStyles(colourScheme);

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name={TabName.Recipes}
        component={RecipesTab}
        options={{
          tabBarIcon: recipeIcon,
          ...iconOptions,
        }}
      />
      <Tab.Screen
        name={TabName.Menus}
        component={MenusTab}
        options={{
          tabBarIcon: menuIcon,
          ...iconOptions,
        }}
      />
      <Tab.Screen
        name={TabName.Profile}
        component={ProfileTab}
        options={{
          tabBarIcon: profileIcon,
          ...iconOptions,
        }}
      />
    </Tab.Navigator>
  );
}

const recipeIcon = ({color}: {color: string}) => (
  <FontAwesomeIcon icon={faBookOpen} color={color} />
);

const menuIcon = ({color}: {color: string}) => (
  <FontAwesomeIcon icon={faCalendar} color={color} />
);

const profileIcon = ({color}: {color: string}) => (
  <FontAwesomeIcon icon={faUser} color={color} />
);

function iconStyles(colourScheme: ColourScheme) {
  return {
    // Typography
    tabBarActiveTintColor: colourScheme.tabIconActive,
    tabBarInactiveTintColor: colourScheme.tabIconInactive,
    // Background
    tabBarActiveBackgroundColor: colourScheme.backgroundPrimary,
    tabBarInactiveBackgroundColor: colourScheme.backgroundPrimary,
  };
}
