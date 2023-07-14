import React from 'react';

import {ActivityIndicatorProps} from 'react-native';
import {ActivityIndicator} from 'react-native';

export default function LoadingSpinner(props: ActivityIndicatorProps) {
  /** Override the default ActivityIndicator to set some default styles. */
  return <ActivityIndicator {...props} />;
}
