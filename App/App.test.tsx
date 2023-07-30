import 'react-native';
import React from 'react';

import {act, render, screen, waitFor} from '@testing-library/react-native';

import App from './App';
import {useMyRecipeList} from './services/restAPI/requests/recipes';
import * as storage from './services/storage';

jest.mock('react-native-image-picker', () => '');
jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));

// The initial route after login fires a request, so mock this out
jest.mock('./services/restAPI/requests/recipes');
afterEach(() => storage.deleteValueForKey(storage.StorageKey.AuthToken));

test('initially renders login screen when no auth token in storage', () => {
  storage.deleteValueForKey(storage.StorageKey.AuthToken);

  render(<App />);

  expect(screen.getByText('login')).toBeOnTheScreen();
});

test('initially renders recipe list when auth token available', async () => {
  storage.setValueForKey(storage.StorageKey.AuthToken, 'dummy-token');
  const mockRecipeList = {data: [], friendlyErrors: null, isLoading: false};
  // @ts-ignore - it's not picking up the correct overload
  jest.mocked(useMyRecipeList).mockReturnValue(mockRecipeList);

  await waitFor(() => render(<App />));

  await act(() => {
    expect(screen.getByTestId('recipes-header')).toBeOnTheScreen();
  });
});
