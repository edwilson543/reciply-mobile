import React, {SetStateAction} from 'react';

import {View, StyleSheet} from 'react-native';

import {UploadImagePreview} from '../../../components/images/local';
import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  bootstrap,
  PressablePrimary,
  PressableSecondary,
  TextInputStyled,
} from '../../../components/styled';
import {AlertDanger} from '../../../components/styled/Alerts';
import {Header3} from '../../../components/styled/TextStyled';
import {RecipeScreenTemplate} from '../../../components/Templates';
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
      <Header3 style={[bootstrap.textCenter, bootstrap.my5]}>
        Create new recipe
      </Header3>
      {errors ? (
        <AlertDanger errorText={errorText} style={[bootstrap.w100]} />
      ) : (
        <></>
      )}
      <View style={styleSheet.container}>
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <TextInputStyled
              value={name}
              placeholder={'name'}
              onChangeText={onNameChange}
              style={[styleSheet.textInputField]}
              testID={'name-input'}
            />
            <TextInputStyled
              value={description}
              placeholder={'description'}
              onChangeText={onDescriptionChange}
              multiline={true}
              style={[styleSheet.textInputField, bootstrap.h50]}
              testID={'description-input'}
            />
            <View style={styleSheet.selectImageContainer}>
              <PressableSecondary
                text={'+ add photo'}
                onPress={pickHeroImage}
                style={styleSheet.selectImageButton}
              />
              <UploadImagePreview imageSource={heroImageSource} />
            </View>
            <PressablePrimary
              onPress={submitForm}
              disabled={!canSubmit}
              style={[bootstrap.w75]}
              text={'submit'}
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
      padding: 5,
    },
    // Inputs
    textInputField: {
      // Display
      width: '100%',
      // Typography
      fontSize: FontSize.TextLarge,
    },
    // Image
    selectImageContainer: {
      // Display
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-start',
      width: '100%',
    },
    selectImageButton: {
      // Display
      width: 150,
      justifyContent: 'center',
      alignItems: 'center',
      marginEnd: 10,
      // Background and border
      backgroundColor: colourScheme.buttonSecondary,
    },
  });
