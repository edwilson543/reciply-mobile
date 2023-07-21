import React from 'react';
import {useState} from 'react';

import {Platform} from 'react-native';
import {Asset, launchImageLibrary} from 'react-native-image-picker';

import CreateRecipeView from './CreateRecipeView';
import {CreateRecipeProps} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {StatusCode} from '../../../services/restAPI/constants';
import {createRecipeEndpoint} from '../../../services/restAPI/endpoints';
import {CreateRecipeErrors} from '../../../services/restAPI/payloads';
import {postData} from '../../../services/restAPI/request';

export function CreateRecipe({navigation}: CreateRecipeProps) {
  /** Allow users to create a new recipe. */
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [heroImage, setHeroImage] = useState<Asset | null>(null);
  const [errors, setErrors] = useState<CreateRecipeErrors | null>(null);

  async function submitForm(): Promise<void> {
    const form = new FormData();
    form.append('name', name);
    form.append('description', description);
    if (heroImage && heroImage.uri) {
      form.append('hero_image', {
        name: heroImage.fileName,
        type: heroImage.type,
        uri:
          Platform.OS === 'ios'
            ? heroImage.uri.replace('file://', '')
            : heroImage.uri,
      });
    }
    postData(createRecipeEndpoint, form, true).then(response => {
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
      heroImage={heroImage}
      pickHeroImage={pickHeroImage}
      submitForm={submitForm}
      errors={errors}
    />
  );
}
