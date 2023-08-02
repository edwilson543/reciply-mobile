import React from 'react';

import {render, screen, within} from '@testing-library/react-native';

import {MenuDetails} from './MenuDetails';
import {Day, MealTime} from '../../../services/restAPI/constants';
import {useMenuDetails} from '../../../services/restAPI/requests/menus';

jest.mock('../../../services/restAPI/requests/menus');

test('renders menu details', async () => {
  // Mock out the menu details API call
  const recipe = {
    id: 1,
    name: 'some recipe',
    description: 'some description',
    hero_image_source: '',
  };
  const menuItem = {
    id: 1,
    day: Day.Monday,
    meal_time: MealTime.Lunch,
    recipe: recipe,
  };
  const mockMenuDetails = {
    data: {
      id: 1,
      name: 'my menu',
      description: '',
      number_of_items: 1,
      items: [menuItem],
    },
    friendlyErrors: null,
    isLoading: false as false,
  };
  jest.mocked(useMenuDetails).mockReturnValueOnce(mockMenuDetails);

  // Provide the necessary route parameters
  const route = {params: {menuId: 1}};

  render(<MenuDetails navigation={jest.fn() as any} route={route as any} />);

  expect(screen.getByText('my menu')).toBeVisible();
  // Recipe should be shown for monday lunch
  const menuItemContainer = screen.getByTestId('menu-item-1');
  expect(within(menuItemContainer).getByText('monday • lunch')).toBeVisible();
  expect(within(menuItemContainer).getByText('some recipe')).toBeVisible();
  expect(within(menuItemContainer).getByText('some description')).toBeVisible();
});
