import React, {useRef, useState} from 'react';

import {FlatList, LayoutAnimation} from 'react-native';

import AddItemToMenuView from './AddItemToMenuView';
import {AddItemToMenuProps} from '../../../navigation/authenticated/navigation.types';
import {Day, MealTime} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  MenuItemPayload,
} from '../../../services/restAPI/payloads';
import {
  addItemToMenu,
  removeItemFromMenu,
} from '../../../services/restAPI/requests/menus';
import {useSuggestedRecipeList} from '../../../services/restAPI/requests/recipes';

export function AddItemToMenu({route}: AddItemToMenuProps) {
  const [menu, setMenu] = useState<MenuDetailsPayload>(route.params.menu);
  const [isUpdating, setIsUpdating] = useState<boolean>(false);
  const [activeDay, setActiveDay] = useState<Day>(Day.Monday);

  const scrollRef = useRef<FlatList>(null);

  const {data: suggestedRecipes, isLoading} = useSuggestedRecipeList(0);

  const mealTime = MealTime.Dinner; // Hardcoded for now -> todo

  async function addRecipeToMenu(recipeId: number) {
    setIsUpdating(true);
    scrollRef.current?.scrollToOffset({animated: true, offset: 0});
    // Tell backend
    addItemToMenu(menu.id, recipeId, activeDay, mealTime)
      .then(({data}) => {
        if (data) {
          addItemToMenuState(data);
        }
      })
      .then(() => setIsUpdating(false))
      .then(() => LayoutAnimation.configureNext(layoutAnimConfig));
  }

  async function onRemoveItem(menuItemId: number): Promise<void> {
    removeItemFromMenu(menuItemId)
      .then(() =>
        setMenu({
          ...menu,
          items: menu.items.filter(item => item.id !== menuItemId),
        }),
      )
      .then(() => LayoutAnimation.configureNext(layoutAnimConfig));
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

  function onPressDay(day: Day): void {
    setActiveDay(day);
    LayoutAnimation.configureNext(layoutAnimConfig);
  }

  return (
    <AddItemToMenuView
      isLoading={isLoading}
      isUpdating={isUpdating}
      scrollRef={scrollRef}
      onRecipePress={addRecipeToMenu}
      onRemoveItem={onRemoveItem}
      menu={menu}
      suggestedRecipes={suggestedRecipes ?? []}
      activeDay={activeDay}
      onPressDay={onPressDay}
    />
  );
}

const layoutAnimConfig = {
  duration: 200,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.scaleY,
  },
  delete: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
};
