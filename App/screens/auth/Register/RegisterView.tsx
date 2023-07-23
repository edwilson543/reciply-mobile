import React, {SetStateAction} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  PressablePrimary,
  TextInputStyled,
  TextStyled,
} from '../../../components/styled';
import {RegisterPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type LoginViewProps = {
  userDetails: RegisterPayload;
  setUserDetails: React.Dispatch<SetStateAction<RegisterPayload>>;
  handleSubmit: () => void;
  isLoading: boolean;
  canSubmit: boolean;
  errorMessage: string;
};

export default function RegisterView({
  userDetails,
  handleSubmit,
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
                value={userDetails.username}
                // onChangeText={}
                autoCapitalize={'none'}
                style={styleSheet.textInputField}
                testID={'username-input'}
              />
            </View>
            <View style={styleSheet.textInputContainer}>
              <TextStyled style={styleSheet.textInputLabel}>Email</TextStyled>
              <TextInputStyled
                value={userDetails.email}
                // onChangeText={}
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
                value={userDetails.password1}
                // onChangeText={onPasswordChange}
                autoCapitalize={'none'}
                secureTextEntry={true}
                style={styleSheet.textInputField}
                testID={'password-input'}
              />
            </View>
            <View style={styleSheet.textInputContainer}>
              <TextStyled style={styleSheet.textInputLabel}>
                Password again
              </TextStyled>
              <TextInputStyled
                value={userDetails.password2}
                // onChangeText={onPasswordChange}
                autoCapitalize={'none'}
                secureTextEntry={true}
                style={styleSheet.textInputField}
                testID={'password-input'}
              />
            </View>
            <PressablePrimary
              onPress={handleSubmit}
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
