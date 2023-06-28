import React from 'react';
import {Text, View} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {Route} from '../../../navigation/constants';
import {RecipeStackParams} from '../../../navigation/stackParams';

type RecipeDetailsProps = NativeStackScreenProps<
  RecipeStackParams,
  Route.RecipeDetails
>;

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const recipeId = route.params.recipeId;

  return (
    <View>
      <Text>I will fetch & show the details for recipe: {recipeId}</Text>
    </View>
  );
}
