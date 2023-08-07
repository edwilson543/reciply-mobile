import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';

import {CreateRecipe} from '../../../../../screens/recipes';
import {createRecipe} from '../../../../../services/restAPI/requests/recipes';

jest.mock('../../../../../services/restAPI/requests/recipes');

test('cannot submit recipe if name given is too short', async () => {
  render(
    <CreateRecipe navigation={jest.fn() as any} route={jest.fn() as any} />,
  );

  // Input a name that is too short
  const nameInput = screen.getByTestId('name-input');
  fireEvent.changeText(nameInput, 'sa');

  // Confirm new recipe
  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeDisabled();

  expect(jest.mocked(createRecipe)).not.toHaveBeenCalled();
});
