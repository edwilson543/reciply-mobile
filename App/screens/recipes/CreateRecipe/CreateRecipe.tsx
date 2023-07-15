import React from 'react';

import CreateRecipeView from './CreateRecipeView';
import {CreateRecipeProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {createRecipeEndpoint} from '../../../services/restAPI/endpoints';
import {postData} from '../../../services/restAPI/request';

export function CreateRecipe({navigation}: CreateRecipeProps) {
  /** Allow users to create a new recipe. */

  function submitForm(): void {
    postData(createRecipeEndpoint, {}).then(() =>
      navigation.navigate(ScreenName.MyRecipeList),
    );
  }

  return <CreateRecipeView submitForm={submitForm} />;
}
