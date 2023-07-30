import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as profileScreens from '../../../screens/profile';
import {useColourScheme} from '../../../styles/colourScheme';
import {ScreenName} from '../../constants';
import HeaderTitle from '../components/HeaderTitle';
import {headerScreenStyles} from '../header';
import {ProfileStackParamsList} from '../navigation.types';

const ProfileStack = createNativeStackNavigator<ProfileStackParamsList>();

export function ProfileTab() {
  const colourScheme = useColourScheme();

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerTitle: HeaderTitle,
        ...headerScreenStyles(colourScheme),
      }}>
      <ProfileStack.Screen
        name={ScreenName.Account}
        component={profileScreens.AccountSettings}
      />
    </ProfileStack.Navigator>
  );
}
