import React from 'react';
import {StyleSheet, useColorScheme} from 'react-native';
import {Text, View} from 'react-native';

import {ColourScheme, getColourScheme} from '../styles/colourScheme';

export default function HeaderTitle() {
  const colourTheme = useColorScheme();
  const colourScheme = getColourScheme(colourTheme);

  return (
    <View>
      <Text style={styles(colourScheme).headerTitle}>reciply</Text>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    /** Styling for the app title in the center of the status bar. */
    headerTitle: {
      // Display
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      // Background
      backgroundColor: colourScheme.backgroundSecondary,
      // Typography
      color: colourScheme.fontSecondary,
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
  });
