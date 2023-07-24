import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {UnauthenticatedStackParamsList} from './navigation.types';
import {Login, Register} from '../../screens/auth';
import {ScreenName} from '../constants';

const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedStackParamsList>();

export default function UnauthenticatedNavigator() {
  /** Wrap the screens unauthenticated users are able to access. */
  return (
    <UnauthenticatedStack.Navigator screenOptions={{headerShown: false}}>
      <UnauthenticatedStack.Screen name={ScreenName.Login} component={Login} />
      <UnauthenticatedStack.Screen
        name={ScreenName.Register}
        component={Register}
      />
    </UnauthenticatedStack.Navigator>
  );
}
