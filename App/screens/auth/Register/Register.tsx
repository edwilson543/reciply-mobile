import React, {useState} from 'react';

import RegisterView from './RegisterView';
import * as auth from '../../../context/auth';
import {RegisterProps} from '../../../navigation/unauthenticated/navigation.types';
import {StatusCode} from '../../../services/restAPI/constants';
import {
  RegisterErrors,
  RegisterPayload,
} from '../../../services/restAPI/payloads';
import {register} from '../../../services/restAPI/requests/auth';
import * as storage from '../../../services/storage';

const initialData: RegisterPayload = {
  username: '',
  email: '',
  password1: '',
  password2: '',
};

export function Register({navigation}: RegisterProps) {
  /** Allow users to sign up to the app. */
  const [userDetails, setUserDetails] = useState<RegisterPayload>(initialData);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<RegisterErrors | null>(null);

  const authDispatch = auth.useAuthDispatch();

  const canSubmit =
    userDetails.username.length > 4 &&
    userDetails.email.length > 6 && // todo -> regex validation
    userDetails.password1.length > 6 &&
    userDetails.password2.length > 6;

  async function registerDetails(): Promise<void> {
    setErrors(null);
    setIsLoading(true);

    register(userDetails)
      .then(response => {
        if (response.status >= StatusCode.BadRequest) {
          response.json().then(data => setErrors(data));
        } else {
          response.json().then(data => {
            storage.setValueForKey(storage.StorageKey.AuthToken, data.token);
            authDispatch({
              type: auth.AuthAction.Login,
              token: data.token,
            });
          });
        }
      })
      .then(() => setIsLoading(false));
  }

  return (
    <RegisterView
      navigation={navigation}
      userDetails={userDetails}
      setUserDetails={setUserDetails}
      handleSubmit={registerDetails}
      isLoading={isLoading}
      canSubmit={canSubmit}
      errors={errors}
    />
  );
}
