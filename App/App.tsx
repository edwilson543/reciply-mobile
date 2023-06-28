import React, {useEffect, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  AuthAction,
  AuthContext,
  AuthDispatchContext,
  authReducer,
  initialAuthInfo,
} from './context/auth/auth';
import {Route, TabStack} from './navigation/constants';
// Stacks
import {SignIn} from './screens/auth';
import {RecipesStackScreen} from './navigation/stacks';
// Styles
import {header} from './styles/layout';

const Tab = createBottomTabNavigator();

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
        <NavigationContainer>
          <Tab.Navigator screenOptions={header.headerScreenOptions}>
            {authInfo.userToken === null ? (
              // Unauthenticated screens
              <Tab.Screen name={Route.SignIn} component={SignIn} />
            ) : (
              // Authenticated stacks
              <Tab.Screen
                name={TabStack.Recipes}
                component={RecipesStackScreen}
              />
            )}
          </Tab.Navigator>
        </NavigationContainer>
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
