import React from 'react';

import {faCheck, faQuestion} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {ScrollView, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {PressablePrimary, PressableSecondary} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  MenuItemPayload,
} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';

type SelectDayProps = {
  menu: MenuDetailsPayload;
  activeDay: Day;
  onPressDay: (day: Day) => void;
};

export default function SelectDay({
  menu,
  activeDay,
  onPressDay,
}: SelectDayProps) {
  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <SelectSingleDay
        day={Day.Monday}
        isActive={activeDay === Day.Monday}
        hasRecipe={getHasRecipe(menu.items, Day.Monday)}
        onPress={() => onPressDay(Day.Monday)}
      />
      <SelectSingleDay
        day={Day.Tuesday}
        isActive={activeDay === Day.Tuesday}
        hasRecipe={getHasRecipe(menu.items, Day.Tuesday)}
        onPress={() => onPressDay(Day.Tuesday)}
      />
      <SelectSingleDay
        day={Day.Wednesday}
        isActive={activeDay === Day.Wednesday}
        hasRecipe={getHasRecipe(menu.items, Day.Wednesday)}
        onPress={() => onPressDay(Day.Wednesday)}
      />
      <SelectSingleDay
        day={Day.Thursday}
        isActive={activeDay === Day.Thursday}
        hasRecipe={getHasRecipe(menu.items, Day.Thursday)}
        onPress={() => onPressDay(Day.Thursday)}
      />
      <SelectSingleDay
        day={Day.Friday}
        isActive={activeDay === Day.Friday}
        hasRecipe={getHasRecipe(menu.items, Day.Friday)}
        onPress={() => onPressDay(Day.Friday)}
      />
      <SelectSingleDay
        day={Day.Saturday}
        isActive={activeDay === Day.Saturday}
        hasRecipe={getHasRecipe(menu.items, Day.Saturday)}
        onPress={() => onPressDay(Day.Saturday)}
      />
      <SelectSingleDay
        day={Day.Sunday}
        isActive={activeDay === Day.Sunday}
        hasRecipe={getHasRecipe(menu.items, Day.Sunday)}
        onPress={() => onPressDay(Day.Sunday)}
      />
    </ScrollView>
  );
}

type SelectSingleDayProps = {
  day: Day;
  isActive: boolean;
  hasRecipe: boolean;
  onPress: () => void;
};

export function SelectSingleDay({
  day,
  isActive,
  hasRecipe,
  onPress,
}: SelectSingleDayProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const Pressable = isActive ? PressablePrimary : PressableSecondary;

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

function getHasRecipe(menuItems: Array<MenuItemPayload>, day: Day): boolean {
  return !!menuItems.filter(item => item.day === day).length;
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
