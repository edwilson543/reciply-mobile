import React, {useState} from 'react';

import AddItemToMenuView from './AddItemToMenuView';
import {AddItemToMenuProps} from '../../../navigation/authenticated/navigation.types';
import {Day, MealTime} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  MenuItemPayload,
} from '../../../services/restAPI/payloads';
import {addItemToMenu} from '../../../services/restAPI/requests/menus';
import {useSuggestedRecipeList} from '../../../services/restAPI/requests/recipes';

export function AddItemToMenu({navigation, route}: AddItemToMenuProps) {
  const [menu, setMenu] = useState<MenuDetailsPayload>(route.params.menu);
  // const [refreshKey, setRefreshKey] = useState<number>(0);  Maybe todo
  const {data, isLoading} = useSuggestedRecipeList(0);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [activeDay, setActiveDay] = useState<Day>(Day.Monday);

  const mealTime = MealTime.Dinner; // Hardcoded for now -> todo

  async function addRecipeToMenu(recipeId: number) {
    setIsUpdating(true);
    // Tell backend
    addItemToMenu(menu.id, recipeId, activeDay, mealTime)
      .then(menuItem => {
        addItemToMenuState(menuItem);
      })
      .then(() => setIsUpdating(false));
    // Scroll to top -> TODO
  }

  function onPressDay(day: Day): void {
    setActiveDay(day);
  }

  function addItemToMenuState(menuItem: MenuItemPayload): void {
    const items = menu.items.filter(
      item =>
        !(
          item.day === activeDay &&
          item.meal_time.toUpperCase() === mealTime.toUpperCase()
        ),
    );
    items.push(menuItem);
    setMenu({...menu, items: items});
  }

  return (
    <AddItemToMenuView
      isLoading={isLoading || isUpdating}
      onRecipePress={addRecipeToMenu}
      menu={menu}
      suggestedRecipes={data}
      activeDay={activeDay}
      onPressDay={onPressDay}
    />
  );
}
