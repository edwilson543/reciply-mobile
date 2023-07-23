import React, {useState} from 'react';

import RegisterView from './RegisterView';
import * as auth from '../../../context/auth';
import * as exceptions from '../../../services/restAPI/exceptions';
import {RegisterPayload} from '../../../services/restAPI/payloads';
import {postData} from '../../../services/restAPI/request';
import * as storage from '../../../services/storage';

const initialData: RegisterPayload = {
  username: '',
  email: '',
  password1: '',
  password2: '',
};

export function Register() {
  /** Authenticate users using their username and password. */
  const [userDetails, setUserDetails] = useState<RegisterPayload>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');

  const authDispatch = auth.useAuthDispatch();

  const canSubmit =
    userDetails.username.length > 6 &&
    userDetails.email.length > 6 && // todo -> regex validation
    userDetails.password1.length > 6 &&
    userDetails.password2.length > 6;

  function registerDetails() {}

  return (
    <RegisterView
      userDetails={userDetails}
      setUserDetails={setUserDetails}
      handleSubmit={registerDetails}
      isLoading={isLoading}
      canSubmit={canSubmit}
      errorMessage={errorMessage}
    />
  );
}
