import React from 'react';

import {StyleSheet, ScrollView, Text, View} from 'react-native';

import {LargeSquareImage} from '../../../components/images/network';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {RecipeDetailsPayload} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type RecipeDetailsViewProps = {
  recipe: RecipeDetailsPayload | null;
  isLoading: boolean;
};

export default function RecipeDetailsView({
  recipe,
  isLoading,
}: RecipeDetailsViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <ScrollView>
      <View style={styleSheet.container}>
        {isLoading || !recipe ? (
          // TODO -> include errors in response payload
          <LoadingSpinner size={'large'} />
        ) : (
          <View>
            <Text style={styleSheet.recipeNameText}>{recipe.name}</Text>
            <LargeSquareImage imageSource={''} extraStyles={styleSheet.image} />
            <Text style={styleSheet.recipeDescriptionText}>
              {recipe.description}
            </Text>
          </View>
        )}
      </View>
    </ScrollView>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
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
      color: colourScheme.fontPrimary,
    },
    recipeDescriptionText: {
      // Display
      marginTop: 10,
      // Typography
      fontSize: FontSize.Text,
      textAlign: 'left',
    },
    image: {
      // Background and border
      borderRadius: 5,
    },
  });
