import React from 'react';

import RecipeDetailsView from './RecipeDetailsView';
import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {useRecipeDetails} from '../../../services/restAPI/requests/recipes';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const {data, isLoading} = useRecipeDetails(route.params.recipeId);

  return <RecipeDetailsView recipe={data} isLoading={isLoading} />;
}
