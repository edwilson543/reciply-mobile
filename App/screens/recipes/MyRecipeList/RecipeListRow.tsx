import {
  Pressable,
  ColorSchemeName,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';
import {Route} from '../../../navigation/constants';
import React from 'react';
import {getColourScheme, ColourScheme} from '../../../styles/colourScheme';

type MyRecipeListViewProps = {
  recipe: RecipePreview;
  navigation: MyRecipeListNavigationProp;
};

export default function RecipeListRow({
  recipe,
  navigation,
}: MyRecipeListViewProps) {
  const colourTheme = useColorScheme();
  const colourScheme = getColourScheme(colourTheme);

  return (
    <View style={styles(colourScheme).container} key={recipe.recipeId}>
      <View style={styles(colourScheme).textContainer}>
        <Text style={styles(colourScheme).recipeName}>{recipe.name}</Text>
        <Text style={styles(colourScheme).recipeDescription}>
          {recipe.description}
        </Text>
      </View>
      <Pressable
        onPress={() =>
          navigation.push(Route.RecipeDetails, {
            recipeId: recipe.recipeId,
          })
        }
        style={styles(colourScheme).viewRecipeButton}>
        <Text>view</Text>
      </Pressable>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {
      // Display
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 10,
      marginHorizontal: 10,
    },
    textContainer: {
      // Display
      flex: 1,
      flexDirection: 'column',
    },
    recipeName: {
      // Typography
      fontSize: 20,
      fontWeight: 'bold',
    },
    recipeDescription: {
      // Typography
      fontSize: 15,
      fontStyle: 'italic',
    },
    viewRecipeButton: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: 50,
      height: 50,
      // Background
      backgroundColor: colourScheme.buttonPrimary,
      // Border
      borderRadius: 20,
    },
  });
