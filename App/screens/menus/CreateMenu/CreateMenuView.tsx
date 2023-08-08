import React, {SetStateAction} from 'react';

import {faUtensils} from '@fortawesome/free-solid-svg-icons';
import {View, StyleSheet, Switch} from 'react-native';

import LoadingSpinner from '../../../components/LoadingSpinner';
import {
  bootstrap,
  PressablePrimary,
  TextInputStyled,
  TextStyled,
} from '../../../components/styled';
import {AlertDanger} from '../../../components/styled/Alerts';
import {Header3} from '../../../components/styled/TextStyled';
import {MenuScreenTemplate} from '../../../components/Templates';
import {
  CreateMenuErrors,
  CreateMenuRequestPayload,
} from '../../../services/restAPI/payloads';
import {FontSize} from '../../../styles/constants';

type CreateMenuViewProps = {
  newMenu: CreateMenuRequestPayload;
  onNewMenuChange: React.Dispatch<SetStateAction<CreateMenuRequestPayload>>;
  submitForm: () => void;
  isLoading: boolean;
  errors: CreateMenuErrors | null;
};

export default function CreateMenuView({
  newMenu,
  onNewMenuChange,
  submitForm,
  isLoading,
  errors,
}: CreateMenuViewProps) {
  const canSubmit = newMenu.name.length > 5;

  const errorText = errors?.name ? errors.name[0] : '';

  return (
    <MenuScreenTemplate>
      <View style={styles.container}>
        <Header3>Create new menu</Header3>
        {errors ? (
          <AlertDanger errorText={errorText} style={[bootstrap.w100]} />
        ) : (
          <></>
        )}
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <TextInputStyled
              value={newMenu.name}
              placeholder={'name'}
              onChangeText={value => onNewMenuChange({...newMenu, name: value})}
              style={[styles.textInputField]}
              testID={'name-input'}
            />
            <TextInputStyled
              value={newMenu.description}
              placeholder={'description'}
              onChangeText={value =>
                onNewMenuChange({...newMenu, description: value})
              }
              multiline={true}
              style={[styles.textInputField, bootstrap.h50]}
              testID={'description-input'}
            />
            <View style={styles.switchContainer}>
              <TextStyled>Add suggestions</TextStyled>
              <Switch
                value={newMenu.add_suggestions}
                onValueChange={value =>
                  onNewMenuChange({...newMenu, add_suggestions: value})
                }
              />
            </View>
            <PressablePrimary
              onPress={submitForm}
              disabled={!canSubmit}
              style={styles.submitButton}
              text={'choose meals'}
              faIcon={faUtensils}
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
    padding: 10,
  },
  // Inputs
  textInputField: {
    // Display
    width: '100%',
    marginVertical: 5,
    // Typography
    fontSize: FontSize.TextLarge,
  },
  switchContainer: {
    // Display
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  // Submit
  submitButton: {
    // Display
    width: '50%',
    marginTop: 5,
  },
});
