import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';

import {CreateMenu} from '../../../../../screens/menus';
import {createMenu} from '../../../../../services/restAPI/requests/menus';

jest.mock('../../../../../services/restAPI/requests/menus');

test('cannot submit menu if name given is too short', async () => {
  render(<CreateMenu navigation={jest.fn() as any} route={jest.fn() as any} />);

  // Input a name that is too short
  const nameInput = screen.getByTestId('name-input');
  fireEvent.changeText(nameInput, 'sa');

  // Confirm new menu
  const submitButton = screen.getByTestId('submit-button');
  expect(submitButton).toBeDisabled();

  expect(jest.mocked(createMenu)).not.toHaveBeenCalled();
});
