import React from 'react';

import {StyleSheet} from 'react-native';
import {View} from 'react-native';

import {TextStyled} from '../../../components/styled';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';

export default function HeaderTitle() {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View>
      <TextStyled style={styleSheet.headerTitle}>reciply</TextStyled>
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
