import React, {SetStateAction} from 'react';

import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type LoginViewProps = {
  username: string;
  onUsernameChange: React.Dispatch<SetStateAction<string>>;
  password: string;
  onPasswordChange: React.Dispatch<SetStateAction<string>>;
  handleLogin: () => void;
  isLoading: boolean;
  canSubmit: boolean;
  errorMessage: string;
};

export default function LoginView({
  username,
  onUsernameChange,
  password,
  onPasswordChange,
  handleLogin,
  isLoading,
  canSubmit,
  errorMessage,
}: LoginViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.screenContainer}>
      <View style={styleSheet.loginContainer}>
        {errorMessage ? (
          <View style={styleSheet.errorText}>
            <Text style={styleSheet.errorText} testID={'error-message'}>
              {errorMessage}
            </Text>
          </View>
        ) : (
          <></>
        )}
        {isLoading ? (
          <LoadingSpinner size={'large'} />
        ) : (
          <>
            <View style={styleSheet.textInputContainer}>
              <Text style={styleSheet.textInputLabel}>Username</Text>
              <TextInput
                value={username}
                onChangeText={onUsernameChange}
                autoCapitalize={'none'}
                style={styleSheet.textInputField}
                testID={'username-input'}
              />
            </View>
            <View style={styleSheet.textInputContainer}>
              <Text style={styleSheet.textInputLabel}>Password</Text>
              <TextInput
                value={password}
                onChangeText={onPasswordChange}
                autoCapitalize={'none'}
                secureTextEntry={true}
                style={styleSheet.textInputField}
                testID={'password-input'}
              />
            </View>
            <Pressable
              onPress={handleLogin}
              disabled={!canSubmit}
              style={styleSheet.submitButton}
              testID={'login-button'}>
              <Text style={styleSheet.submitText}>Submit</Text>
            </Pressable>
          </>
        )}
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
      height: '50%',
      justifyContent: 'center',
      padding: 10,
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
      width: '100%',
      // Typography
      fontSize: FontSize.TextLarge,
      fontWeight: 'bold',
      color: colourScheme.fontPrimary,
      textAlign: 'left',
    },
    textInputField: {
      // Display
      width: '100%',
      // Border
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colourScheme.buttonPrimary,
      // Typography
      fontSize: FontSize.TextLarge,
      color: colourScheme.fontPrimary,
      textAlign: 'left',
    },
    submitButton: {
      // Display
      padding: 5,
      alignItems: 'center',
      justifyContent: 'center',
      // Background and border
      backgroundColor: colourScheme.buttonPrimary,
      borderRadius: 10,
    },
    submitText: {
      // Typography
      color: colourScheme.buttonPrimaryFont,
      fontSize: FontSize.Text,
      fontWeight: 'bold',
    },
    errorText: {
      // Display
      padding: 5,
      // Background and border
      backgroundColor: colourScheme.alertDanger,
      borderRadius: 10,
      // Typography
      fontSize: FontSize.TextSmall,
      color: colourScheme.alertDangerFont,
    },
  });
