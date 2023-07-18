import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';

import {ThumbnailImage} from '../../../components/images/network';
import * as text from '../../../components/styled/TextStyled';
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
          <text.TextStyled style={styles.recipeName}>
            {recipe.name}
          </text.TextStyled>
          <text.TextStyled style={styles.recipeDescription}>
            {previewText(recipe.description, descriptionPreviewChars)}
          </text.TextStyled>
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
  recipeName: {fontWeight: 'bold'},
  recipeDescription: {fontStyle: 'italic', fontSize: FontSize.TextSmall},
});
