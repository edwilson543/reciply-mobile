import React from 'react';

import {Image, StyleSheet} from 'react-native';

import {RecipeThumbnailPlaceholder} from '../../../assets/images';

type ThumbnailImageProps = {
  imageSource: string;
};

export function UploadImagePreview({imageSource}: ThumbnailImageProps) {
  /** A small circular image showing the preview of something. */
  const source = imageSource ? {uri: imageSource} : RecipeThumbnailPlaceholder;
  return <Image source={source} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    // Display
    width: 40,
    height: 40,
    // Border
    borderWidth: 0,
    borderRadius: 5,
  },
});
