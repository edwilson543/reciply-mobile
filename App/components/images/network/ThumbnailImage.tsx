import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {ThumbnailImagePlaceholder} from '../../../assets/images';

type ThumbnailImageProps = {
  imageSource: string;
};

export function ThumbnailImage({imageSource}: ThumbnailImageProps) {
  /** A small circular image showing the preview of something. */
  // TODO -> may eventually need to set authorization header in image request.
  const source = imageSource ? {uri: imageSource} : ThumbnailImagePlaceholder;
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    // Display
    width: 50,
    height: 50,
    // Border
    borderWidth: 0,
    borderRadius: 25,
  },
});
