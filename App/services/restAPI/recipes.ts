import {RecipePreview} from '../../utils/types/recipes';
import data from './__mocks__/data/MyRecipeList.json';

export async function getMyRecipeList(): Promise<Array<RecipePreview>> {
  // TODO -> actually make an API request and relegate this implementation to the mock.
  return new Promise(function (resolve, reject) {
    resolve(data);
    reject();
  });
}
