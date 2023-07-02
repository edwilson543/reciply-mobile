import React from 'react';

import {ScreenName} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SignIn} from '../../screens/auth';
import {UnauthenticatedStackParamsList} from '../navigation.types';

const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedStackParamsList>();

export default function UnauthenticatedNavigator() {
  /** Wrap the screens unauthenticated users are able to access. */
  return (
    <NavigationContainer>
      <UnauthenticatedStack.Navigator>
        <UnauthenticatedStack.Screen
          name={ScreenName.SignIn}
          component={SignIn}
        />
      </UnauthenticatedStack.Navigator>
    </NavigationContainer>
  );
}
