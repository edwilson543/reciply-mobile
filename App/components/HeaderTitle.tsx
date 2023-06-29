import React from 'react';
import {ColorSchemeName, StyleSheet, useColorScheme} from 'react-native';
import {Text, View} from 'react-native';

import {getColourScheme} from '../styles/colourScheme';

export default function HeaderTitle() {
  const colourTheme = useColorScheme();

  return (
    <View>
      <Text style={styles(colourTheme).headerTitle}>reciply</Text>
    </View>
  );
}

const styles = (theme: ColorSchemeName) =>
  StyleSheet.create({
    /** Styling for the app title in the center of the status bar. */
    headerTitle: {
      // Display
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // Background
      backgroundColor: getColourScheme(theme).backgroundSecondary,
      // Typography
      color: getColourScheme(theme).fontSecondary,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });
