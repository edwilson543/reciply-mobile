import {postData, useGetData} from '../client';
import {
  createRecipeEndpoint,
  myRecipeListEndpoint,
  recipeDetailsEndpoint,
} from '../endpoints';
import {RecipeDetailsPayload, RecipeListPayload} from '../payloads';

export const useMyRecipeList = (refreshKey: number) =>
  useGetData<Array<RecipeListPayload>>(myRecipeListEndpoint, refreshKey);

export const useRecipeDetails = (recipeId: number) =>
  useGetData<RecipeDetailsPayload>(recipeDetailsEndpoint(recipeId));

export const createRecipe = async (form: FormData): Promise<Response> => {
  return postData(createRecipeEndpoint, form, true);
};
