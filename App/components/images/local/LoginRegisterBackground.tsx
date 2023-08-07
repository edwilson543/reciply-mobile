import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {LoginRegisterBackgroundImage} from '../../../assets/images';

export function LoginRegisterBackground() {
  return (
    <Image
      source={LoginRegisterBackgroundImage}
      resizeMode="cover"
      style={styles.image}
    />
  );
}

const styles = StyleSheet.create({
  image: {
    // Positioning
    position: 'absolute',
    zIndex: -1,
    // Display
    flex: 1,
    justifyContent: 'center',
  },
});
