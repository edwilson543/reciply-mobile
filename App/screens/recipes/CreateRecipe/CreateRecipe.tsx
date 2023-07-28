import React from 'react';
import {useState} from 'react';

import {Asset, launchImageLibrary} from 'react-native-image-picker';

import CreateRecipeView from './CreateRecipeView';
import {CreateRecipeProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {StatusCode} from '../../../services/restAPI/constants';
import {CreateRecipeErrors} from '../../../services/restAPI/payloads';
import {createRecipe} from '../../../services/restAPI/requests/recipes';

export function CreateRecipe({navigation}: CreateRecipeProps) {
  /** Allow users to create a new recipe. */
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [heroImage, setHeroImage] = useState<Asset | null>(null);
  const [errors, setErrors] = useState<CreateRecipeErrors | null>(null);

  async function submitForm(): Promise<void> {
    createRecipe(name, description, heroImage).then(response => {
      if (response.status >= StatusCode.BadRequest) {
        response.json().then(data => setErrors(data));
      } else {
        navigation.navigate(ScreenName.MyRecipeList, {refresh: true});
      }
    });
  }

  async function pickHeroImage(): Promise<void> {
    try {
      const pickerResult = await launchImageLibrary({mediaType: 'photo'});
      if (pickerResult.assets && pickerResult.assets.length > 0) {
        setHeroImage(pickerResult.assets[0]);
      }
    } catch (error) {
      return;
    }
  }

  return (
    <CreateRecipeView
      name={name}
      onNameChange={setName}
      description={description}
      onDescriptionChange={setDescription}
      heroImageSource={heroImage && heroImage.uri ? heroImage?.uri : ''}
      pickHeroImage={pickHeroImage}
      submitForm={submitForm}
      errors={errors}
    />
  );
}
