import React, {SetStateAction} from 'react';

import {Pressable, View, Text, StyleSheet, TextInput} from 'react-native';

import {CreateRecipeErrors} from '../../../services/restAPI/types';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type CreateRecipeViewProps = {
  name: string;
  onNameChange: React.Dispatch<SetStateAction<string>>;
  description: string;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
  submitForm: () => void;
  errors: CreateRecipeErrors | null;
};

export default function CreateRecipeView({
  name,
  onNameChange,
  description,
  onDescriptionChange,
  submitForm,
  errors,
}: CreateRecipeViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const canSubmit = name.length > 5;

  // TODO -> a generic 'FormErrors' component (and extract error lists)
  return (
    <View style={styleSheet.container}>
      <Text style={styleSheet.header}>Create new recipe</Text>
      {errors && errors.hasOwnProperty('name') && (
        <Text style={styleSheet.errorText}>{errors.name}</Text>
      )}
      <Text>Name</Text>
      <TextInput
        value={name}
        onChangeText={onNameChange}
        style={[styleSheet.textInputField, styleSheet.nameInputField]}
        testID={'name-input'}
      />
      <Text>Description</Text>
      <TextInput
        value={description}
        onChangeText={onDescriptionChange}
        multiline={true}
        style={[styleSheet.textInputField, styleSheet.descriptionInputField]}
        testID={'description-input'}
      />
      <Pressable
        onPress={submitForm}
        disabled={!canSubmit}
        style={styleSheet.submitButton}
        testID={'submit-button'}>
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
    header: {
      //Typography
      fontSize: FontSize.Header3,
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
    errorText: {
      // Display
      padding: 5,
      // Background and border
      backgroundColor: colourScheme.alertDanger,
      borderRadius: 10,
      // Typography
      fontSize: FontSize.TextSmall,
      color: colourScheme.alertDangerFont,
    },
  });
