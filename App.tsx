import './global.css';

import { NavigationContainer } from '@react-navigation/native';

import Navigation from './navigation';
import { Provider } from 'react-redux';
import store from 'store/store';

export default function App() {
  return (
    <Provider store={store}>

    <NavigationContainer >
      <Navigation />
    </NavigationContainer>
    </Provider>
  );
}
