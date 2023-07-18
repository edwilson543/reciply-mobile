import {StyleSheet} from 'react-native';

import {ColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';

export const defaultStyles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Cochin',
      color: colourScheme.fontPrimary,
      fontSize: FontSize.Text,
    },
  });
