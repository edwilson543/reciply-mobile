import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {RecipesTopBackgroundImage} from '../../../assets/images';

export default function RecipesTopBackground() {
  return (
    <Image
      source={RecipesTopBackgroundImage}
      resizeMode="cover"
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    // Positioning
    zIndex: -1,
    // Display
    justifyContent: 'center',
    width: '100%',
    height: '15%',
    // Background
    opacity: 0.75,
  },
});
