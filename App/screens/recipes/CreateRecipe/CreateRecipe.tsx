import React from 'react';
import {useState} from 'react';

import CreateRecipeView from './CreateRecipeView';
import {CreateRecipeProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {StatusCode} from '../../../services/restAPI/constants';
import {createRecipeEndpoint} from '../../../services/restAPI/endpoints';
import {postData} from '../../../services/restAPI/request';
import {CreateRecipeErrors} from '../../../services/restAPI/types';

export function CreateRecipe({navigation}: CreateRecipeProps) {
  /** Allow users to create a new recipe. */
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [errors, setErrors] = useState<CreateRecipeErrors | null>(null);

  function submitForm(): void {
    const form = new FormData();
    form.append('name', name);
    form.append('description', description);
    let error = false;

    postData(createRecipeEndpoint, form)
      .then(response => {
        if (response.status >= StatusCode.BadRequest) {
          error = true;
        }
        return response.json();
      })
      .then(data => {
        if (error) {
          setErrors(data);
        } else {
          navigation.navigate(ScreenName.MyRecipeList, {refresh: true});
        }
      });
  }

  return (
    <CreateRecipeView
      name={name}
      onNameChange={setName}
      description={description}
      onDescriptionChange={setDescription}
      submitForm={submitForm}
      errors={errors}
    />
  );
}
