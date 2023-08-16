import React from 'react';

import {View} from 'react-native';
import {StyleSheet} from 'react-native';

import {bootstrap, TextStyled} from '../../../../components/styled';
import {ColourScheme, useColourScheme} from '../../../../styles/colourScheme';

type IngredientsTabProps = {
  ingredients: Array<string>;
};

export default function IngredientsTab({ingredients}: IngredientsTabProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={[bootstrap.my3]}>
      {ingredients.map(ingredient => {
        return (
          <View style={styleSheet.ingredientRow}>
            <TextStyled>{ingredient}</TextStyled>
          </View>
        );
      })}
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    ingredientRow: {
      // Display
      width: '100%',
      paddingVertical: 5,
      paddingHorizontal: 20,
      textAlign: 'left',
      // Border
      borderBottomWidth: 0.5,
      borderColor: colourScheme.fontPrimary,
    },
  });
