import React, {SetStateAction} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import LoginRegisterBackground from '../../../components/images/local/LoginRegisterBackground';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
} from '../../../components/styled';
import {ScreenName} from '../../../navigation/constants';
import {LoginNavigationProp} from '../../../navigation/unauthenticated/navigation.types';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type LoginViewProps = {
  navigation: LoginNavigationProp;
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
  navigation,
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
      <LoginRegisterBackground />
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
            <TextInputStyled
              value={username}
              onChangeText={onUsernameChange}
              placeholder="Username"
              autoCapitalize={'none'}
              style={styleSheet.textInputField}
              testID={'username-input'}
            />
            <TextInputStyled
              value={password}
              onChangeText={onPasswordChange}
              placeholder="Password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              style={styleSheet.textInputField}
              testID={'password-input'}
            />
            <PressablePrimary
              onPress={handleLogin}
              disabled={!canSubmit}
              text={'Login'}
              testID={'login-button'}
            />
            <PressableSecondary
              onPress={() => navigation.navigate(ScreenName.Register)}
              text={'Register'}
              testID={'register-button'}
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
    },
    loginContainer: {
      // Display
      width: '75%',
      height: '40%',
      justifyContent: 'space-between',
      padding: 10,
    },
    textInputField: {
      // Display
      width: '100%',
      // Typography
      fontSize: FontSize.TextLarge,
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
