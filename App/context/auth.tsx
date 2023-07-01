import React, {createContext, useContext, Dispatch} from 'react';

// Constants

export const initialAuthInfo = {
  isLoading: true,
  isSignout: false,
  userToken: null,
};

export enum AuthAction {
  InitiateSignIn = 'initiate-sign-in',
  CompleteSignIn = 'complete-sign-in',
  InitiateSignOut = 'initiate-sign-out',
  CompleteSignOut = 'initiate-sign-out',
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
  /** Perform the relevant auth action based on the parameters */
  switch (action.type) {
    case AuthAction.InitiateSignIn: {
      // Start logging in
      return {
        isLoading: true,
        isSignout: false,
        userToken: null,
      };
    }
    case AuthAction.CompleteSignIn: {
      // Complete logging in
      return {
        isLoading: false,
        isSignout: false,
        userToken: 'mock-token',
      };
    }
    default:
      throw Error('Unknown action: ' + action.type);
  }
}

// Interfaces

interface AuthInformation {
  isLoading: boolean;
  isSignout: boolean;
  userToken: string | null;
}

interface InitiateSignInAction {
  type: AuthAction.InitiateSignIn;
}

interface CompleteSignInAction {
  type: AuthAction.CompleteSignIn;
  token: string;
}

interface InitiateSignOutAction {
  type: AuthAction.InitiateSignOut;
}

interface CompleteSignOutAction {
  type: AuthAction.CompleteSignOut;
}

type AuthActionParams =
  | InitiateSignInAction
  | CompleteSignInAction
  | InitiateSignOutAction
  | CompleteSignOutAction;
