import {postData, useGetData} from '../client';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';

export const useMyRecipeList = (refreshKey: number) =>
  useGetData<Array<payloads.RecipeListPayload>>(
    endpoints.myRecipeListEndpoint,
    refreshKey,
  );

export const useRecipeDetails = (recipeId: number) =>
  useGetData<payloads.RecipeDetailsPayload>(
    endpoints.recipeDetailsEndpoint(recipeId),
  );

export const createRecipe = async (form: FormData): Promise<Response> => {
  return postData(endpoints.createRecipeEndpoint, form, true);
};
