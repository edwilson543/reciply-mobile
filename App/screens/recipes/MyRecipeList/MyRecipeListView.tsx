import React from 'react';

import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, FlatList, View} from 'react-native';

import RecipeListRow from './RecipeListRow';
import {RecipesTopBackground} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {Header1, PressablePrimaryIcon} from '../../../components/styled';
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
    <View style={styles.screenContainer}>
      <RecipesTopBackground />
      <View style={styles.headerContainer}>
        <Header1 style={styles.titleText} testID={'recipes-header'}>
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
          <RecipeListRow recipe={item} navigation={navigation} />
        )}
        keyExtractor={recipe => `${recipe.id}`}
        onRefresh={onRefresh}
        refreshing={isLoading}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
  headerContainer: {
    // Display
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleText: {
    // Display
    marginVertical: 10,
  },
});
