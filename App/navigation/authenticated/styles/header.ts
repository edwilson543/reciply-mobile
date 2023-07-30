import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import {ColourScheme} from '../../../styles/colourScheme';

export const headerStyles = (
  colorScheme: ColourScheme,
): NativeStackNavigationOptions =>
  /** Styling for the status bar container provided by react navigation.
   * The weird structure is to fit with the object type expected by React navigation.
   * */
  ({
    // Header bar
    headerTransparent: true,
    headerTintColor: colorScheme.fontTertiary,
    // Header title
    headerTitle: '',
    // Header left
    headerBackTitle: 'back',
  });
