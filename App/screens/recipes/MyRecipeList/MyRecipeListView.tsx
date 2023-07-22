import React from 'react';

import {StyleSheet, FlatList, View} from 'react-native';

import RecipeListRow from './RecipeListRow';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {PressablePrimary, TextStyled} from '../../../components/styled';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';

type MyRecipeListViewProps = {
  recipes: Array<RecipeListPayload> | null;
  isLoading: boolean;
  onRefresh: () => void;
  navigation: MyRecipeListNavigationProp;
};

export default function MyRecipeListView({
  recipes,
  isLoading,
  onRefresh,
  navigation,
}: MyRecipeListViewProps) {
  /** Presentational component listing some recipes. */
  return (
    <>
      <View style={styles.headerContainer}>
        <TextStyled style={styles.titleText}>My recipes</TextStyled>
        <PressablePrimary
          onPress={() => navigation.navigate(ScreenName.CreateRecipe)}
          style={styles.addRecipeButton}
          text={'+'}
        />
      </View>
      {isLoading ?? <LoadingSpinner size={'large'} />}
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <RecipeListRow recipe={item} navigation={navigation} />
        )}
        keyExtractor={recipe => `${recipe.id}`}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // Display
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleText: {
    // Display
    marginVertical: 10,
    // Typography
    fontSize: FontSize.Header1,
    fontWeight: 'bold',
  },
  addRecipeButton: {
    // Display
    width: 50,
    height: 50,
    // Border
    borderRadius: 25,
  },
});
