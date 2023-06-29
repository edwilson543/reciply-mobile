import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

import {Route} from '../../../navigation/constants';
import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';

type MyRecipeListViewProps = {
  recipes: Array<RecipePreview>;
  navigation: MyRecipeListNavigationProp;
};

export default function MyRecipeListView({
  recipes,
  navigation,
}: MyRecipeListViewProps) {
  /** Presentational component listing some recipes. */
  return (
    <View style={styles.recipeTable}>
      {recipes.map(recipe => {
        return (
          <View style={styles.recipeRow} key={recipe.recipeId}>
            <Text>{recipe.name}</Text>
            <Text>{recipe.description}</Text>
            <Button
              title={'view'}
              onPress={() =>
                navigation.push(Route.RecipeDetails, {
                  recipeId: recipe.recipeId,
                })
              }
            />
          </View>
        );
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
  recipeRow: {
    // Display
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
