import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {render, screen, within} from '@testing-library/react-native';

import {MenuDetails} from './MenuDetails';
import {useMenuDetails} from '../../../services/restAPI/requests/menus';
import * as fixtures from '../../../testing/fixtures';

jest.mock('../../../services/restAPI/requests/menus');

test('renders menu details', async () => {
  // Mock out the menu details API call
  const mockMenuDetails = {
    data: fixtures.menuDetailsFixture,
    setData: jest.fn(),
    friendlyErrors: null,
    isLoading: false as false,
  };
  const recipe = fixtures.menuDetailsFixture.items[0].recipe;
  jest.mocked(useMenuDetails).mockReturnValue(mockMenuDetails);

  // Provide the necessary route parameters
  const route = {params: {menuId: 1}};

  render(
    <NavigationContainer>
      <MenuDetails navigation={jest.fn() as any} route={route as any} />,
    </NavigationContainer>,
  );

  expect(jest.mocked(useMenuDetails).mock.calls).toHaveLength(1);

  expect(screen.getByText('my menu')).toBeVisible();
  // Recipe should be shown for monday lunch
  const menuItemContainer = screen.getByTestId('menu-item-1');
  expect(within(menuItemContainer).getByText('monday • lunch')).toBeVisible();
  expect(within(menuItemContainer).getByText(recipe.name)).toBeVisible();
  expect(within(menuItemContainer).getByText(recipe.description)).toBeVisible();
});
