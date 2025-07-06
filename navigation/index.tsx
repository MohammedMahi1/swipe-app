import { createStackNavigator } from '@react-navigation/stack';
import Index from 'screens/auth';
import Login from 'screens/auth/login';
import SignUp from 'screens/auth/signUp';
import Home from 'screens/home';
import OnBoard from 'screens/onBoard';

// Screens
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
      <Stack.Screen name="OnBoard" component={OnBoard} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Index" component={Index} options={{headerShown:false}}/>
      <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/>
    </Stack.Navigator>
  )
}
export default Navigation;
