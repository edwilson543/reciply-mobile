import React from 'react';

import {Pressable, View, Text, StyleSheet} from 'react-native';

import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type CreateRecipeViewProps = {
  submitForm: () => void;
};

export default function CreateRecipeView({submitForm}: CreateRecipeViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.container}>
      <Text>Create new recipe</Text>
      <Pressable onPress={submitForm} style={styleSheet.submitButton}>
        <Text style={styleSheet.submitButtonText}>Submit</Text>
      </Pressable>
    </View>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {
      // Display
      padding: 5,
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    submitButton: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
      height: 50,
      // Background and border
      backgroundColor: colourScheme.buttonPrimary,
      borderRadius: 20,
    },
    submitButtonText: {
      // Typography
      fontSize: FontSize.Text,
      color: colourScheme.buttonPrimaryFont,
    },
  });
