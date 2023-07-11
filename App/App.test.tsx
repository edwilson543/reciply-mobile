import 'react-native';
import React from 'react';

import {act, render, screen} from '@testing-library/react-native';

import App from './App';
import * as storage from './services/storage';

test('initially renders login screen when no auth token in storage', () => {
  storage.deleteValueForKey(storage.StorageKey.AuthToken);

  render(<App />);

  expect(screen.getByText('Username')).toBeOnTheScreen();
});

test('initially renders recipe list when auth token available', async () => {
  storage.setValueForKey(storage.StorageKey.AuthToken, 'dummy-token');

  render(<App />);

  await act(() => {
    expect(screen.getByText('My recipes')).toBeOnTheScreen();
  });
});
