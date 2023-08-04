import React from 'react';

import {ScrollView, StyleSheet, View, FlatList} from 'react-native';

import SelectDay from './SelectDay';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap, TextStyled} from '../../../components/styled';
import {ScreenName} from '../../../navigation/constants';
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
  const currentItems = menu?.items.filter(item => item.day === activeDay);
  const activeRecipe = currentItems && currentItems[0]?.recipe;

  return (
    <MenuScreenTemplate>
      <ScrollView>
        <View style={styles.daysContainer}>
          <SelectDay
            day={Day.Monday}
            isActive={activeDay === Day.Monday}
            onPress={() => onPressDay(Day.Monday)}
          />
          <SelectDay
            day={Day.Tuesday}
            isActive={activeDay === Day.Tuesday}
            onPress={() => onPressDay(Day.Tuesday)}
          />
          <SelectDay
            day={Day.Wednesday}
            isActive={activeDay === Day.Wednesday}
            onPress={() => onPressDay(Day.Wednesday)}
          />
          <SelectDay
            day={Day.Thursday}
            isActive={activeDay === Day.Thursday}
            onPress={() => onPressDay(Day.Thursday)}
          />
          <SelectDay
            day={Day.Friday}
            isActive={activeDay === Day.Friday}
            onPress={() => onPressDay(Day.Friday)}
          />
          <SelectDay
            day={Day.Saturday}
            isActive={activeDay === Day.Saturday}
            onPress={() => onPressDay(Day.Saturday)}
          />
          <SelectDay
            day={Day.Sunday}
            isActive={activeDay === Day.Sunday}
            onPress={() => onPressDay(Day.Sunday)}
          />
        </View>
        <View style={bootstrap.my3}>
          <TextStyled>current recipe:</TextStyled>
          {activeRecipe ? (
            <RecipeListRow recipe={activeRecipe} />
          ) : (
            <TextStyled>-</TextStyled>
          )}
          <TextStyled>select recipe:</TextStyled>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <FlatList
              data={suggestedRecipes}
              renderItem={({item}) => <RecipeListRow recipe={item} />}
            />
          )}
        </View>
      </ScrollView>
    </MenuScreenTemplate>
  );
}

const styles = StyleSheet.create({
  daysContainer: {
    // Display
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    rowGap: 5,
    marginVertical: 5,
  },
});
