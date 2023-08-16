import React from 'react';

import {StyleSheet} from 'react-native';

import {
  PressablePrimary,
  PressableSecondary,
} from '../../../../components/styled';

type TabLabelProps = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export default function TabLabel({label, isActive, onPress}: TabLabelProps) {
  const Pressable = isActive ? PressablePrimary : PressableSecondary;
  return <Pressable text={label} onPress={onPress} style={styles.label} />;
}

const styles = StyleSheet.create({
  label: {
    // Display
    height: 40,
    width: '50%',
    padding: 0,
    // Border
    borderTopLeftRadius: 10,
    borderTopEndRadius: 10,
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
  },
});
