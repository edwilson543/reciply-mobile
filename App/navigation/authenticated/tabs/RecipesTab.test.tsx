import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {RecipesTab} from './RecipesTab';
import {postData, useGetData} from '../../../services/restAPI/request';
import {ScreenName} from '../../constants';

jest.mock('../../../services/restAPI/request');

test('can create valid new recipe', async () => {
  // Mock out the API calls
  jest.mocked(postData).mockResolvedValueOnce(new Response('{}'));
  const mockRecipeList = {data: [], friendlyErrors: null, isLoading: false};
  // @ts-ignore - it's not picking up the correct overload
  jest.mocked(useGetData).mockReturnValue(mockRecipeList);

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
  fireEvent.changeText(descriptionInput, 'description');

  // Confirm new recipe
  const submitButton = screen.getByTestId('submit-button');
  await act(() => fireEvent.press(submitButton));

  // API should have been called with details for the new recipe
  expect(jest.mocked(postData).mock.calls).toHaveLength(1);
  const mockCall = jest.mocked(postData).mock.calls[0];
  expect(mockCall[0]).toBe('recipes/recipe/create/');
  const submittedData = mockCall[1] as FormData;
  // @ts-ignore - `.get()` does exist on FormData
  expect(submittedData.get('name')).toBe('my new recipe');
  // @ts-ignore - `.get()` does exist on FormData
  expect(submittedData.get('description')).toBe('description');

  // Should have navigated to the ceipe list screen
  expect(screen.getByText('My recipes')).toBeOnTheScreen();
});
