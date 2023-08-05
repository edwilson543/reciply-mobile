import React from 'react';

import {Text} from 'react-native';
import {TextProps} from 'react-native';

import * as styles from './styles';
import {useColourScheme} from '../../styles/colourScheme';

export function TextStyled({children, style, ...props}: TextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return (
    <Text style={[styleSheet.text, ...extraStyles]} {...props}>
      {children}
    </Text>
  );
}

export function Header1({children, style, ...props}: TextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return (
    <Text
      style={[styleSheet.header, styleSheet.header1, ...extraStyles]}
      {...props}>
      {children}
    </Text>
  );
}

export function Header2({children, style, ...props}: TextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return (
    <Text
      style={[styleSheet.header, styleSheet.header2, ...extraStyles]}
      {...props}>
      {children}
    </Text>
  );
}

export function Header3({children, style, ...props}: TextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return (
    <Text
      style={[styleSheet.header, styleSheet.header3, ...extraStyles]}
      {...props}>
      {children}
    </Text>
  );
}
