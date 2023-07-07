import React from 'react';
import {useState} from 'react';

import LoginView from './LoginView';
import {login} from '../../../services/restAPI/authRequests';
import * as exceptions from '../../../services/restAPI/exceptions';
import * as auth from '../../../context/auth';

export function Login() {
  /** Authenticate users using their username and password. */
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const canSubmit = username.length > 2 && password.length > 2;
  const authDispatch = auth.useAuthDispatch();

  // TODO -> make a submit button
  function handleLogin(): void {
    login(username, password)
      .then(data =>
        authDispatch({
          type: auth.AuthAction.Login,
          token: data.token,
        }),
      )
      .catch(error => {
        if (error instanceof exceptions.UnauthorizedError) {
          setErrorMessage('Invalid username or password');
        }
      });
  }

  return (
    <LoginView
      username={username}
      onUsernameChange={setUsername}
      password={password}
      onPasswordChange={setPassword}
      handleLogin={handleLogin}
      canSubmit={canSubmit}
      errorMessage={errorMessage}
    />
  );
}
