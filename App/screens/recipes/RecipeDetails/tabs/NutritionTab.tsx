import React from 'react';

import {StyleSheet, View} from 'react-native';

import {bootstrap, TextStyled} from '../../../../components/styled';
import {NutritionalInformation} from '../../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../../styles/colourScheme';

type NutritionTabProps = {
  nutritionalInformation: NutritionalInformation;
};

export default function NutritionTab({
  nutritionalInformation,
}: NutritionTabProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={[bootstrap.my3]} testID={'nutrition-tab-content'}>
      <View style={styleSheet.row}>
        <TextStyled>
          Protein: {nutritionalInformation.protein_grams} g
        </TextStyled>
      </View>
      <View style={styleSheet.row}>
        <TextStyled>
          Carbohydrates: {nutritionalInformation.carbohydrates_grams} g
        </TextStyled>
      </View>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    row: {
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
