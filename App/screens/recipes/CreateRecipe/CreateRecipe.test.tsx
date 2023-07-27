import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';

import {CreateRecipe} from './CreateRecipe';
import {postData} from '../../../services/restAPI/client';

jest.mock('../../../services/restAPI/client');
jest.mock('react-native-image-picker', () => '');

test('cannot submit recipe if name given is too short', async () => {
  jest.mocked(postData).mockResolvedValueOnce(new Response('{}'));

  render(
    <CreateRecipe navigation={jest.fn() as any} route={jest.fn() as any} />,
  );

  // Input a name that is too short
  const nameInput = screen.getByTestId('name-input');
  fireEvent.changeText(nameInput, 'sa');

  // Confirm new recipe
  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeDisabled();
});
