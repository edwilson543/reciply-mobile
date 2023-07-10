import React from 'react';

import {Pressable, Text} from 'react-native';

import * as auth from '../../../context/auth';
import {logout} from '../../../services/restAPI/authRequests/logout';
import * as storage from '../../../services/storage';
import {StorageKey} from '../../../services/storage';

export default function LogoutButton() {
  /** Button for logging users out. */

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
    <Pressable onPress={handleLogout}>
      <Text>Logout</Text>
    </Pressable>
  );
}
