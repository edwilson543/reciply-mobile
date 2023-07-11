import React from 'react';

import {Text, View} from 'react-native';

import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const id = route.params.id;

  return (
    <View>
      <Text>I will fetch & show the details for recipe: {id}</Text>
    </View>
  );
}
