import React from 'react';

import {Text, View} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {RecipePreview} from '../../../utils/types/recipes';

type RecipeDetailsViewProps = {
  recipe: RecipePreview | null;
  isLoading: boolean;
};

export default function RecipeDetailsView({
  recipe,
  isLoading,
}: RecipeDetailsViewProps) {
  return (
    <View>
      {isLoading || !recipe ? (
        // TODO -> include errors in response payload
        <LoadingSpinner size={'large'} />
      ) : (
        <View>
          <Text>{recipe.name}</Text>
          <Text>{recipe.description}</Text>
        </View>
      )}
    </View>
  );
}
