import React from 'react';
import {useEffect, useState} from 'react';

import {MyRecipeListProps} from '../../../navigation/navigation.types';
import MyRecipeListView from './MyRecipeListView';
import {RecipePreview} from '../../../utils/types/recipes';
import {getMyRecipeList} from '../../../services/restAPI/recipes';

export function MyRecipeList({navigation}: MyRecipeListProps) {
  /** Container for the screen showing the user's recipes. */
  const [recipeList, setRecipeList] = useState<Array<RecipePreview>>([]);

  useEffect(() => {
    getMyRecipeList().then(data => setRecipeList(data));
  }, []);

  return <MyRecipeListView recipes={recipeList} navigation={navigation} />;
}
