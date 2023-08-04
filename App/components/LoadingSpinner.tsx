import React from 'react';

import {ActivityIndicatorProps, StyleSheet} from 'react-native';
import {ActivityIndicator} from 'react-native';

export default function LoadingSpinner(props: ActivityIndicatorProps) {
  /** Override the default ActivityIndicator to set some default styles. */
  const size = props.size ?? 'large';
  return (
    <ActivityIndicator
      {...props}
      style={[styles.spinner, props.style]}
      size={size}
    />
  );
}

const styles = StyleSheet.create({
  spinner: {padding: 50},
});
