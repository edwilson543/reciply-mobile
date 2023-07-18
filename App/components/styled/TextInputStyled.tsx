import React from 'react';

import {TextInput, TextInputProps} from 'react-native';

import * as styles from './styles';
import {useColourScheme} from '../../styles/colourScheme';

export function TextInputStyled({style, ...props}: TextInputProps) {
  /** Wrap the default `TextInput` component to provide some lightweight styles. */
  const colourScheme = useColourScheme();
  const styleSheet = styles.defaultStyles(colourScheme);
  const extraStyles = style instanceof Array ? style : style ? [style] : [];

  return <TextInput style={[styleSheet.text, ...extraStyles]} {...props} />;
}
