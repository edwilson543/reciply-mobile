import React, {useEffect, useReducer} from 'react';

import {
  AuthAction,
  AuthContext,
  AuthDispatchContext,
  authReducer,
  initialAuthInfo,
} from './context/auth/auth';
// Navigators
import AuthenticatedNavigator from './navigation/navigators/AuthenticatedNavigator';
import UnauthenticatedNavigator from './navigation/navigators/UnauthenticatedNavigator';

export default function App() {
  /** Root component for the application. */
  const [authInfo, authDispatch] = useReducer(authReducer, initialAuthInfo);

  useEffect(() => {
    // Fetch the token from storage then navigate to appropriate screen
    async function bootstrapAsync() {
      let userToken;

      try {
        // userToken = await SecureStore.getItemAsync('userToken');
        userToken = 'dummy-token';
      } catch (e) {
        // Restoring token failed
        return;
      }
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      authDispatch({type: AuthAction.CompleteSignIn, token: userToken});
    }

    bootstrapAsync();
  }, []);

  return (
    <AuthContext.Provider value={authInfo}>
      <AuthDispatchContext.Provider value={authDispatch}>
        {authInfo.userToken === null ? (
          <UnauthenticatedNavigator />
        ) : (
          <AuthenticatedNavigator />
        )}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
