import React, {SetStateAction} from 'react';

import {Pressable, View, Text, StyleSheet, TextInput} from 'react-native';

import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type CreateRecipeViewProps = {
  name: string;
  onNameChange: React.Dispatch<SetStateAction<string>>;
  description: string;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
  submitForm: () => void;
};

export default function CreateRecipeView({
  name,
  onNameChange,
  description,
  onDescriptionChange,
  submitForm,
}: CreateRecipeViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  return (
    <View style={styleSheet.container}>
      <Text>Create new recipe</Text>
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={onNameChange}
        style={[styleSheet.textInputField, styleSheet.nameInputField]}
      />
      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={onDescriptionChange}
        multiline={true}
        style={[styleSheet.textInputField, styleSheet.descriptionInputField]}
      />
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
    textInputField: {
      // Display
      width: '75%',
      // Border
      borderWidth: 1,
      borderRadius: 5,
      borderColor: colourScheme.buttonPrimary,
      // Typography
      fontSize: FontSize.TextLarge,
      color: colourScheme.fontPrimary,
      textAlign: 'left',
    },
    nameInputField: {
      height: 50,
    },
    descriptionInputField: {
      height: 300,
    },
    submitButton: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
      height: 50,
      marginTop: 5,
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
