import 'react-native';
import React from 'react';

import {act, render, screen, waitFor} from '@testing-library/react-native';

import App from './App';
import {useMyRecipeList} from './services/restAPI/requests/recipes';
import * as storage from './services/storage';

// The initial route after login fires a request, so mock this out
jest.mock('./services/restAPI/requests/recipes');

test('initially renders login screen when no auth token in storage', async () => {
  storage.deleteValueForKey(storage.StorageKey.AuthToken);

  await waitFor(() => render(<App />));

  expect(screen.getByText('login')).toBeOnTheScreen();
});

test('initially renders recipe list when auth token available', async () => {
  storage.setValueForKey(storage.StorageKey.AuthToken, 'dummy-token');
  const mockRecipeList = {
    data: [],
    friendlyErrors: null,
    isLoading: false as false,
  };
  jest.mocked(useMyRecipeList).mockReturnValue(mockRecipeList);

  await waitFor(() => render(<App />));

  await act(() => {
    expect(screen.getByTestId('recipes-header')).toBeOnTheScreen();
  });
});
