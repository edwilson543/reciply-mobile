import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {within, screen, render, waitFor} from '@testing-library/react-native';

import {MyMenuList} from '../../../../screens/menus';
import {MenuListPayload} from '../../../../services/restAPI/payloads';
import {useMyMenuList} from '../../../../services/restAPI/requests/menus';

jest.mock('../../../../services/restAPI/requests/menus');

const mockMenuList = {
  data: [
    {
      id: 1,
      name: 'menu a',
      description: '',
      number_of_items: 2,
    } as MenuListPayload,
    {
      id: 2,
      name: 'menu b',
      description: '',
      number_of_items: 3,
    } as MenuListPayload,
  ],
  setData: jest.fn(),
  friendlyErrors: null,
  isLoading: false as false,
};
test('renders recipe list', async () => {
  jest.mocked(useMyMenuList).mockReturnValue(mockMenuList);

  await waitFor(() =>
    render(
      <NavigationContainer>
        <MyMenuList navigation={jest.fn() as any} route={jest.fn() as any} />
      </NavigationContainer>,
    ),
  );

  expect(jest.mocked(useMyMenuList).mock.calls).toHaveLength(1);

  // Both menus should be shown
  const menuA = screen.getByTestId('menu-1');
  expect(within(menuA).getByText('menu a')).toBeVisible();
  expect(within(menuA).getByText('2 meals')).toBeVisible();

  const menuB = screen.getByTestId('menu-2');
  expect(within(menuB).getByText('menu b')).toBeVisible();
  expect(within(menuB).getByText('3 meals')).toBeVisible();
});
