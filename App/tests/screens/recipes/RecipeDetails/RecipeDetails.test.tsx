import React from 'react';

import {render, screen} from '@testing-library/react-native';

import {RecipeDetails} from '../../../../screens/recipes';
import {useRecipeDetails} from '../../../../services/restAPI/requests/recipes';

jest.mock('../../../../services/restAPI/requests/recipes');

test('renders recipe details', async () => {
  // Mock out the recipe details API call
  const mockRecipeDetails = {
    data: {
      id: 1,
      name: 'sausages',
      description: 'some description',
      images: [],
      created_at: '',
      updated_at: '',
    },
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false as false,
  };
  jest.mocked(useRecipeDetails).mockReturnValueOnce(mockRecipeDetails);

  // Provide the necessary route parameters
  const route = {params: {recipeId: 1}};

  render(<RecipeDetails navigation={jest.fn() as any} route={route as any} />);

  // Sausage recipe should be shown
  expect(screen.getByText('sausages')).toBeVisible();
  expect(screen.getByText('some description')).toBeVisible();
});
