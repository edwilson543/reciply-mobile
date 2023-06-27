import React from 'react';
import {Text, View} from 'react-native';

import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RouteParams} from '../../../navigation/RouteParams';

type RecipeDetailsProps = NativeStackScreenProps<
  RouteParams,
  'RecipeDetails'
>;

export default function RecipeDetails({
  route,
  navigation,
}: RecipeDetailsProps): JSX.Element {
  /** Show the details of a single recipe. */
  const recipeId = route.params.recipeId;

  return (
    <View>
      <Text>I will fetch & show the details for recipe: {recipeId}</Text>
    </View>
  );
}
