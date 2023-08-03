import React, {SetStateAction} from 'react';

import {View, StyleSheet} from 'react-native';

import {UploadImagePreview} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
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
import RecipeScreenTemplate from '../RecipeScreenTemplate';

type CreateRecipeViewProps = {
  name: string;
  onNameChange: React.Dispatch<SetStateAction<string>>;
  description: string;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
  heroImageSource: string;
  pickHeroImage: () => void;
  submitForm: () => void;
  isLoading: boolean;
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
  isLoading,
  errors,
}: CreateRecipeViewProps) {
  const colourScheme = useColourScheme();
  const styleSheet = styles(colourScheme);

  const canSubmit = name.length > 5;

  const errorText = errors?.name ? errors.name[0] : '';

  return (
    <RecipeScreenTemplate>
      <View style={styleSheet.container}>
        <TextStyled style={styleSheet.header}>Create new recipe</TextStyled>
        {errors ? (
          <AlertDanger errorText={errorText} style={styleSheet.errors} />
        ) : (
          <></>
        )}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <TextInputStyled
              value={name}
              placeholder={'name'}
              onChangeText={onNameChange}
              style={[styleSheet.textInputField, styleSheet.nameInputField]}
              testID={'name-input'}
            />
            <TextInputStyled
              value={description}
              placeholder={'description'}
              onChangeText={onDescriptionChange}
              multiline={true}
              style={[
                styleSheet.textInputField,
                styleSheet.descriptionInputField,
              ]}
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
          </>
        )}
      </View>
    </RecipeScreenTemplate>
  );
}

const styles = (colourScheme: ColourScheme) =>
  StyleSheet.create({
    container: {
      // Display
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
      marginVertical: 5,
      // Typography
      fontSize: FontSize.TextLarge,
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
