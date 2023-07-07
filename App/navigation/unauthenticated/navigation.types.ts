import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RouteProp} from '@react-navigation/native';
import {ScreenName} from '../constants';

/**
 * Parameters for screens in the auth stack.
 * */

export type UnauthenticatedStackParamsList = {
  Login: undefined;
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
