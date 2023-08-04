import React, {useState} from 'react';

import AddItemToMenuView from './AddItemToMenuView';
import {AddItemToMenuProps} from '../../../navigation/authenticated/navigation.types';
import {Day} from '../../../services/restAPI/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';
import {useSuggestedRecipeList} from '../../../services/restAPI/requests/recipes';

export function AddItemToMenu({navigation, route}: AddItemToMenuProps) {
  const [menu, setMenu] = useState<MenuDetailsPayload>(route.params.menu);
  const [refreshKey, setRefreshKey] = useState<number>(0);
  const {data, isLoading} = useSuggestedRecipeList(refreshKey);
  const [activeDay, setActiveDay] = useState<Day>(Day.Monday);

  async function addItemToMenu() {}

  function onPressDay(day: Day): void {
    setActiveDay(day);
  }

  return (
    <AddItemToMenuView
      isLoading={isLoading}
      addItemToMenu={addItemToMenu}
      menu={menu}
      suggestedRecipes={data}
      activeDay={activeDay}
      onPressDay={onPressDay}
    />
  );
}
