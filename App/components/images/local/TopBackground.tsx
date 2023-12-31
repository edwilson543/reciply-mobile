import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {
  MenusTopBackgroundImage,
  RecipesTopBackgroundImage,
} from '../../../assets/images';

export function RecipesTopBackground() {
  return (
    <Image
      source={RecipesTopBackgroundImage}
      resizeMode="cover"
      style={styles.image}
    />
  );
}

export function MenusTopBackground() {
  return (
    <Image
      source={MenusTopBackgroundImage}
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
