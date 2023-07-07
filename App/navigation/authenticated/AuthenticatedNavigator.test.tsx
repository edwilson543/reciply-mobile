import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, screen, render} from '@testing-library/react-native';

import AuthenticatedNavigator from './AuthenticatedNavigator';

test('View recipe details', () => {
  render(
    <NavigationContainer>
      <AuthenticatedNavigator />
    </NavigationContainer>,
  );

  // The recipe list tab should initially be open.
  const recipesHeader = screen.getByText('My recipes');
  expect(recipesHeader).toBeOnTheScreen();

  // Open the menus tab.
  const menusTabButton = screen.getByRole('button', {name: 'Menus'});
  fireEvent.press(menusTabButton);

  const menusHeader = screen.getByTestId('menus-header');
  expect(menusHeader).toBeOnTheScreen();
});
