import React, {useEffect, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthAction,
  AuthContext,
  AuthDispatchContext,
  authReducer,
  initialAuthInfo,
} from './context/auth/auth';
import {Route} from './navigation/constants';
// Navigators
import AuthenticatedNavigator from './navigation/navigators/AuthenticatedNavigator';
// Screens
import {SignIn} from './screens/auth';
// Types
import {AuthStackParams} from './navigation/navigation.types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();

export default function App() {
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
          <NavigationContainer>
            <AuthStack.Navigator>
              <AuthStack.Screen name={Route.SignIn} component={SignIn} />
            </AuthStack.Navigator>
          </NavigationContainer>
        ) : (
          <AuthenticatedNavigator />
        )}
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
