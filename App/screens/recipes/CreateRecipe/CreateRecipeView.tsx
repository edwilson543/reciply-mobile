import React, {SetStateAction} from 'react';

import {View, StyleSheet} from 'react-native';

import UploadImagePreview from '../../../components/images/local/UploadImagePreview';
import {
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
  TextStyled,
} from '../../../components/styled';
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
        <PressableSecondary
          text={'+ Add photo'}
          onPress={pickHeroImage}
          style={styleSheet.selectImageButton}
        />
        <UploadImagePreview imageSource={heroImageSource} />
      </View>
      <PressablePrimary
        onPress={submitForm}
        disabled={!canSubmit}
        style={styleSheet.submitButton}
        text={'Submit'}
        testID={'submit-button'}
      />
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
    // Submit
    submitButton: {
      // Display
      width: '75%',
      height: 40,
      marginTop: 5,
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
