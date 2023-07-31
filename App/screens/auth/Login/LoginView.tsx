import React, {SetStateAction} from 'react';

import {StyleSheet, View} from 'react-native';

import {LoginRegisterBackground} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  Header1,
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
} from '../../../components/styled';
import {AlertDanger} from '../../../components/styled/Alerts';
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
      <PressableSecondary
        onPress={() => navigation.navigate(ScreenName.Register)}
        text={'sign up'}
        style={styleSheet.registerButton}
        testID={'register-button'}
      />
      <Header1 style={styleSheet.reciplyHeader}>reciply</Header1>
      <View style={styleSheet.loginContainer}>
        {errorMessage ? <AlertDanger errorText={errorMessage} /> : <></>}
        {isLoading ? (
          <LoadingSpinner size={'large'} />
        ) : (
          <>
            <TextInputStyled
              value={username}
              onChangeText={onUsernameChange}
              placeholder="username"
              autoCapitalize={'none'}
              style={styleSheet.textInputField}
              testID={'username-input'}
            />
            <TextInputStyled
              value={password}
              onChangeText={onPasswordChange}
              placeholder="password"
              autoCapitalize={'none'}
              secureTextEntry={true}
              style={styleSheet.textInputField}
              testID={'password-input'}
            />
            <PressablePrimary
              onPress={handleLogin}
              disabled={!canSubmit}
              text={'login'}
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
    },
    registerButton: {
      // Positioning
      position: 'absolute',
      right: 20,
      top: 20,
      // Display
      height: 40,
      // Background and border
      borderRadius: 20,
    },
    reciplyHeader: {
      color: colourScheme.fontTertiary,
    },
    loginContainer: {
      // Display
      width: '75%',
      height: '40%',
      justifyContent: 'space-around',
      padding: 10,
    },
    textInputField: {
      // Display
      width: '100%',
      // Typography
      fontSize: FontSize.TextLarge,
    },
  });
