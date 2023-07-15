import React from 'react';
import {useState} from 'react';

import CreateRecipeView from './CreateRecipeView';
import {CreateRecipeProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {createRecipeEndpoint} from '../../../services/restAPI/endpoints';
import {postData} from '../../../services/restAPI/request';

export function CreateRecipe({navigation}: CreateRecipeProps) {
  /** Allow users to create a new recipe. */
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  function submitForm(): void {
    const form = new FormData();
    form.append('name', name);
    form.append('description', description);
    postData(createRecipeEndpoint, form).then(() =>
      navigation.navigate(ScreenName.MyRecipeList),
    );
  }

  return (
    <CreateRecipeView
      submitForm={submitForm}
      name={name}
      onNameChange={setName}
      description={description}
      onDescriptionChange={setDescription}
    />
  );
}
