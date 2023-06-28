import {colourSchemeLight} from '../colourScheme/colourSchemeLight';

import {StyleSheet} from 'react-native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

export const headerScreenStyles = {
  /** Styling for the status bar container provided by react navigation.
   * The weird structure is to fit with the object type expected by React navigation.
   * */
  headerStyle: {
    backgroundColor: colourSchemeLight.backgroundSecondary,
  },
  headerTintColor: colourSchemeLight.fontSecondary,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
} as NativeStackNavigationOptions;

export const headerStyles = StyleSheet.create({
  /** Styling for the app title in the center of the status bar. */
  headerTitle: {
    /** Display */
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    /** Background */
    backgroundColor: colourSchemeLight.backgroundSecondary,
    /** Typography */
    color: colourSchemeLight.fontSecondary,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
