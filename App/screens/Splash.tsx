import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {FontSize} from '../styles/constants';
import {ColourScheme, useColourScheme} from '../styles/colourScheme';

export default function Splash() {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.text}>reciply</Text>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {
      // Positioning
      position: 'absolute',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      // Display
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // Background
      backgroundColor: colourScheme.backgroundSecondary,
    },
    text: {
      // Typography
      fontSize: FontSize.Header1,
      color: colourScheme.fontSecondary,
    },
  });
