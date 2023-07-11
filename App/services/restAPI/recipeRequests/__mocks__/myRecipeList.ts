import {useEffect, useState} from 'react';

import data from './myRecipeList.data.json';
import {RecipePreview} from '../../../../utils/types/recipes';

export function useMyRecipeList(): Array<RecipePreview> {
  /** Fetch the recipe list and return it */
  const [recipeList, setRecipeList] = useState<Array<RecipePreview>>([]);

  useEffect(() => {
    getMyRecipeList().then(responseData => setRecipeList(responseData));
  }, []);

  return recipeList;
}

async function getMyRecipeList(): Promise<Array<RecipePreview>> {
  // TODO -> actually make an API request and relegate this implementation to the mock.
  // This can be some generic hook
  return new Promise(function (resolve, reject) {
    resolve(data);
    reject();
  });
}
