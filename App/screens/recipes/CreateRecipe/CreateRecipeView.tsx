import React, {SetStateAction} from 'react';

import {View, StyleSheet} from 'react-native';

import RecipesTopBackground from '../../../components/images/local/RecipesTopBackground';
import UploadImagePreview from '../../../components/images/local/UploadImagePreview';
import {
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
  TextStyled,
} from '../../../components/styled';
import {AlertDanger} from '../../../components/styled/Alerts';
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

  const errorText = errors?.name ? errors.name[0] : '';

  return (
    <>
      <RecipesTopBackground />
      <View style={styleSheet.container}>
        <TextStyled style={styleSheet.header}>Create new recipe</TextStyled>
        {errors ? (
          <AlertDanger errorText={errorText} style={styleSheet.errors} />
        ) : (
          <></>
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
    </>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {
      // Display
      // flex: 1,
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
    errors: {
      width: '75%',
    },
  });
