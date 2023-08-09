import {useGetData} from '../client';
import * as endpoints from '../endpoints';
import * as payloads from '../payloads';

export const useSuggestedRecipeList = (menuId: number) =>
  useGetData<Array<payloads.RecipeListPayload>>(
    endpoints.suggestRecipesForMenuEndpoint(menuId),
  );
