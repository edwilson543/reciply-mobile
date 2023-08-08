import React from 'react';

import {fireEvent, render, screen, within} from '@testing-library/react-native';

import {ManageMenuItems} from '../../../../../screens/menus';
import {useMenuDetails} from '../../../../../services/restAPI/requests/menus';
import {useSuggestedRecipeList} from '../../../../../services/restAPI/requests/suggestions';
import * as fixtures from '../../../../fixtures';

jest.mock('../../../../../services/restAPI/requests/menus');
jest.mock('../../../../../services/restAPI/requests/recipes');
jest.mock('../../../../../services/restAPI/requests/suggestions');

test('renders menu details', async () => {
  // Mock out the menu details API call
  const mockMenuDetails = {
    data: fixtures.menuDetailsFixture,
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false,
  };
  jest.mocked(useMenuDetails).mockReturnValueOnce(mockMenuDetails);

  // Mock out the suggested recipes
  const mockSuggestedRecipes = {
    data: [fixtures.recipeListFixture],
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false,
  };
  jest.mocked(useSuggestedRecipeList).mockReturnValue(mockSuggestedRecipes);

  // Provide the menu in the route parameters
  const route = {params: {menu: fixtures.menuDetailsFixture}};

  render(
    <ManageMenuItems navigation={jest.fn() as any} route={route as any} />,
  );

  expect(screen.getByTestId('manage-menu-items-header')).toBeVisible();

  // Current recipe should be shown (since the fixture includes a recipe for Monday)
  const currentRecipe = screen.getByTestId('current-recipe');
  expect(within(currentRecipe).getByTestId('recipe-1')).toBeVisible();

  // Change the active day to wednesday, which has no current recipe
  const wednesday = screen.getByTestId('day-3');
  fireEvent.press(wednesday);

  expect(currentRecipe).toHaveTextContent('-');
});
