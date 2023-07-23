import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {ScreenName} from '../constants';

/**
 * Parameters for screens in the auth stack.
 * */

export type UnauthenticatedStackParamsList = {
  Login: undefined;
  Register: undefined;
};

/**
 * Login screens prop types.
 */

// Login

export type LoginNavigationProp = NativeStackNavigationProp<
  UnauthenticatedStackParamsList,
  ScreenName.Login
>;

export type LoginRouteProp = RouteProp<
  UnauthenticatedStackParamsList,
  ScreenName.Login
>;

export type LoginProps = {
  navigation: LoginNavigationProp;
  route: LoginRouteProp;
};

// Register

export type RegisterNavigationProp = NativeStackNavigationProp<
  UnauthenticatedStackParamsList,
  ScreenName.Register
>;

export type RegisterRouteProp = RouteProp<
  UnauthenticatedStackParamsList,
  ScreenName.Register
>;

export type RegisterProps = {
  navigation: RegisterNavigationProp;
  route: RegisterRouteProp;
};
