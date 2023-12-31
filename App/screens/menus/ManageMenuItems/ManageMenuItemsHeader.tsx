import React from 'react';

import {View} from 'react-native';

import SelectDay from './SelectDay';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap, Header1, TextStyled} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';

type ManageMenuItemsHeaderProps = {
  isUpdating: boolean;
  menu: MenuDetailsPayload;
  onRemoveItem: (menuItemId: number) => void;
  activeDay: Day;
  onPressDay: (day: Day) => void;
};

export default function ManageMenuItemsHeader({
  isUpdating,
  menu,
  onRemoveItem,
  activeDay,
  onPressDay,
}: ManageMenuItemsHeaderProps) {
  const currentItems = menu.items.filter(item => item.day === activeDay);
  const activeRecipe = currentItems && currentItems[0]?.recipe;
  const activeItemId = currentItems && currentItems[0]?.id;

  let deleteOptions;
  if (activeItemId) {
    deleteOptions = {
      onDelete: () => onRemoveItem(activeItemId),
      text: 'remove',
    };
  }

  return (
    <>
      <Header1 style={[bootstrap.my3]} testID={'manage-menu-items-header'}>
        {menu.name}
      </Header1>
      <SelectDay menu={menu} activeDay={activeDay} onPressDay={onPressDay} />
      <View style={bootstrap.my3} testID={'current-recipe'}>
        <TextStyled>current recipe:</TextStyled>
        {isUpdating ? (
          <LoadingSpinner style={bootstrap.p1} />
        ) : activeRecipe ? (
          <RecipeListRow recipe={activeRecipe} deleteOptions={deleteOptions} />
        ) : (
          <TextStyled>-</TextStyled>
        )}
      </View>
      <TextStyled>select recipe:</TextStyled>
    </>
  );
}
