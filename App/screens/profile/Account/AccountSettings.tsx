import React from 'react';

import {ScrollView} from 'react-native';

import LogoutButton from './LogoutButton';

export function AccountSettings() {
  /** View of the user's accounts with links to relevant actions. */

  return (
    <ScrollView>
      <LogoutButton />
    </ScrollView>
  );
}
