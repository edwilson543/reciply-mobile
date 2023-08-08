/** Tests for the menu tab requiring navigation between screens. */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {MenusTab} from '../../../../../navigation/authenticated/tabs';
import {ScreenName} from '../../../../../navigation/constants';
import {
  createMenu,
  useMyMenuList,
  useMenuDetails,
} from '../../../../../services/restAPI/requests/menus';
import * as fixtures from '../../../../fixtures';

jest.mock('../../../../../services/restAPI/requests/menus');

test('clicking on menu in list navigates to detail screen', async () => {
  // Mock out the menu list API call
  const mockMenuList = {
    data: [fixtures.menuListFixture],
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false,
  };
  jest.mocked(useMyMenuList).mockReturnValueOnce(mockMenuList);

  // Mock out the menu details API call
  const mockMenuDetails = {
    data: fixtures.menuDetailsFixture,
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false,
  };
  jest.mocked(useMenuDetails).mockReturnValueOnce(mockMenuDetails);

  render(
    <NavigationContainer>
      <MenusTab navigatorProps={{initialRouteName: ScreenName.MyMenuList}} />
    </NavigationContainer>,
  );

  // Sausage menu should be shown
  const menuRow = screen.getByTestId(`menu-${fixtures.menuListFixture.id}`);
  expect(menuRow).toBeVisible();
  expect(jest.mocked(useMyMenuList).mock.calls).toHaveLength(1);

  // Viewing the details for the menu row should navigate to the detail view
  await act(() => fireEvent.press(menuRow));
  expect(
    screen.getByTestId(`menu-${fixtures.menuListFixture.id}-details-header`),
  ).toBeOnTheScreen();
  expect(jest.mocked(useMenuDetails).mock.calls).toHaveLength(1);
});

test('creating valid new menu navigates to add items screen', async () => {
  // Mock out the API calls
  jest.mocked(createMenu).mockResolvedValueOnce(
    Promise.resolve({
      data: fixtures.menuDetailsFixture,
      errors: null,
    }),
  );
  const mockMenuList = {
    data: [fixtures.menuListFixture],
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false,
  };
  jest.mocked(useMyMenuList).mockReturnValueOnce(mockMenuList);

  render(
    <NavigationContainer>
      <MenusTab navigatorProps={{initialRouteName: ScreenName.CreateMenu}} />
    </NavigationContainer>,
  );

  // Input a name and description
  const nameInput = screen.getByTestId('name-input');
  const descriptionInput = screen.getByTestId('description-input');
  fireEvent.changeText(nameInput, 'my new menu');
  fireEvent.changeText(descriptionInput, 'some description');

  // Confirm new menu
  const submitButton = screen.getByTestId('submit-button');
  await act(() => fireEvent.press(submitButton));

  // API should have been called with details for the new menu
  expect(jest.mocked(createMenu).mock.calls).toHaveLength(1);
  const mockCall = jest.mocked(createMenu).mock.calls[0];
  expect(mockCall[0]).toStrictEqual({
    name: 'my new menu',
    description: 'some description',
    add_suggestions: true,
  });

  // Should have navigated to the menu list screen
  expect(screen.getByTestId('manage-menu-items-header')).toBeOnTheScreen();
});
