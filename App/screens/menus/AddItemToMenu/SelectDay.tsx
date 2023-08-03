import React from 'react';

import {StyleSheet} from 'react-native';

import {PressablePrimary, PressableSecondary} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';

type SelectDayProps = {
  day: Day;
  isActive: boolean;
  onPress: () => void;
};

export default function SelectDay({day, isActive, onPress}: SelectDayProps) {
  const Pressable = isActive ? PressablePrimary : PressableSecondary;

  return (
    <Pressable
      onPress={onPress}
      text={Day[day].toLowerCase().slice(0, 3)}
      style={styles.button}
    />
  );
}

const styles = StyleSheet.create({
  button: {
    // Display
    flexBasis: '20%',
    height: 50,
    padding: 5,
    marginHorizontal: 5,
    // Border
    borderRadius: 20,
  },
});
