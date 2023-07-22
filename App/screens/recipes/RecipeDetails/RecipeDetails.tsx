import React from 'react';

import RecipeDetailsView from './RecipeDetailsView';
import {RecipeDetailsProps} from '../../../navigation/authenticated/navigation.types';
import {recipeDetailsEndpoint} from '../../../services/restAPI/endpoints';
import {RecipeDetailsPayload} from '../../../services/restAPI/payloads';
import {useGetData} from '../../../services/restAPI/request';

export function RecipeDetails({route}: RecipeDetailsProps) {
  /** Show the details of a single recipe. */
  const {data, isLoading} = useGetData<RecipeDetailsPayload>(
    recipeDetailsEndpoint(route.params.id),
  );

  return <RecipeDetailsView recipe={data} isLoading={isLoading} />;
}
