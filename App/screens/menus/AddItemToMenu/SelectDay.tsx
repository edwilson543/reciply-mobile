import React from 'react';

import {faCheck, faQuestion} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {View} from 'react-native';
import {StyleSheet} from 'react-native';

import {PressablePrimary, PressableSecondary} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';

type SelectDayProps = {
  day: Day;
  isActive: boolean;
  hasRecipe: boolean;
  onPress: () => void;
};

export default function SelectDay({
  day,
  isActive,
  hasRecipe,
  onPress,
}: SelectDayProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const Pressable = isActive ? PressablePrimary : PressableSecondary;

  console.log('Day: ', day, 'has recipe:', hasRecipe);

  return (
    <View>
      <Pressable
        onPress={onPress}
        text={Day[day].toLowerCase().slice(0, 3)}
        style={styleSheet.button}
      />
      {hasRecipe ? (
        <View style={[styleSheet.iconContainer, styleSheet.checkIconContainer]}>
          <FontAwesomeIcon
            icon={faCheck}
            style={styleSheet.checkIcon}
            size={12}
          />
        </View>
      ) : (
        <View
          style={[styleSheet.iconContainer, styleSheet.questionIconContainer]}>
          <FontAwesomeIcon
            icon={faQuestion}
            style={styleSheet.questionIcon}
            size={12}
          />
        </View>
      )}
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    button: {
      // Display
      width: 75,
      height: 50,
      marginTop: 20,
      marginHorizontal: 5,
      padding: 5,
      // Border
      borderRadius: 20,
    },
    iconContainer: {
      // Positioning
      position: 'relative',
      bottom: 55,
      left: 60,
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: 20,
      height: 20,
      // Background and border
      borderRadius: 10,
      borderWidth: 1,
      borderColor: colourScheme.fontSecondary,
    },
    checkIconContainer: {backgroundColor: colourScheme.alertSuccess},
    checkIcon: {color: colourScheme.fontSecondary},
    questionIconContainer: {backgroundColor: colourScheme.alertWarning},
    questionIcon: {color: colourScheme.fontSecondary},
  });
