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
import {Route} from './navigation/Route';
// Layout
import HeaderTitle from './components/HeaderTitle';
// Screens
import SignIn from './screens/users/SignIn/SignIn';
import RecipeDetails from './screens/recipes/RecipeDetails/RecipeDetails';
import MyRecipeList from './screens/recipes/MyRecipeList/MyRecipeList';
// Styles
import {headerScreenOptions} from './styles/layout/header';

const Stack = createNativeStackNavigator();

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
          <Stack.Navigator screenOptions={headerScreenOptions}>
            {authInfo.userToken === null ? (
              // Unauthenticated screens
              <Stack.Screen name={Route.SignIn} component={SignIn} />
            ) : (
              // Authenticated screens
              <>
                <Stack.Screen
                  name={Route.MyRecipeList}
                  component={MyRecipeList}
                  options={{headerTitle: HeaderTitle}}
                />
                <Stack.Screen
                  name={Route.RecipeDetails}
                  component={RecipeDetails}
                  options={{headerTitle: HeaderTitle}}
                />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </AuthDispatchContext.Provider>
    </AuthContext.Provider>
  );
}
