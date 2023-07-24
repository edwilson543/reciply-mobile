import React from 'react';

import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  TextStyle,
} from 'react-native';

import {ColourScheme, useColourScheme} from '../../styles/colourScheme';
import {FontSize} from '../../styles/constants';

interface PressableStyledProps extends PressableProps {
  text: string;
  textStyle?: TextStyle;
}

export function PressablePrimary({
  text,
  textStyle,
  ...props
}: PressableStyledProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  let extraPressableStyles: Array<any> = [];
  if (props.style) {
    if (props.style instanceof Array) {
      extraPressableStyles = props.style;
    } else {
      extraPressableStyles = [props.style];
    }
  }

  const style = ({pressed}: {pressed: boolean}) => [
    styleSheet.pressable,
    styleSheet.pressablePrimary,
    ...extraPressableStyles,
    {opacity: pressed || props.disabled ? 0.5 : 1},
  ];

  return (
    <Pressable {...props} style={style}>
      <Text style={[styleSheet.text, styleSheet.textPrimary, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
}

export function PressableSecondary({
  text,
  textStyle,
  ...props
}: PressableStyledProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  let extraPressableStyles: Array<any> = [];
  if (props.style) {
    if (props.style instanceof Array) {
      extraPressableStyles = props.style;
    } else {
      extraPressableStyles = [props.style];
    }
  }

  const style = ({pressed}: {pressed: boolean}) => [
    styleSheet.pressable,
    styleSheet.pressableSecondary,
    ...extraPressableStyles,
    {opacity: pressed || props.disabled ? 0.5 : 1},
  ];

  return (
    <Pressable {...props} style={style}>
      <Text style={[styleSheet.text, styleSheet.textSecondary, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    text: {
      fontFamily: 'Cochin',
      fontSize: FontSize.Text,
    },
    textPrimary: {
      color: colourScheme.buttonPrimaryFont,
    },
    textSecondary: {
      color: colourScheme.buttonSecondaryFont,
    },
    pressable: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
      // Background and Border
      borderRadius: 5,
    },
    pressablePrimary: {
      backgroundColor: colourScheme.buttonPrimary,
    },
    pressableSecondary: {
      backgroundColor: colourScheme.buttonSecondary,
    },
  });
