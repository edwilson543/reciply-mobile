import React, {SetStateAction} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  PressablePrimary,
  TextInputStyled,
  TextStyled,
} from '../../../components/styled';
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
              <TextStyled style={styleSheet.textInputLabel}>
                Username
              </TextStyled>
              <TextInputStyled
                value={username}
                onChangeText={onUsernameChange}
                autoCapitalize={'none'}
                style={styleSheet.textInputField}
                testID={'username-input'}
              />
            </View>
            <View style={styleSheet.textInputContainer}>
              <TextStyled style={styleSheet.textInputLabel}>
                Password
              </TextStyled>
              <TextInputStyled
                value={password}
                onChangeText={onPasswordChange}
                autoCapitalize={'none'}
                secureTextEntry={true}
                style={styleSheet.textInputField}
                testID={'password-input'}
              />
            </View>
            <PressablePrimary
              onPress={handleLogin}
              disabled={!canSubmit}
              style={styleSheet.submitButton}
              text={'Login'}
              testID={'login-button'}
            />
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
    },
    textInputField: {
      // Display
      width: '100%',
      // Typography
      fontSize: FontSize.TextLarge,
    },
    submitButton: {
      // Display
      padding: 5,
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
