import React, {useState} from 'react';

import LoginView from './LoginView';
import * as auth from '../../../context/auth';
import {LoginProps} from '../../../navigation/unauthenticated/navigation.types';
import * as exceptions from '../../../services/restAPI/exceptions';
import {login} from '../../../services/restAPI/requests/auth';
import * as storage from '../../../services/storage';

export function Login({navigation}: LoginProps) {
  /** Authenticate users using their username and password. */
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const canSubmit = username.length > 2 && password.length > 2;
  const authDispatch = auth.useAuthDispatch();

  function handleLogin(): void {
    setErrorMessage('');
    setIsLoading(true);
    login(username, password)
      .then(data => {
        storage.setValueForKey(storage.StorageKey.AuthToken, data.token);
        authDispatch({
          type: auth.AuthAction.Login,
          token: data.token,
        });
      })
      .catch(error => {
        if (error instanceof exceptions.UnauthorizedError) {
          setErrorMessage('Invalid username or password');
        }
      })
      .then(() => setIsLoading(false));
  }

  return (
    <LoginView
      navigation={navigation}
      username={username}
      onUsernameChange={setUsername}
      password={password}
      onPasswordChange={setPassword}
      handleLogin={handleLogin}
      isLoading={isLoading}
      canSubmit={canSubmit}
      errorMessage={errorMessage}
    />
  );
}
