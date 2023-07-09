import {useColorScheme} from 'react-native';

import {ColourScheme} from './ColourScheme.type';
import ColourSchemeDark from './ColourSchemeDark';
import ColourSchemeLight from './ColourSchemeLight';

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
