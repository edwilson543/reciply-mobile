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
import {useMyRecipeList} from '../../services/restAPI/requests/recipes';

jest.mock('../../services/restAPI/requests/recipes');

test('can switch from recipes to menus tab', async () => {
  const mockRecipeList = {
    data: [],
    friendlyErrors: null,
    isLoading: false as false,
  };
  jest.mocked(useMyRecipeList).mockReturnValue(mockRecipeList);

  await waitFor(() =>
    render(
      <NavigationContainer>
        <AuthenticatedNavigator />
      </NavigationContainer>,
    ),
  );

  // The recipe list tab should initially be open.
  await act(() => {
    expect(screen.getByTestId('recipes-header')).toBeOnTheScreen();
  });
  expect(jest.mocked(useMyRecipeList).mock.calls).toHaveLength(1);

  // Open the menus tab.
  const menusTabButton = screen.getByRole('button', {name: 'Menus'});
  await act(() => fireEvent.press(menusTabButton));

  await act(() => {
    expect(screen.getByTestId('menus-header')).toBeOnTheScreen();
  });
});
