/** Tests for the recipe tab requiring navigation between screens. */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {RecipesTab} from './RecipesTab';
import {
  createRecipe,
  useMyRecipeList,
  useRecipeDetails,
} from '../../../services/restAPI/requests/recipes';
import {ScreenName} from '../../constants';

jest.mock('react-native-image-picker', () => '');
jest.mock('../../../services/restAPI/requests/recipes');

test('clicking on recipe in list navigates to detail screen', async () => {
  // Mock out the recipe list API call
  const mockRecipeList = {
    data: [{id: 1, name: 'sausages', description: ''}],
    friendlyErrors: null,
    isLoading: false,
  };
  // @ts-ignore - it's not picking up the correct overload
  jest.mocked(useMyRecipeList).mockReturnValueOnce(mockRecipeList);

  // Mock out the recipe details API call
  const mockRecipeDetails = {
    data: {id: 1, name: 'sausages', description: '', images: []},
    friendlyErrors: null,
    isLoading: false,
  };
  // @ts-ignore - it's not picking up the correct overload
  jest.mocked(useRecipeDetails).mockReturnValueOnce(mockRecipeDetails);

  render(
    <NavigationContainer>
      <RecipesTab
        navigatorProps={{initialRouteName: ScreenName.MyRecipeList}}
      />
    </NavigationContainer>,
  );

  // Sausage recipe should be shown
  const recipeRow = screen.getByTestId('recipe-1');
  expect(recipeRow).toBeVisible();

  // Viewing the details for the recipe row should navigate to the detail view
  await act(() => fireEvent.press(recipeRow));
  expect(screen.queryByText('my recipes')).not.toBeOnTheScreen();
});

test('creating valid new recipe navigates to list screen', async () => {
  // Mock out the API calls
  jest.mocked(createRecipe).mockResolvedValueOnce(new Response('{}'));
  const mockRecipeList = {data: [], friendlyErrors: null, isLoading: false};
  // @ts-ignore - it's not picking up the correct overload
  jest.mocked(useMyRecipeList).mockReturnValue(mockRecipeList);

  render(
    <NavigationContainer>
      <RecipesTab
        navigatorProps={{initialRouteName: ScreenName.CreateRecipe}}
      />
    </NavigationContainer>,
  );

  // Input a name and description
  const nameInput = screen.getByTestId('name-input');
  const descriptionInput = screen.getByTestId('description-input');
  fireEvent.changeText(nameInput, 'my new recipe');
  fireEvent.changeText(descriptionInput, 'some description');

  // Confirm new recipe
  const submitButton = screen.getByTestId('submit-button');
  await act(() => fireEvent.press(submitButton));

  // API should have been called with details for the new recipe
  expect(jest.mocked(createRecipe).mock.calls).toHaveLength(1);
  const mockCall = jest.mocked(createRecipe).mock.calls[0];
  expect(mockCall[0]).toBe('my new recipe');
  expect(mockCall[1]).toBe('some description');
  expect(mockCall[2]).toBe(null); // No image selected

  // Should have navigated to the recipe list screen
  expect(screen.getByText('My recipes')).toBeOnTheScreen();
});
