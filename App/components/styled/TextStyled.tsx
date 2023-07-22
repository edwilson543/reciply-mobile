import React from 'react';

import {Text, TextStyle} from 'react-native';

import * as styles from './styles';
import {useColourScheme} from '../../styles/colourScheme';

type StyledTextProps = {
  children: React.ReactNode;
  style?: Array<TextStyle> | TextStyle;
};

export function TextStyled({children, style}: StyledTextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return <Text style={[styleSheet.text, ...extraStyles]}>{children}</Text>;
}
