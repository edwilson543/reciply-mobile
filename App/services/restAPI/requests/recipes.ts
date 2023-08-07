import {Platform} from 'react-native';
import {Asset} from 'react-native-image-picker';

import {postData, useGetData} from '../client';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';
import {CreateRecipeErrors} from '../payloads';

export const useMyRecipeList = (refreshKey: number) =>
  useGetData<Array<payloads.RecipeListPayload>>(
    endpoints.myRecipeListEndpoint,
    refreshKey,
  );

export const useRecipeDetails = (recipeId: number) =>
  useGetData<payloads.RecipeDetailsPayload>(
    endpoints.recipeDetailsEndpoint(recipeId),
  );

export const createRecipe = async (
  name: string,
  description: string,
  heroImage: Asset | null,
) => {
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
  return postData<any, CreateRecipeErrors>(
    endpoints.createRecipeEndpoint,
    form,
    true,
  );
};
