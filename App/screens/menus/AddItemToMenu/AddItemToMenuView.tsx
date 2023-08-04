import React from 'react';

import {View, FlatList} from 'react-native';

import AddItemToMenuHeader from './AddItemToMenuHeader';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {TextStyled} from '../../../components/styled';
import {Day} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  RecipeListPayload,
} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';
import MenuScreenTemplate from '../MenuScreenTemplate';

type AddItemToMenuViewProps = {
  isLoading: boolean;
  addItemToMenu: (recipeId: number) => void;
  menu: MenuDetailsPayload;
  suggestedRecipes: Array<RecipeListPayload>;
  activeDay: Day;
  onPressDay: (day: Day) => void;
};

export default function AddItemToMenuView({
  isLoading,
  addItemToMenu,
  menu,
  suggestedRecipes,
  activeDay,
  onPressDay,
}: AddItemToMenuViewProps) {
  return (
    <MenuScreenTemplate>
      <View>
        {isLoading && menu ? (
          <LoadingSpinner />
        ) : (
          <FlatList
            data={suggestedRecipes}
            renderItem={({item}) => <RecipeListRow recipe={item} />}
            ListHeaderComponent={
              <AddItemToMenuHeader
                menu={menu}
                activeDay={activeDay}
                onPressDay={onPressDay}
              />
            }
          />
        )}
      </View>
    </MenuScreenTemplate>
  );
}
