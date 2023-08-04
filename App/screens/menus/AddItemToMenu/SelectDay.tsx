import React from 'react';

import {faCheck} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';
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
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        text={Day[day].toLowerCase().slice(0, 3)}
        style={styles.button}
      />
      {/*TODO -> only show tick when recipe selected*/}
      <FontAwesomeIcon icon={faCheck} style={styles.checkMark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexBasis: '20%',
    marginHorizontal: 5,
  },
  button: {
    // Display
    height: 50,
    padding: 5,
    // Border
    borderRadius: 20,
  },
  checkMark: {
    // Positioning
    position: 'relative',
    bottom: 50,
    left: 50,
    // Background -> TODO
    color: '#fff', // -> TODO
  },
});
