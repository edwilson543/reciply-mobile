import React from 'react';

import {fireEvent, render, screen} from '@testing-library/react-native';

import {RecipeDetails} from '../../../../../screens/recipes';
import {useRecipeDetails} from '../../../../../services/restAPI/requests/recipes';
import * as fixtures from '../../../../fixtures';

jest.mock('../../../../../services/restAPI/requests/recipes');

test('renders recipe details', async () => {
  // Mock out the recipe details API call
  const mockRecipeDetails = {
    data: fixtures.recipeDetailsFixture,
    ...fixtures.useGetDataJunk,
  };
  jest.mocked(useRecipeDetails).mockReturnValueOnce(mockRecipeDetails);

  // Provide the necessary route parameters
  const route = {params: {recipeId: 1}};

  render(<RecipeDetails navigation={jest.fn() as any} route={route as any} />);

  // Sausage recipe should be shown
  expect(screen.getByText('sausages')).toBeVisible();
  expect(screen.getByText('some description')).toBeVisible();

  // Initially the ingredients tab should be shown
  expect(screen.getByTestId('ingredients-tab-content')).toBeVisible();
  expect(screen.queryByTestId('nutrition-tab-content')).toBeNull();

  // Change to nutrition tab
  fireEvent.press(screen.getByText('Nutrition'));

  expect(screen.getByTestId('nutrition-tab-content')).toBeVisible();
  expect(screen.queryByTestId('ingredients-tab-content')).toBeNull();
});
