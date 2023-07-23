import React, {SetStateAction} from 'react';

import {StyleSheet, Text, View} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
  TextStyled,
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
            <View style={styleSheet.textInputContainer}>
              <TextStyled style={styleSheet.textInputLabel}>
                Username
              </TextStyled>
              <TextInputStyled
                value={userDetails.username}
                onChangeText={text =>
                  setUserDetails({...userDetails, username: text})
                }
                autoCapitalize={'none'}
                style={styleSheet.textInputField}
                testID={'username-input'}
              />
            </View>
            <View style={styleSheet.textInputContainer}>
              <TextStyled style={styleSheet.textInputLabel}>Email</TextStyled>
              <TextInputStyled
                value={userDetails.email}
                onChangeText={text =>
                  setUserDetails({...userDetails, email: text})
                }
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
                onChangeText={text =>
                  setUserDetails({...userDetails, password1: text})
                }
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
                onChangeText={text =>
                  setUserDetails({...userDetails, password2: text})
                }
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
              text={'Register'}
              testID={'login-button'}
            />
            <PressableSecondary
              onPress={() => navigation.navigate(ScreenName.Login)}
              style={styleSheet.loginButton}
              text={'Login'}
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
      // Background
      backgroundColor: colourScheme.backgroundSecondary,
    },
    loginContainer: {
      // Display
      width: '75%',
      height: '75%',
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
    loginButton: {marginTop: 10},
  });
