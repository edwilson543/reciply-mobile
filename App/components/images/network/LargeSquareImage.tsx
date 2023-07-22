import React from 'react';

import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';

import {LargeSquareImagePlaceholder} from '../../../assets/images';

type LargeSquareImageProps = {
  imageSource: string;
  extraStyles?: StyleProp<ImageStyle>;
};

export function LargeSquareImage({
  imageSource,
  extraStyles,
}: LargeSquareImageProps) {
  /** A large square image suitable for detail views. */
  const source = imageSource ? {uri: imageSource} : LargeSquareImagePlaceholder;
  return <Image source={source} style={[styles.image, extraStyles]} />;
}

const styles = StyleSheet.create({
  image: {
    // Display
    width: 300,
    height: 300,
  },
});
