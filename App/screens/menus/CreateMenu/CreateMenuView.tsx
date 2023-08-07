import React, {SetStateAction} from 'react';

import {View, StyleSheet} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {PressablePrimary, TextInputStyled} from '../../../components/styled';
import {AlertDanger} from '../../../components/styled/Alerts';
import {Header3} from '../../../components/styled/TextStyled';
import {MenuScreenTemplate} from '../../../components/Templates';
import {CreateMenuErrors} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';

type CreateMenuViewProps = {
  name: string;
  onNameChange: React.Dispatch<SetStateAction<string>>;
  description: string;
  onDescriptionChange: React.Dispatch<SetStateAction<string>>;
  submitForm: () => void;
  isLoading: boolean;
  errors: CreateMenuErrors | null;
};

export default function CreateMenuView({
  name,
  onNameChange,
  description,
  onDescriptionChange,
  submitForm,
  isLoading,
  errors,
}: CreateMenuViewProps) {
  const canSubmit = name.length > 5;

  const errorText = errors?.name ? errors.name[0] : '';

  return (
    <MenuScreenTemplate>
      <View style={styles.container}>
        <Header3>Create new menu</Header3>
        {errors ? (
          <AlertDanger errorText={errorText} style={styles.errors} />
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
              style={[styles.textInputField, styles.nameInputField]}
              testID={'name-input'}
            />
            <TextInputStyled
              value={description}
              placeholder={'description'}
              onChangeText={onDescriptionChange}
              multiline={true}
              style={[styles.textInputField, styles.descriptionInputField]}
              testID={'description-input'}
            />
            <PressablePrimary
              onPress={submitForm}
              disabled={!canSubmit}
              style={styles.submitButton}
              text={'Submit'}
              testID={'submit-button'}
            />
          </>
        )}
      </View>
    </MenuScreenTemplate>
  );
}

const styles = StyleSheet.create({
  container: {
    // Display
    alignItems: 'center',
    justifyContent: 'space-between',
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
