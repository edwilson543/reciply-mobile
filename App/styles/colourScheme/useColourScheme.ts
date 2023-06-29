import {ColourScheme} from './ColourScheme.type';
import ColourSchemeLight from './ColourSchemeLight';
import ColourSchemeDark from './ColourSchemeDark';

import {useColorScheme} from 'react-native';

export function useColourScheme(): ColourScheme {
  /**
   * Return the active colour scheme.
   *
   * This provides a version of the React hook that is more useful to
   * the project, as the return type provides all colour codes.
   * */
  const theme = useColorScheme();
  return theme === 'dark' ? new ColourSchemeDark() : new ColourSchemeLight();
}
