import React from 'react';

import RecipeDetailsView from './RecipeDetailsView';
import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {recipeDetailsEndpoint} from '../../../services/restAPI/endpoints';
import {useGetData} from '../../../services/restAPI/request';
import {RecipePreview} from '../../../utils/types/recipes';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const {data, friendlyErrors, isLoading} = useGetData<RecipePreview>(
    recipeDetailsEndpoint(route.params.id),
  );

  console.log('RecipeDetails errors', friendlyErrors); // TODO -> use

  return <RecipeDetailsView recipe={data} isLoading={isLoading} />;
}
