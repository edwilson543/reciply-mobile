import React from 'react';

import {Pressable, StyleSheet, View} from 'react-native';

import {ThumbnailImage} from '../../../components/images/network';
import {TextStyled} from '../../../components/styled';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';
import {previewText} from '../../../utils/formatters';

const descriptionPreviewChars = 40;

type RecipeListRowProps = {
  recipe: RecipeListPayload;
  onPress?: () => void;
};

export default function RecipeListRow({recipe, onPress}: RecipeListRowProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <Pressable onPress={onPress} testID={`recipe-${recipe.id}`}>
      <View style={styleSheet.container} key={recipe.id}>
        <View style={styleSheet.textContainer}>
          <TextStyled style={styleSheet.recipeName}>{recipe.name}</TextStyled>
          <TextStyled style={styleSheet.recipeDescription}>
            {previewText(recipe.description, descriptionPreviewChars)}
          </TextStyled>
        </View>
        <ThumbnailImage imageSource={recipe.hero_image_source} />
      </View>
    </Pressable>
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
      marginVertical: 5,
      padding: 10,
      // Border
      borderColor: colourScheme.fontPrimary,
      borderWidth: 0.5,
      borderRadius: 5,
    },
    textContainer: {
      // Display
      flex: 1,
      flexDirection: 'column',
    },
    recipeName: {fontWeight: 'bold'},
    recipeDescription: {fontStyle: 'italic', fontSize: FontSize.TextSmall},
  });
