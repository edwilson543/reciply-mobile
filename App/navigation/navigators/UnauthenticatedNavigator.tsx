import React from 'react';

import {ScreenName} from '../constants';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {SignIn} from '../../screens/auth';
import {AuthStackParams} from '../navigation.types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export default function UnauthenticatedNavigator() {
  /** Wrap the screens unauthenticated users are able to access. */
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen name={ScreenName.SignIn} component={SignIn} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
