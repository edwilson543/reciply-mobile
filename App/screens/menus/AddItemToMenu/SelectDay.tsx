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
    <View>
      <Pressable
        onPress={onPress}
        text={Day[day].toLowerCase().slice(0, 3)}
        style={styles.button}
      />
      {/*TODO -> only show tick when recipe selected*/}
      <View style={styles.checkMarkContainer}>
        <FontAwesomeIcon icon={faCheck} style={styles.checkMark} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    // Display
    width: 75,
    height: 50,
    marginVertical: 10,
    marginHorizontal: 5,
    padding: 5,
    // Border
    borderRadius: 20,
  },
  checkMarkContainer: {
    // Positioning
    position: 'relative',
    bottom: 65,
    left: 60,
    // Display
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    // Background and border
    backgroundColor: '#6ba96b',
    borderRadius: 10,
  },
  checkMark: {
    // Background and border
    color: '#fff',
  },
});
