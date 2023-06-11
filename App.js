import React from 'react';
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/home';
import RestaurantScreen from './screens/restaurant';
// import BasketScreen from './screens/basket';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const Stack = createNativeStackNavigator();

const App = () => {
  const SCREENS = [
    { name: 'Home', component: HomeScreen },
    { name: 'Restaurant', component: RestaurantScreen },
    // {
    //   name: 'Basket',
    //   component: BasketScreen,
    //   options: { presentation: 'modal', headerShown: false },
    // },
  ];
  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            {SCREENS.map((screen, idx) => (
              <Stack.Screen key={idx} {...screen} />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
