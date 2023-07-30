import {NativeStackNavigationOptions} from '@react-navigation/native-stack';

import HeaderTitle from './components/HeaderTitle';
import {ColourScheme} from '../../styles/colourScheme';

export const headerScreenStyles = (
  colorScheme: ColourScheme,
): NativeStackNavigationOptions =>
  /** Styling for the status bar container provided by react navigation.
   * The weird structure is to fit with the object type expected by React navigation.
   * */
  ({
    // Header bar
    headerTransparent: true,
    // Header title
    headerTitle: HeaderTitle,
    // Header left
    headerTintColor: colorScheme.fontTertiary,
    headerBackTitle: 'back',
  });
