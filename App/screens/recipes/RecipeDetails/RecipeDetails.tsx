import React from 'react';
import {Text, View} from 'react-native';
import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const recipeId = route.params.recipeId;

  return (
    <View>
      <Text>I will fetch & show the details for recipe: {recipeId}</Text>
    </View>
  );
}
