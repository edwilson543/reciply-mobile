import {StyleSheet} from 'react-native';

import {ColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';

export const defaultStyles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    text: {
      fontFamily: 'AbhayaLibre-Medium',
      color: colourScheme.fontPrimary,
      fontSize: FontSize.Text,
    },
    header1: {
      fontFamily: 'AbhayaLibre-SemiBold',
      color: colourScheme.fontPrimary,
      fontSize: FontSize.Header1,
    },
  });
