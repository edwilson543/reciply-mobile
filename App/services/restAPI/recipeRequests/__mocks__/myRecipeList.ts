import {useEffect, useState} from 'react';

import data from './myRecipeList.data.json';
import {RecipePreview} from '../../../../utils/types/recipes';

export default function useMyRecipeList(): Array<RecipePreview> {
  /** Fetch the recipe list and return it */
  const [recipeList, setRecipeList] = useState<Array<RecipePreview>>([]);

  useEffect(() => {
    const responseData = Promise.resolve();
    responseData.then(() => setRecipeList(data));
  }, []);

  return recipeList;
}
