import React from 'react';

import {within, screen, render, waitFor} from '@testing-library/react-native';

import {MyRecipeList} from './MyRecipeList';
import {RecipeListPayload} from '../../../services/restAPI/payloads';
import {useMyRecipeList} from '../../../services/restAPI/requests/recipes';

jest.mock('../../../services/restAPI/requests/recipes');

test('renders recipe list', async () => {
  const mockRecipeList = {
    data: [
      {id: 1, name: 'sausages', description: ''} as RecipeListPayload,
      {id: 2, name: 'meatballs', description: ''} as RecipeListPayload,
    ],
    friendlyErrors: null,
    isLoading: false as false,
  };
  jest.mocked(useMyRecipeList).mockReturnValue(mockRecipeList);

  await waitFor(() =>
    render(
      <MyRecipeList navigation={jest.fn() as any} route={jest.fn() as any} />,
    ),
  );

  expect(jest.mocked(useMyRecipeList).mock.calls).toHaveLength(1);

  // Both recipes should be shown
  expect(screen.getByTestId('recipes-header')).toBeOnTheScreen();
  const sausageRecipe = screen.getByTestId('recipe-1');
  expect(within(sausageRecipe).getByText('sausages')).toBeVisible();
  const meatballRecipe = screen.getByTestId('recipe-2');
  expect(within(meatballRecipe).getByText('meatballs')).toBeVisible();
});
