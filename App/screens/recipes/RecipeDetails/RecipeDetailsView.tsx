import React from 'react';

import {StyleSheet, ScrollView, View} from 'react-native';

import TabContainer from './tabs/TabContainer';
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

  if (isLoading || !recipe) {
    return <LoadingSpinner size={'large'} />;
  }

  return (
    <ScrollView>
      <LargeSquareImage
        imageSource={heroImageSource}
        extraStyles={styles.image}
      />
      <View style={styles.container}>
        <TextStyled style={[styles.recipeNameText]}>{recipe.name}</TextStyled>
        <TextStyled style={styles.recipeDescriptionText}>
          {recipe.description}
        </TextStyled>
      </View>
      <TabContainer
        ingredients={recipe.ingredients}
        nutritionalInformation={recipe.nutritional_information}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // Display
    alignItems: 'flex-start',
    paddingLeft: 25,
    paddingRight: 25,
  },
  recipeNameText: {
    // Display
    marginVertical: 10,
    // Typography
    fontSize: FontSize.Header3,
    fontWeight: 'bold',
  },
  recipeDescriptionText: {
    // Display
    marginVertical: 5,
    width: '100%',
    // Typography
    textAlign: 'left',
  },
  image: {
    // Background and border
    borderRadius: 5,
  },
});
