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
