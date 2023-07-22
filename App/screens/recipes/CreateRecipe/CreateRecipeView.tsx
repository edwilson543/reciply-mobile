import React, {SetStateAction} from 'react';

import {Pressable, View, Text, StyleSheet} from 'react-native';

import UploadImagePreview from '../../../components/images/local/UploadImagePreview';
import {TextInputStyled, TextStyled} from '../../../components/styled';
import {CreateRecipeErrors} from '../../../services/restAPI/payloads';
import {ColourScheme, useColourScheme} from '../../../styles/colourScheme';
import {FontSize} from '../../../styles/constants';

type CreateRecipeViewProps = {
  name: string;
  onNameChange: React.Dispatch<SetStateAction<string>>;
  description: string;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
  heroImageSource: string;
  pickHeroImage: () => void;
  submitForm: () => void;
  errors: CreateRecipeErrors | null;
};

export default function CreateRecipeView({
  name,
  onNameChange,
  description,
  onDescriptionChange,
  heroImageSource,
  pickHeroImage,
  submitForm,
  errors,
}: CreateRecipeViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const canSubmit = name.length > 5;

  // TODO -> a generic 'FormErrors' component (and extract error lists)
  return (
    <View style={styleSheet.container}>
      <TextStyled style={styleSheet.header}>Create new recipe</TextStyled>
      {errors && errors.hasOwnProperty('name') && (
        <TextStyled style={styleSheet.errorText}>{errors.name}</TextStyled>
      )}
      <TextStyled>Name</TextStyled>
      <TextInputStyled
        value={name}
        onChangeText={onNameChange}
        style={[styleSheet.textInputField, styleSheet.nameInputField]}
        testID={'name-input'}
      />
      <TextStyled>Description</TextStyled>
      <TextInputStyled
        value={description}
        onChangeText={onDescriptionChange}
        multiline={true}
        style={[styleSheet.textInputField, styleSheet.descriptionInputField]}
        testID={'description-input'}
      />
      <View style={styleSheet.selectImageContainer}>
        <Pressable onPress={pickHeroImage} style={styleSheet.selectImageButton}>
          <TextStyled style={styleSheet.selectImageText}>
            + Add photo
          </TextStyled>
        </Pressable>
        <UploadImagePreview imageSource={heroImageSource} />
      </View>
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
    // Inputs
    textInputField: {
      // Display
      width: '75%',
      // Typography
      fontSize: FontSize.TextLarge,
      textAlign: 'left',
    },
    nameInputField: {
      height: 50,
    },
    descriptionInputField: {
      height: 250,
    },
    // Image
    selectImageContainer: {
      // Display
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      padding: 5,
    },
    selectImageButton: {
      // Display
      width: 150,
      height: 40,
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      // Background and border
      backgroundColor: colourScheme.buttonSecondary,
      borderRadius: 10,
    },
    selectImageText: {
      // Display
      justifyContent: 'center',
      // Typography
      color: colourScheme.buttonSecondaryFont,
    },
    // Submit
    submitButton: {
      // Display
      alignItems: 'center',
      justifyContent: 'center',
      width: '75%',
      height: 40,
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
