import React, {useEffect, useReducer} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import * as auth from './context/auth';
import AuthenticatedNavigator from './navigation/authenticated/AuthenticatedNavigator';
import UnauthenticatedNavigator from './navigation/unauthenticated/UnauthenticatedNavigator';
import * as storage from './services/storage';

// This extra stack navigator is used so that the authenticated and unauthenticated
// navigators are wrapped by a single navigator. This allows us to have screen
// transitions between the two protected routes (authenticated and unauthenticated).
const Stack = createNativeStackNavigator();

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
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {authInfo.token ? (
              <Stack.Screen
                name={'authenticated'}
                component={AuthenticatedNavigator}
                options={{
                  animationTypeForReplace: 'push',
                }}
              />
            ) : (
              <Stack.Screen
                name={'unauthenticated'}
                component={UnauthenticatedNavigator}
                options={{
                  animationTypeForReplace: 'pop',
                }}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </auth.AuthDispatchContext.Provider>
    </auth.AuthContext.Provider>
  );
}
