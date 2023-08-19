import React from 'react';

import {StyleSheet, ViewStyle} from 'react-native';
import {View} from 'react-native';

import {TextStyled} from './TextStyled';
import {ColourScheme, useColourScheme} from '../../styles/colourScheme';

type AlertProps = {
  errorText: string;
  style?: Array<ViewStyle>;
};

export function AlertDanger({errorText, style}: AlertProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const extraStyles = style ?? [];

  return (
    <View
      style={[
        styleSheet.alertContainer,
        styleSheet.alertDanger,
        ...extraStyles,
      ]}>
      <TextStyled style={styleSheet.alertDanger}>{errorText}</TextStyled>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    alertContainer: {
      // Display
      justifyContent: 'center',
      minHeight: 40,
      padding: 5,
      // Background and border
      backgroundColor: colourScheme.alertDanger,
      borderRadius: 10,
      opacity: 0.9,
    },
    alertDanger: {
      backgroundColor: colourScheme.alertDanger,
      color: colourScheme.alertDangerFont,
    },
  });
