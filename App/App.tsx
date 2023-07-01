import React, {useEffect, useReducer} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  AuthAction,
  AuthContext,
  AuthDispatchContext,
  authReducer,
  initialAuthInfo,
} from './context/auth/auth';
import {Route, TabStack} from './navigation/constants';
// Tabs
import {RecipesTab, MenusTab} from './navigation/tabs';
// Screens
import {SignIn} from './screens/auth';
// Types
import {AuthStackParams, TabParams} from './navigation/navigation.types';

const AuthStack = createNativeStackNavigator<AuthStackParams>();
const Tab = createBottomTabNavigator<TabParams>();

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
          {authInfo.userToken === null ? (
            // Login & registration stack
            <AuthStack.Navigator>
              <AuthStack.Screen name={Route.SignIn} component={SignIn} />
            </AuthStack.Navigator>
          ) : (
            // Authenticated stack
            <Tab.Navigator screenOptions={{headerShown: false}}>
              <Tab.Screen name={TabStack.Recipes} component={RecipesTab} />
              <Tab.Screen name={TabStack.Menus} component={MenusTab} />
            </Tab.Navigator>
          )}
        </NavigationContainer>
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
