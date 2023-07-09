import React, {createContext, useContext, Dispatch} from 'react';

// Constants

export const initialAuthInfo = {
  token: null,
};

export enum AuthAction {
  RestoreToken = 'restore-token',
  Login = 'login',
  Logout = 'logout',
}

// Context

export const AuthContext = createContext<AuthInformation>(initialAuthInfo);
export const AuthDispatchContext = createContext<Dispatch<AuthActionParams>>(
  () => {
    return;
  },
);

export function useAuth(): AuthInformation {
  return useContext(AuthContext);
}

export function useAuthDispatch(): React.Dispatch<AuthActionParams> {
  return useContext(AuthDispatchContext);
}

// Reducer

export function authReducer(
  auth: AuthInformation,
  action: AuthActionParams,
): AuthInformation {
  /** Perform the relevant auth action based on the parameters.
   * Restore & login and defined separately, as they may diverge.
   * */
  switch (action.type) {
    case AuthAction.RestoreToken: {
      return {
        token: action.token,
      };
    }
    case AuthAction.Login: {
      return {
        token: action.token,
      };
    }
    case AuthAction.Logout: {
      return {
        token: null,
      };
    }
    default:
      throw Error('Unknown action: ' + action);
  }
}

// Interfaces

interface AuthInformation {
  token: string | null;
}

interface RestoreTokenAction {
  type: AuthAction.RestoreToken;
  token: string;
}

interface LoginAction {
  type: AuthAction.Login;
  token: string;
}

interface LogoutAction {
  type: AuthAction.Logout;
}

type AuthActionParams = RestoreTokenAction | LoginAction | LogoutAction;
