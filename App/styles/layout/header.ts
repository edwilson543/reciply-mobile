import {StyleSheet} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {ColorSchemeName} from 'react-native';

import {getColourScheme} from '../colourScheme';

export const headerScreenStyles = (
  theme: ColorSchemeName,
): NativeStackNavigationOptions =>
  /** Styling for the status bar container provided by react navigation.
   * The weird structure is to fit with the object type expected by React navigation.
   * */
  ({
    headerStyle: {
      backgroundColor: getColourScheme(theme).backgroundSecondary,
    },
    headerTintColor: getColourScheme(theme).fontSecondary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

export const headerStyles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    /** Styling for the app title in the center of the status bar. */
    headerTitle: {
      /** Display */
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      /** Background */
      backgroundColor: getColourScheme(theme).backgroundSecondary,
      /** Typography */
      color: getColourScheme(theme).fontSecondary,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });
