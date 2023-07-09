import React from 'react';
import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Login} from './Login';
import {login} from '../../../services/restAPI/authRequests';
import * as auth from '../../../context/auth';
import * as storage from '../../../services/storage';

// Mock out the call to the auth API
jest.mock('../../../services/restAPI/authRequests/login');

test('valid username and password logs user in', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Login />
    </auth.AuthDispatchContext.Provider>,
  );

  // Make the login API call return a token for any credentials
  const mockLoginResponse = Promise.resolve({token: 'dummy-token'});
  jest.mocked(login).mockResolvedValue(mockLoginResponse);

  // Login form should be shown
  expect(screen.getByText('Username')).toBeOnTheScreen();
  expect(screen.getByText('Password')).toBeOnTheScreen();

  // Input a username and password
  const usernameInput = screen.getByTestId('username-input');
  const passwordInput = screen.getByTestId('password-input');
  fireEvent.changeText(usernameInput, 'ed123');
  fireEvent.changeText(passwordInput, 'password123');

  // Confirm login
  const loginButton = screen.getByTestId('login-button');
  await act(() => fireEvent.press(loginButton));

  // Login API should have been called with the relevant credentials
  expect(jest.mocked(login).mock.calls).toHaveLength(1);
  const mockLoginCall = jest.mocked(login).mock.calls[0];
  expect(mockLoginCall[0]).toBe('ed123');
  expect(mockLoginCall[1]).toBe('password123');

  // The login action should have been dispatched
  expect(mockAuthDispatch.mock.calls).toHaveLength(1);
  const mockLoginDispatch = mockAuthDispatch.mock.calls[0];
  expect(mockLoginDispatch[0]).toStrictEqual({
    type: auth.AuthAction.Login,
    token: 'dummy-token',
  });

  // Expect the token to have been put into storage
  const storedToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  expect(storedToken).toBe('dummy-token');
});
