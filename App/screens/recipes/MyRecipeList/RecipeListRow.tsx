import {Button, StyleSheet, Text, View} from 'react-native';

import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';
import {Route} from '../../../navigation/constants';
import React from 'react';

type MyRecipeListViewProps = {
  recipe: RecipePreview;
  navigation: MyRecipeListNavigationProp;
};

export default function RecipeListRow({
  recipe,
  navigation,
}: MyRecipeListViewProps) {
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
}

const styles = StyleSheet.create({
  recipeRow: {
    // Display
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
