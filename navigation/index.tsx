import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/home';
import OnBoard from 'screens/onBoard';

// Screens
const Stack = createStackNavigator();
const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="OnBoard" component={OnBoard} options={{
        headerShown:false
      }}/>
      <Stack.Screen name="Home" component={Home}/>
    </Stack.Navigator>
  )
}
export default Navigation;
