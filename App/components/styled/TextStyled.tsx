import React from 'react';

import {StyleSheet, Text, TextStyle} from 'react-native';

import {ColourScheme, useColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';

type StyledTextProps = {
  children: React.ReactNode;
  style?: Array<TextStyle> | TextStyle;
};

export function TextStyled({children, style}: StyledTextProps) {
  /** Wrap the default `Text` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return <Text style={[styleSheet.text, ...extraStyles]}>{children}</Text>;
}

export const typography = StyleSheet.create({
  bold: {fontWeight: 'bold'},
  italic: {fontStyle: 'italic'},
});

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Cochin',
      color: colourScheme.fontPrimary,
      fontSize: FontSize.Text,
    },
  });
