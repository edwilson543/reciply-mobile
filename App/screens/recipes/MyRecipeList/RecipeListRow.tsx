import {Pressable, StyleSheet, Text, View} from 'react-native';

import {RecipePreview} from '../../../utils/types/recipes';
import {MyRecipeListNavigationProp} from '../../../navigation/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import React from 'react';
import {useColourScheme, ColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type MyRecipeListViewProps = {
  recipe: RecipePreview;
  navigation: MyRecipeListNavigationProp;
};

export default function RecipeListRow({
  recipe,
  navigation,
}: MyRecipeListViewProps) {
  const colourScheme = useColourScheme();

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
          navigation.push(ScreenName.RecipeDetails, {
            recipeId: recipe.recipeId,
          })
        }
        style={styles(colourScheme).viewRecipeButton}>
        <Text style={styles(colourScheme).viewRecipeButtonText}>view</Text>
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
      fontSize: FontSize.Text,
      fontWeight: 'bold',
    },
    recipeDescription: {
      // Typography
      fontSize: FontSize.TextSmall,
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
      borderRadius: 25,
    },
    viewRecipeButtonText: {
      // Typography
      fontSize: FontSize.TextSmall,
      color: colourScheme.buttonPrimaryFont,
    },
  });
