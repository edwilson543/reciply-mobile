import React, {useEffect, useReducer} from 'react';

import * as auth from './context/auth';
import * as storage from './services/storage';
// Navigators
import AuthenticatedNavigator from './navigation/navigators/AuthenticatedNavigator';
import UnauthenticatedNavigator from './navigation/navigators/UnauthenticatedNavigator';

export default function App() {
  /** Root component for the application. */
  const [authInfo, authDispatch] = useReducer(
    auth.authReducer,
    auth.initialAuthInfo,
  );

  useEffect(() => {
    // Fetch the token from storage, verify it, then navigate to appropriate screen
    async function retrieveAuthToken() {
      storage.setValueForKey(storage.StorageKey.AuthToken, 'dummy-token'); // TODO -> remove
      const userToken = storage.getValueForKey(storage.StorageKey.AuthToken);
      if (userToken) {
        authDispatch({
          type: auth.AuthAction.CompleteSignIn,
          token: userToken,
        });
      }
    }

    retrieveAuthToken();
  }, []);

  console.log('TOKEN: ', authInfo.userToken);

  return (
    <auth.AuthContext.Provider value={authInfo}>
      <auth.AuthDispatchContext.Provider value={authDispatch}>
        {!authInfo.userToken ? (
          <UnauthenticatedNavigator />
        ) : (
          <AuthenticatedNavigator />
        )}
      </auth.AuthDispatchContext.Provider>
    </auth.AuthContext.Provider>
  );
}
