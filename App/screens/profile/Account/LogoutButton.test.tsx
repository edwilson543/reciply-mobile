import React from 'react';

import {act, fireEvent, render, screen} from '@testing-library/react-native';
import {Alert} from 'react-native';

import LogoutButton from './LogoutButton';
import * as auth from '../../../context/auth';
import {logout} from '../../../services/restAPI/authRequests/logout';
import * as storage from '../../../services/storage';
import {StorageKey} from '../../../services/storage';

// Mock out the call to the logout endpoint
jest.mock('../../../services/restAPI/authRequests/logout');
afterEach(() => jest.mocked(logout).mockClear());
afterEach(() => storage.deleteValueForKey(storage.StorageKey.AuthToken));

test('user can logout', async () => {
  // Mock out launching the alert (since it cannot be interacted with directly)
  const spyAlert = jest.spyOn(Alert, 'alert');

  // Simulate the logout endpoint accepting the logout
  const mockLogoutResponse = Promise.resolve(new Response());
  jest.mocked(logout).mockResolvedValueOnce(mockLogoutResponse);

  // Put a token into storage
  storage.setValueForKey(StorageKey.AuthToken, 'dummy-token');

  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <LogoutButton />
    </auth.AuthDispatchContext.Provider>,
  );

  // Logout button should be shown
  const logoutButton = screen.getByText('Logout');
  expect(logoutButton).toBeOnTheScreen();

  // Click the logout button & use the alert to confirm
  fireEvent.press(logoutButton);
  // @ts-ignore (we know the first call to alert passes a confirm button at the specified index)
  const confirmLogoutCallback = spyAlert.mock.calls[0][2][1]
    .onPress as CallableFunction;
  await act(() => confirmLogoutCallback());

  // Logout endpoint should have been requested with the relevant credentials
  expect(jest.mocked(logout).mock.calls).toHaveLength(1);

  // The logout action should have been dispatched
  expect(mockAuthDispatch.mock.calls).toHaveLength(1);
  const mockLoginDispatch = mockAuthDispatch.mock.calls[0];
  expect(mockLoginDispatch[0]).toStrictEqual({
    type: auth.AuthAction.Logout,
  });

  // Expect the auth token to have been deleted from storage
  const storedToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  expect(storedToken).toBe(undefined);
});
