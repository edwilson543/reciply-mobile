import {useEffect, useState} from 'react';

import {RecipeUrlBase} from './constants';
import {RecipePreview} from '../../../utils/types/recipes';
import * as request from '../request';

const recipeListEndpoint = `${RecipeUrlBase}list/`;

export function useMyRecipeList(): Array<RecipePreview> {
  /** Fetch the user's authored recipe list. */
  const [recipeList, setRecipeList] = useState<Array<RecipePreview>>([]);

  useEffect(() => {
    request
      .fireAuthenticatedRequest(recipeListEndpoint, request.RequestMethod.GET)
      .then(response => {
        return response.json() as unknown as Array<RecipePreview>;
      })
      .then(responseData => setRecipeList(responseData));
  }, []);

  return recipeList;
}
