import './global.css';

import {NavigationContainer } from '@react-navigation/native';


import Navigation from './navigation';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Navigation/>
    </NavigationContainer>
  );
}
