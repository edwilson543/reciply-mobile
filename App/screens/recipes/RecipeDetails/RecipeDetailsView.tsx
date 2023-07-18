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
  return (
    <ScrollView>
      <View style={styles.container}>
        {isLoading || !recipe ? (
          // TODO -> include errors in response payload
          <LoadingSpinner size={'large'} />
        ) : (
          <View>
            <TextStyled style={[styles.recipeNameText]}>
              {recipe.name}
            </TextStyled>
            <LargeSquareImage imageSource={''} extraStyles={styles.image} />
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
