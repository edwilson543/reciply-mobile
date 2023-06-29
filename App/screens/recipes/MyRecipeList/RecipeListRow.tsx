import {Text} from 'react-native';

import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';

type MyRecipeListViewProps = {
  recipe: RecipePreview;
  navigation: MyRecipeListNavigationProp;
};

export default function RecipeListRow({
  recipe,
  navigation,
}: MyRecipeListViewProps) {
  return <Text></Text>;
}
