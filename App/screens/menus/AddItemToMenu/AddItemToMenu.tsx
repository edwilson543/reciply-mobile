import React, {useState} from 'react';

import AddItemToMenuView from './AddItemToMenuView';
import {AddItemToMenuProps} from '../../../navigation/authenticated/navigation.types';
import {Day} from '../../../services/restAPI/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';

export function AddItemToMenu({navigation, route}: AddItemToMenuProps) {
  const [activeDay, setActiveDay] = useState<Day>(Day.Monday);
  const [menu, setMenu] = useState<MenuDetailsPayload>(route.params.menu);

  async function addItemToMenu() {}

  function onPressDay(day: Day): void {
    setActiveDay(day);
  }

  return (
    <AddItemToMenuView
      addItemToMenu={addItemToMenu}
      menu={menu}
      activeDay={activeDay}
      onPressDay={onPressDay}
    />
  );
}
