import React from 'react';

import {ScreenName} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Login} from '../../screens/auth';
import {UnauthenticatedStackParamsList} from '../navigation.types';

const UnauthenticatedStack =
  createNativeStackNavigator<UnauthenticatedStackParamsList>();

export default function UnauthenticatedNavigator() {
  /** Wrap the screens unauthenticated users are able to access. */
  return (
    <UnauthenticatedStack.Navigator>
      <UnauthenticatedStack.Screen name={ScreenName.Login} component={Login} />
    </UnauthenticatedStack.Navigator>
  );
}
