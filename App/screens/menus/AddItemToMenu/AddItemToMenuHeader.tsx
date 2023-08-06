import React from 'react';

import {View} from 'react-native';

import SelectDay from './SelectDay';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap, Header1, TextStyled} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {MenuDetailsPayload} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';

type AddItemToMenuHeaderProps = {
  isUpdating: boolean;
  menu: MenuDetailsPayload;
  activeDay: Day;
  onPressDay: (day: Day) => void;
};

export default function AddItemToMenuHeader({
  isUpdating,
  menu,
  activeDay,
  onPressDay,
}: AddItemToMenuHeaderProps) {
  const currentItems = menu.items.filter(item => item.day === activeDay);
  let activeRecipe = currentItems && currentItems[0]?.recipe;

  return (
    <>
      <Header1 style={[bootstrap.my3]} testID={'menus-header'}>
        {menu.name}
      </Header1>
      <SelectDay menu={menu} activeDay={activeDay} onPressDay={onPressDay} />
      <View style={bootstrap.my3}>
        <TextStyled>current recipe:</TextStyled>
        {isUpdating ? (
          <LoadingSpinner style={bootstrap.p1} />
        ) : activeRecipe ? (
          <RecipeListRow recipe={activeRecipe} />
        ) : (
          <TextStyled>-</TextStyled>
        )}
      </View>
      <TextStyled>select recipe:</TextStyled>
    </>
  );
}
