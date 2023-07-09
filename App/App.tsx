import React, {useEffect, useReducer} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import * as auth from './context/auth';
import AuthenticatedNavigator from './navigation/authenticated/AuthenticatedNavigator';
import UnauthenticatedNavigator from './navigation/unauthenticated/UnauthenticatedNavigator';
import * as storage from './services/storage';

export default function App() {
  /** Root component for the application. */
  const [authInfo, authDispatch] = useReducer(
    auth.authReducer,
    auth.initialAuthInfo,
  );

  useEffect(() => {
    // Fetch the token from storage, verify it, then navigate to appropriate screen
    const userToken = storage.getValueForKey(storage.StorageKey.AuthToken);

    if (userToken) {
      authDispatch({
        type: auth.AuthAction.RestoreToken,
        token: userToken,
      });
    }
  }, []);

  return (
    <auth.AuthContext.Provider value={authInfo}>
      <auth.AuthDispatchContext.Provider value={authDispatch}>
        <NavigationContainer>
          {!authInfo.token ? (
            <UnauthenticatedNavigator />
          ) : (
            <AuthenticatedNavigator />
          )}
        </NavigationContainer>
      </auth.AuthDispatchContext.Provider>
    </auth.AuthContext.Provider>
  );
}
