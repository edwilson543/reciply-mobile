import {colourSchemeLight} from '../colourScheme/colourSchemeLight';

import {StyleSheet} from 'react-native';

export const headerScreenOptions = {
  /** Styling for the status bar container provided by react navigation. */
  headerStyle: {
    backgroundColor: colourSchemeLight.backgroundSecondary,
  },
  headerTintColor: colourSchemeLight.fontSecondary,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

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
