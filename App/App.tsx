import React, {useEffect, useReducer} from 'react';

import * as auth from './context/auth';
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
      authDispatch({type: auth.AuthAction.CompleteSignIn, token: userToken});
    }

    bootstrapAsync();
  }, []);

  return (
    <auth.AuthContext.Provider value={authInfo}>
      <auth.AuthDispatchContext.Provider value={authDispatch}>
        {authInfo.userToken === null ? (
          <UnauthenticatedNavigator />
        ) : (
          <AuthenticatedNavigator />
        )}
      </auth.AuthDispatchContext.Provider>
    </auth.AuthContext.Provider>
  );
}
