import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {ColourScheme} from '../colourScheme';

export const headerScreenStyles = (
  colorScheme: ColourScheme,
): NativeStackNavigationOptions =>
  /** Styling for the status bar container provided by react navigation.
   * The weird structure is to fit with the object type expected by React navigation.
   * */
  ({
    headerStyle: {
      backgroundColor: colorScheme.backgroundSecondary,
    },
    headerTintColor: colorScheme.fontSecondary,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });
