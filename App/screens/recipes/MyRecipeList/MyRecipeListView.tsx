import React from 'react';
import {StyleSheet, FlatList, Text} from 'react-native';

import {FontSize} from '../../../styles/constants';
import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';
import RecipeListRow from './RecipeListRow';

type MyRecipeListViewProps = {
  recipes: Array<RecipePreview>;
  navigation: MyRecipeListNavigationProp;
};

export default function MyRecipeListView({
  recipes,
  navigation,
}: MyRecipeListViewProps) {
  /** Presentational component listing some recipes. */
  // TODO -> use a scroll view with a render item.
  // For now just render the data - it's probs very sub-optimal to fetch / row anyway...
  return (
    <>
      <Text style={styles.title}>My recipes</Text>
      <FlatList
        data={recipes}
        renderItem={({item}) => (
          <RecipeListRow recipe={item} navigation={navigation} />
        )}
        keyExtractor={recipe => `${recipe.recipeId}`}
      />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    // Display
    textAlign: 'center',
    marginVertical: 20,
    // Typography
    fontSize: FontSize.Header1,
    fontWeight: 'bold',
  },
});
