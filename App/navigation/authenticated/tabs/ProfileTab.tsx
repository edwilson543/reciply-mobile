import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as profileScreens from '../../../screens/profile';
import {useColourScheme} from '../../../styles/colourScheme';
import {ScreenName} from '../../constants';
import {ProfileStackParamsList} from '../navigation.types';
import {headerStyles} from '../styles/header';

const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

export function ProfileTab() {
  const colourScheme = useColourScheme();

  return (
    <ProfileStack.Navigator screenOptions={headerStyles(colourScheme)}>
      <ProfileStack.Screen
        name={ScreenName.Account}
        component={profileScreens.AccountSettings}
      />
    </ProfileStack.Navigator>
  );
}
