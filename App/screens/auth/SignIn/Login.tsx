import React from 'react';
import {useState} from 'react';

import LoginView from './LoginView';

export function Login() {
  /** Authenticate users using their username and password. */
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  return (
    <LoginView
      username={username}
      onUsernameChange={setUsername}
      password={password}
      onPasswordChange={setPassword}
    />
  );
}
