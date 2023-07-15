import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {
  act,
  fireEvent,
  screen,
  render,
  waitFor,
} from '@testing-library/react-native';

import AuthenticatedNavigator from './AuthenticatedNavigator';
import * as requests from '../../services/restAPI/request';

jest.spyOn(requests, 'useGetData');

test('can switch from recipes to menus tab', async () => {
  await waitFor(() =>
    render(
      <NavigationContainer>
        <AuthenticatedNavigator />
      </NavigationContainer>,
    ),
  );

  // The recipe list tab should initially be open.
  await act(() => {
    expect(screen.getByText('My recipes')).toBeOnTheScreen();
  });

  // Open the menus tab.
  const menusTabButton = screen.getByRole('button', {name: 'Menus'});
  await act(() => fireEvent.press(menusTabButton));

  await act(() => {
    expect(screen.getByTestId('menus-header')).toBeOnTheScreen();
  });
});
