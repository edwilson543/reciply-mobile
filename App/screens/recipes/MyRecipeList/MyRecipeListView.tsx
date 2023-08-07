import React from 'react';

import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, FlatList, View} from 'react-native';

import RecipeListRow from './RecipeListRow';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {bootstrap} from '../../../components/styled';
import {Header1, PressablePrimaryIcon} from '../../../components/styled';
import {RecipeScreenTemplate} from '../../../components/Templates';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {RecipeListPayload} from '../../../services/restAPI/payloads';

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
    <RecipeScreenTemplate>
      <View style={styles.headerContainer}>
        <Header1 style={[bootstrap.my5]} testID={'recipes-header'}>
          recipes
        </Header1>
        <PressablePrimaryIcon
          onPress={() => navigation.navigate(ScreenName.CreateRecipe)}
          icon={faPlus}
        />
      </View>
      {isLoading ?? <LoadingSpinner size={'large'} />}
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <RecipeListRow
            recipe={item}
            onPress={() =>
              navigation.push(ScreenName.RecipeDetails, {recipeId: item.id})
            }
          />
        )}
        keyExtractor={recipe => `${recipe.id}`}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </RecipeScreenTemplate>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    // Display
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
