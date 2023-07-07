import React, {SetStateAction} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type LoginViewProps = {
  username: string;
  onUsernameChange: React.Dispatch<SetStateAction<string>>;
  password: string;
  onPasswordChange: React.Dispatch<SetStateAction<string>>;
};

export default function LoginView({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
}: LoginViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.screenContainer}>
      <View style={styleSheet.loginContainer}>
        <View style={styleSheet.textInputContainer}>
          <Text style={styleSheet.textInputLabel}>Username</Text>
          <TextInput
            value={username}
            onChangeText={onUsernameChange}
            style={styleSheet.textInputField}
          />
        </View>
        <View style={styleSheet.textInputContainer}>
          <Text style={styleSheet.textInputLabel}>Password</Text>
          <TextInput
            value={password}
            onChangeText={onPasswordChange}
            secureTextEntry={true}
            style={styleSheet.textInputField}
          />
        </View>
      </View>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    screenContainer: {
      // Display
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // Background
      backgroundColor: colourScheme.backgroundSecondary,
    },
    loginContainer: {
      // Display
      width: '75%',
      height: '40%',
      justifyContent: 'center',
      // Background and border
      backgroundColor: colourScheme.backgroundPrimary,
      borderRadius: 10,
    },
    textInputContainer: {
      // Display
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
    },
    textInputLabel: {
      // Display
      width: '75%',
      // Typography
      fontSize: FontSize.TextLarge,
      fontWeight: 'bold',
      color: colourScheme.fontPrimary,
      textAlign: 'left',
    },
    textInputField: {
      // Display
      width: '75%',
      // Border
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colourScheme.buttonPrimary,
      // Typography
      fontSize: FontSize.TextLarge,
      color: colourScheme.fontPrimary,
      textAlign: 'left',
    },
  });
