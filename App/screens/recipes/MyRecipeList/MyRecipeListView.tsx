import React from 'react';
import {StyleSheet, View} from 'react-native';

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
    <View style={styles.recipeTable}>
      {recipes.map(recipe => {
        return <RecipeListRow recipe={recipe} navigation={navigation} />;
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  recipeTable: {
    // Display
    flex: 1,
    alignItems: 'flex-start',
  },
});
