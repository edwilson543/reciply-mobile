import React from 'react';

import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Login} from './Login';
import * as auth from '../../../context/auth';
import * as exceptions from '../../../services/restAPI/exceptions';
import {login} from '../../../services/restAPI/requests/auth';
import * as storage from '../../../services/storage';

// Mock out the call to the login endpoint
jest.mock('../../../services/restAPI/requests/auth');
afterEach(() => jest.mocked(login).mockClear());

test('valid username and password logs user in', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Login navigation={jest.fn() as any} route={jest.fn() as any} />
    </auth.AuthDispatchContext.Provider>,
  );

  // Simulate the login endpoint returning a token for the credentials
  const mockLoginResponse = Promise.resolve({token: 'dummy-token'});
  jest.mocked(login).mockResolvedValueOnce(mockLoginResponse);

  // Input a username and password
  const usernameInput = screen.getByTestId('username-input');
  const passwordInput = screen.getByTestId('password-input');
  fireEvent.changeText(usernameInput, 'ed123');
  fireEvent.changeText(passwordInput, 'password123');

  // Confirm login
  const loginButton = screen.getByTestId('login-button');
  await act(() => fireEvent.press(loginButton));

  // Login endpoint should have been requested with the relevant credentials
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
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Login navigation={jest.fn() as any} route={jest.fn() as any} />
    </auth.AuthDispatchContext.Provider>,
  );

  // Simulate the login endpoint rejecting the credentials
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

  // Login endpoint should have been requested with the relevant credentials
  expect(jest.mocked(login).mock.calls).toHaveLength(1);
  const mockLoginCall = jest.mocked(login).mock.calls[0];
  expect(mockLoginCall[0]).toBe('ed123');
  expect(mockLoginCall[1]).toBe('password123');

  // An appropriate error message should be shown
  expect(screen.getByText('Invalid username or password')).toBeOnTheScreen();

  // Auth reducer shouldn't have been called and no token should have been set in storage
  expect(mockAuthDispatch.mock.calls).toHaveLength(0);
  const storedToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  expect(storedToken).toBe(undefined);
});
