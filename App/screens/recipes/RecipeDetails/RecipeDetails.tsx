import React from 'react';

import RecipeDetailsView from './RecipeDetailsView';
import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {useGetData} from '../../../services/restAPI/client';
import {recipeDetailsEndpoint} from '../../../services/restAPI/endpoints';
import {RecipeDetailsPayload} from '../../../services/restAPI/payloads';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const {data, isLoading} = useGetData<RecipeDetailsPayload>(
    recipeDetailsEndpoint(route.params.id),
  );

  return <RecipeDetailsView recipe={data} isLoading={isLoading} />;
}
