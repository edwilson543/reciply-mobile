import React from 'react';

import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  ViewStyle,
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

  const style = combineStyles(
    props.style,
    [styleSheet.pressable, styleSheet.pressablePrimary],
    props.disabled,
  );

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

  const style = combineStyles(
    props.style,
    [styleSheet.pressable, styleSheet.pressableSecondary],
    props.disabled,
  );

  return (
    <Pressable {...props} style={style}>
      <Text style={[styleSheet.text, styleSheet.textSecondary, textStyle]}>
        {text}
      </Text>
    </Pressable>
  );
}

function combineStyles(
  extraStyles: StyleProp<any> | Array<StyleProp<any>>,
  defaultStyles: Array<ViewStyle>,
  disabled: boolean | null | undefined,
): (pressed: {pressed: boolean}) => Array<ViewStyle> {
  /** Combine the per use style array / object with the default button styles. */
  let extraPressableStyles: Array<any> = [];
  if (extraStyles) {
    if (extraStyles instanceof Array) {
      extraPressableStyles = extraStyles;
    } else {
      extraPressableStyles = [extraStyles];
    }
  }

  return ({pressed}: {pressed: boolean}) => [
    ...defaultStyles,
    ...extraPressableStyles,
    {opacity: pressed || disabled ? 0.5 : 0.8},
  ];
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
      height: 50,
      padding: 5,
      // Background and Border
      borderRadius: 5,
    },
    pressablePrimary: {
      backgroundColor: colourScheme.buttonPrimary,
    },
    pressableSecondary: {
      backgroundColor: colourScheme.buttonSecondary,
      borderColor: colourScheme.buttonSecondaryFont,
      borderWidth: 1,
    },
  });
