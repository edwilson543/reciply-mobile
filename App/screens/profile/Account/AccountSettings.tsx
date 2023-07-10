import React from 'react';

import {Pressable, ScrollView, Text} from 'react-native';

import * as auth from '../../../context/auth';
import {logout} from '../../../services/restAPI/authRequests/logout';
import * as storage from '../../../services/storage';
import {StorageKey} from '../../../services/storage';

export function AccountSettings() {
  /** View of the user's accounts with links to relevant actions. */
  const authDispatch = auth.useAuthDispatch();

  function handleLogout(): void {
    logout().then(() => {
      storage.deleteValueForKey(StorageKey.AuthToken);
      authDispatch({
        type: auth.AuthAction.Logout,
      });
    });
  }

  return (
    <ScrollView>
      <Pressable onPress={handleLogout}>
        <Text>Logout</Text>
      </Pressable>
    </ScrollView>
  );
}
