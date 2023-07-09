import React from 'react';

import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Login} from './Login';
import * as auth from '../../../context/auth';
import {login} from '../../../services/restAPI/authRequests';
import * as exceptions from '../../../services/restAPI/exceptions';
import * as storage from '../../../services/storage';

// Mock out the call to the auth API
jest.mock('../../../services/restAPI/authRequests/login');
afterEach(() => jest.mocked(login).mockClear());
afterEach(() => storage.deleteValueForKey(storage.StorageKey.AuthToken));

test('valid username and password logs user in', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Login />
    </auth.AuthDispatchContext.Provider>,
  );

  // Make the login API to return a token for any credentials
  const mockLoginResponse = Promise.resolve({token: 'dummy-token'});
  jest.mocked(login).mockResolvedValueOnce(mockLoginResponse);

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

test('invalid username and password cannot be used to login in', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  render(<Login />);

  // Make the login API to reject any credentials
  const mockLoginResponse = Promise.reject(
    new exceptions.UnauthorizedError('Mock error'),
  );
  jest.mocked(login).mockResolvedValueOnce(mockLoginResponse);

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

  // An appropriate error message should be shown
  const errorMessage = screen.getByTestId('error-message');
  expect(errorMessage).toHaveTextContent('Invalid username or password');

  // No token should have been set in storage
  const storedToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  expect(storedToken).toBe(undefined);
});
