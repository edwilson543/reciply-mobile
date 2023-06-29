import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Route} from '../../../navigation/constants';
import {RecipeStackParams} from '../../../navigation/stackParams';
import {RecipePreview} from '../../../utils/types/recipes';

type MyRecipeListNavigationProp = NativeStackNavigationProp<
  RecipeStackParams,
  Route.MyRecipeList
>;

type MyRecipeListViewProps = {
  recipes: Array<RecipePreview>;
  navigation: MyRecipeListNavigationProp;
};

export function MyRecipeListView({recipes, navigation}: MyRecipeListViewProps) {
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
