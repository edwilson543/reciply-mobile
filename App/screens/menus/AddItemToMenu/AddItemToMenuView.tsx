import React, {RefObject} from 'react';

import {View, FlatList} from 'react-native';

import AddItemToMenuHeader from './AddItemToMenuHeader';
import {Day} from '../../../services/restAPI/constants';
import {
  MenuDetailsPayload,
  RecipeListPayload,
} from '../../../services/restAPI/payloads';
import RecipeListRow from '../../recipes/MyRecipeList/RecipeListRow';
import MenuScreenTemplate from '../MenuScreenTemplate';

type AddItemToMenuViewProps = {
  isLoading: boolean;
  isUpdating: boolean;
  scrollRef: RefObject<FlatList>;
  menu: MenuDetailsPayload;
  suggestedRecipes: Array<RecipeListPayload>;
  onRecipePress: (recipeId: number) => void;
  activeDay: Day;
  onPressDay: (day: Day) => void;
};

export default function AddItemToMenuView({
  isLoading,
  isUpdating,
  scrollRef,
  menu,
  suggestedRecipes,
  onRecipePress,
  activeDay,
  onPressDay,
}: AddItemToMenuViewProps) {
  const displayedSuggestedRecipes = isLoading ? [] : suggestedRecipes;

  return (
    <MenuScreenTemplate>
      <View>
        <FlatList
          data={displayedSuggestedRecipes}
          renderItem={({item}) => (
            <RecipeListRow
              recipe={item}
              onPress={() => onRecipePress(item.id)}
            />
          )}
          ref={scrollRef}
          ListHeaderComponent={
            <AddItemToMenuHeader
              isUpdating={isUpdating}
              menu={menu}
              activeDay={activeDay}
              onPressDay={onPressDay}
            />
          }
        />
      </View>
    </MenuScreenTemplate>
  );
}
