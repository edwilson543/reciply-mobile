import React from 'react';

import {act, fireEvent, render, screen} from '@testing-library/react-native';

import {Register} from './Register';
import * as auth from '../../../context/auth';
import {register} from '../../../services/restAPI/authRequests/register';
import {StatusCode} from '../../../services/restAPI/constants';
import * as storage from '../../../services/storage';

// Mock out the call to the login endpoint
jest.mock('../../../services/restAPI/authRequests/register');
afterEach(() => jest.mocked(register).mockClear());
afterEach(() => storage.deleteValueForKey(storage.StorageKey.AuthToken));

test('valid details can be used to register', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Register navigation={jest.fn() as any} route={jest.fn() as any} />
    </auth.AuthDispatchContext.Provider>,
  );

  // Simulate the register endpoint returning a token for the credentials
  const mockRegisterResponse = Promise.resolve(
    new Response(JSON.stringify({token: 'dummy-token'})),
  );
  jest.mocked(register).mockResolvedValueOnce(mockRegisterResponse);

  // Input some user details
  fireEvent.changeText(screen.getByTestId('username-input'), 'ed123');
  fireEvent.changeText(screen.getByTestId('email-input'), 'ed123@gmail.com');
  fireEvent.changeText(screen.getByTestId('password1-input'), 'password123');
  fireEvent.changeText(screen.getByTestId('password2-input'), 'password123');

  // Attempt registration
  const registerButton = screen.getByTestId('register-button');
  await act(() => fireEvent.press(registerButton));

  // Register endpoint should have been requested with the relevant credentials
  expect(jest.mocked(register).mock.calls).toHaveLength(1);
  const mockLoginCall = jest.mocked(register).mock.calls[0];
  const submittedDetails = mockLoginCall[0] as any; // TS doesn't think FormData has `.get()`
  expect(submittedDetails.get('username')).toBe('ed123');
  expect(submittedDetails.get('email')).toBe('ed123@gmail.com');
  expect(submittedDetails.get('password1')).toBe('password123');
  expect(submittedDetails.get('password2')).toBe('password123');

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

test('invalid details cannot be used to register', async () => {
  // Provide a mock auth dispatcher, so the dispatched actions can be inspected
  const mockAuthDispatch = jest.fn();
  render(
    <auth.AuthDispatchContext.Provider value={mockAuthDispatch}>
      <Register navigation={jest.fn() as any} route={jest.fn() as any} />
    </auth.AuthDispatchContext.Provider>,
  );

  // Simulate the register endpoint returning a token for the credentials
  const mockRegisterResponse = Promise.resolve(
    new Response(JSON.stringify({username: ['Username already taken']}), {
      status: StatusCode.BadRequest,
    }),
  );
  jest.mocked(register).mockResolvedValueOnce(mockRegisterResponse);

  // Input some details
  fireEvent.changeText(screen.getByTestId('username-input'), 'ed123');
  fireEvent.changeText(screen.getByTestId('email-input'), 'ed123@gmail.com');
  fireEvent.changeText(screen.getByTestId('password1-input'), 'password123');
  fireEvent.changeText(screen.getByTestId('password2-input'), 'password123');

  // Attempt registration
  const registerButton = screen.getByTestId('register-button');
  await act(() => fireEvent.press(registerButton));

  // Register endpoint should have been requested with the relevant credentials
  expect(jest.mocked(register).mock.calls).toHaveLength(1);
  const mockLoginCall = jest.mocked(register).mock.calls[0];
  const submittedDetails = mockLoginCall[0] as any; // TS doesn't think FormData has `.get()`
  expect(submittedDetails.get('username')).toBe('ed123');
  expect(submittedDetails.get('email')).toBe('ed123@gmail.com');
  expect(submittedDetails.get('password1')).toBe('password123');
  expect(submittedDetails.get('password2')).toBe('password123');

  // An appropriate error message should be shown
  expect(screen.getByText('Username already taken')).toBeOnTheScreen();

  // Auth reducer shouldn't have been called and no token should have been set in storage
  expect(mockAuthDispatch.mock.calls).toHaveLength(0);
  const storedToken = storage.getValueForKey(storage.StorageKey.AuthToken);
  expect(storedToken).toBe(undefined);
});
