import React, {useRef} from 'react';

import {faCheck, faQuestion} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {Dimensions, ScrollView, View} from 'react-native';
import {StyleSheet} from 'react-native';

import {PressablePrimary, PressableSecondary} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  MenuItemPayload,
} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';

const DayWidth = 75;
const DayMargin = 5;

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
  const scrollRef = useRef<ScrollView>(null);

  function onPress(day: Day) {
    onPressDay(day);
    centerDayInDevice(day);
  }

  function centerDayInDevice(day: Day) {
    const dayMidpoint =
      day * (DayWidth + DayMargin) - Dimensions.get('window').width / 2;
    scrollRef.current?.scrollTo({x: dayMidpoint, animated: true});
  }

  const daysArray = Object.values(Day).filter(
    item => !isNaN(Number(item)),
  ) as Array<Day>;

  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      ref={scrollRef}>
      {daysArray.map(day => {
        return (
          <SelectSingleDay
            day={day}
            isActive={activeDay === day}
            hasRecipe={getHasRecipe(menu.items, day)}
            onPress={() => onPress(day)}
            key={day}
          />
        );
      })}
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
      width: DayWidth,
      height: 50,
      marginTop: 20,
      marginHorizontal: DayMargin,
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
