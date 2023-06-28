import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Route} from '../constants';
import {SignIn} from '../../screens/auth';

const AuthStack = createNativeStackNavigator();

export function AuthStackScreen() {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={Route.SignIn} component={SignIn} />
    </AuthStack.Navigator>
  );
}
