import {ColourScheme} from './ColourScheme.type';
import ColourSchemeLight from './ColourSchemeLight';
import ColourSchemeDark from './ColourSchemeDark';

import {ColorSchemeName} from 'react-native';

export function getColourScheme(theme: ColorSchemeName): ColourScheme {
  /** Resolve the currently active theme, returning the appropriate colour scheme */
  return theme === 'dark' ? new ColourSchemeDark() : new ColourSchemeLight();
}
