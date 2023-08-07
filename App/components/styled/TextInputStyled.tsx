import React, {useState} from 'react';

import {StyleSheet, TextInput, TextInputProps} from 'react-native';

import * as styles from './styles';
import {ColourScheme, useColourScheme} from '../../styles/colourScheme';

export function TextInputStyled({style, ...props}: TextInputProps) {
  /** Wrap the default `TextInput` component to provide some lightweight styles. */
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const colourScheme = useColourScheme();
  const textStylesheet = styles.defaultStyles(colourScheme);
  const textInputStylesheet = textInputStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  const combinedStyles = [
    textStylesheet.text,
    textInputStylesheet.textInput,
    ...extraStyles,
  ];

  if (isFocused) {
    combinedStyles.push(textInputStylesheet.textInputFocused);
  }

  return (
    <TextInput
      style={combinedStyles}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      {...props}
    />
  );
}

const textInputStyles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    textInput: {
      // Display
      height: 50,
      paddingHorizontal: 10,
      // Background and border
      backgroundColor: colourScheme.backgroundPrimary,
      opacity: 0.75,
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colourScheme.buttonPrimary,
    },
    textInputFocused: {
      borderColor: colourScheme.textInputFocusBorder,
      borderWidth: 2,
    },
  });
