import React from 'react';

import {Pressable, StyleSheet, Text, View} from 'react-native';

import {ThumbnailImage} from '../../../components/images/network';
import {MyRecipeListNavigationProp} from '../../../navigation/authenticated/navigation.types';
import {ScreenName} from '../../../navigation/constants';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';
import {previewText} from '../../../utils/formatters';

const descriptionPreviewChars = 40;

type MyRecipeListViewProps = {
  recipe: RecipeListPayload;
  navigation: MyRecipeListNavigationProp;
};

export default function RecipeListRow({
  recipe,
  navigation,
}: MyRecipeListViewProps) {
  return (
    <Pressable
      onPress={() =>
        navigation.push(ScreenName.RecipeDetails, {
          id: recipe.id,
        })
      }
      testID={`recipe-${recipe.id}`}>
      <View style={styles.container} key={recipe.id}>
        <View style={styles.textContainer}>
          <Text style={styles.recipeName}>{recipe.name}</Text>
          <Text style={styles.recipeDescription}>
            {previewText(recipe.description, descriptionPreviewChars)}
          </Text>
        </View>
        <ThumbnailImage imageSource={recipe.hero_image_source} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
});
