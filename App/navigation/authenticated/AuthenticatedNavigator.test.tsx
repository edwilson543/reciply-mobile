import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, screen, render} from '@testing-library/react-native';

import AuthenticatedNavigator from './AuthenticatedNavigator';

test('can switch from recipes to menus tab', async () => {
  jest.mock('../../services/restAPI/recipeRequests/myRecipeList');

  render(
    <NavigationContainer>
      <AuthenticatedNavigator />
    </NavigationContainer>,
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
