import React, {useState} from 'react';

import {ScrollView} from 'react-native';

import DayPicker from './DayPicker';
import {Header2, PressablePrimary} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import MenuScreenTemplate from '../MenuScreenTemplate';

type AddItemToMenuViewProps = {
  addItemToMenu: (recipeId: number) => void;
};

export default function AddItemToMenuView({
  addItemToMenu,
}: AddItemToMenuViewProps) {
  const [selectedDay, setSelectedDay] = useState<Day>(Day.Monday);

  return (
    <MenuScreenTemplate>
      <ScrollView>
        <Header2>Select day for new meal</Header2>
        <DayPicker
          selectedValue={selectedDay}
          onValueChange={value => setSelectedDay(value as Day)}
        />
        <PressablePrimary text={'continue'} />
      </ScrollView>
    </MenuScreenTemplate>
  );
}
