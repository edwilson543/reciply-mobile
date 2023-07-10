import React from 'react';

import {Pressable, StyleSheet, Text} from 'react-native';

import * as auth from '../../../context/auth';
import {logout} from '../../../services/restAPI/authRequests/logout';
import * as storage from '../../../services/storage';
import {StorageKey} from '../../../services/storage';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

export default function LogoutButton() {
  /** Button for logging users out. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);
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
    <Pressable onPress={handleLogout} style={styleSheet.settingRow}>
      <Text style={styleSheet.settingText}>Logout</Text>
    </Pressable>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    settingRow: {
      // Display
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 20,
      // Background and border
      backgroundColor: colourScheme.buttonPrimary,
    },
    settingText: {
      // Typography
      fontSize: FontSize.Text,
      fontWeight: 'bold',
      color: colourScheme.buttonPrimaryFont,
    },
  });
