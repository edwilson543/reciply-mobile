import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UnauthenticatedStackParamsList} from './navigation.types';
import {Login} from '../../screens/auth';
import {ScreenName} from '../constants';

const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedStackParamsList>();

export default function UnauthenticatedNavigator() {
  /** Wrap the screens unauthenticated users are able to access. */
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen
        name={ScreenName.Login}
        component={Login}
        options={{headerShown: false}}
      />
    </UnauthenticatedStack.Navigator>
  );
}
