import React from 'react';

import {StyleSheet, ScrollView, View} from 'react-native';

import {LargeSquareImage} from '../../../components/images/network';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {TextStyled} from '../../../components/styled';
import {RecipeDetailsPayload} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';

type RecipeDetailsViewProps = {
  recipe: RecipeDetailsPayload | null;
  isLoading: boolean;
};

export default function RecipeDetailsView({
  recipe,
  isLoading,
}: RecipeDetailsViewProps) {
  let heroImageSource = '';
  if (recipe) {
    const heroImages = recipe.images.filter(image => image.is_hero);
    if (heroImages.length > 0) {
      heroImageSource = heroImages[0].image_source;
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {isLoading || !recipe ? (
          <LoadingSpinner size={'large'} />
        ) : (
          <View>
            <TextStyled style={[styles.recipeNameText]}>
              {recipe.name}
            </TextStyled>
            <LargeSquareImage
              imageSource={heroImageSource}
              extraStyles={styles.image}
            />
            <TextStyled style={styles.recipeDescriptionText}>
              {recipe.description}
            </TextStyled>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Display
    alignItems: 'center',
    paddingLeft: 25,
    paddingRight: 25,
  },
  recipeNameText: {
    // Display
    margin: 10,
    // Typography
    fontSize: FontSize.Header3,
    fontWeight: 'bold',
  },
  recipeDescriptionText: {
    // Display
    marginTop: 10,
    // Typography
    textAlign: 'left',
  },
  image: {
    // Background and border
    borderRadius: 5,
  },
});
