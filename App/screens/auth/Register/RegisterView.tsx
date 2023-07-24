import React, {SetStateAction} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import LoginRegisterBackground from '../../../components/images/local/LoginRegisterBackground';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  Header1,
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
} from '../../../components/styled';
import {ScreenName} from '../../../navigation/constants';
import {RegisterNavigationProp} from '../../../navigation/unauthenticated/navigation.types';
import {
  RegisterErrors,
  RegisterPayload,
} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type LoginViewProps = {
  navigation: RegisterNavigationProp;
  userDetails: RegisterPayload;
  setUserDetails: React.Dispatch<SetStateAction<RegisterPayload>>;
  handleSubmit: () => void;
  isLoading: boolean;
  canSubmit: boolean;
  errors: RegisterErrors | null;
};

export default function RegisterView({
  navigation,
  userDetails,
  setUserDetails,
  handleSubmit,
  isLoading,
  canSubmit,
  errors,
}: LoginViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.screenContainer}>
      <LoginRegisterBackground />
      <PressableSecondary
        onPress={() => navigation.navigate(ScreenName.Register)}
        text={'sign up'}
        style={styleSheet.loginButton}
        testID={'register-button'}
      />
      <Header1 style={styleSheet.reciplyHeader}>reciply</Header1>
      <View style={styleSheet.loginContainer}>
        {errors ? (
          <View style={styleSheet.errorText}>
            <Text style={styleSheet.errorText} testID={'error-message'}>
              {errors.username + errors.email + errors.password}
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
              value={userDetails.username}
              onChangeText={text =>
                setUserDetails({...userDetails, username: text})
              }
              placeholder="username"
              autoCapitalize={'none'}
              style={styleSheet.textInputField}
              testID={'username-input'}
            />
            <TextInputStyled
              value={userDetails.email}
              onChangeText={text =>
                setUserDetails({...userDetails, email: text})
              }
              placeholder={'email'}
              autoCapitalize={'none'}
              style={styleSheet.textInputField}
              testID={'email-input'}
            />
            <TextInputStyled
              value={userDetails.password1}
              onChangeText={text =>
                setUserDetails({...userDetails, password1: text})
              }
              placeholder={'password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
              style={styleSheet.textInputField}
              testID={'password1-input'}
            />
            <TextInputStyled
              value={userDetails.password2}
              onChangeText={text =>
                setUserDetails({...userDetails, password2: text})
              }
              placeholder={'confirm password'}
              autoCapitalize={'none'}
              secureTextEntry={true}
              style={styleSheet.textInputField}
              testID={'password2-input'}
            />
            <PressablePrimary
              onPress={handleSubmit}
              disabled={!canSubmit}
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
    loginButton: {
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
      height: '60%',
      justifyContent: 'space-around',
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
