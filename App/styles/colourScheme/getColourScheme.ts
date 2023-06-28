import {ColourTheme, ColourScheme} from './colourScheme.type';
import ColourSchemeLight from './ColourSchemeLight';
import ColourSchemeDark from './ColourSchemeDark';

export function getColourScheme(theme: ColourTheme): ColourScheme {
  return theme === 'light' ? new ColourSchemeDark() : new ColourSchemeLight();
}
