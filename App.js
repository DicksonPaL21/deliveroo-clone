import React from "react";
import {
  SafeAreaProvider,
  initialWindowMetrics,
} from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/home";
import RestaurantScreen from "./screens/restaurant";
import PreparingOrderScreen from "./screens/preparingOrder";
import DeliveryScreen from "./screens/delivery";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const Stack = createNativeStackNavigator();

const App = () => {
  const SCREENS = [
    { name: "Home", component: HomeScreen },
    { name: "Restaurant", component: RestaurantScreen },
    {
      name: "PreparingOrder",
      component: PreparingOrderScreen,
      options: { animation: "slide_from_bottom" },
    },
    {
      name: "Delivery",
      component: DeliveryScreen,
      options: { animation: "slide_from_bottom" },
    },
  ];

  return (
    <SafeAreaProvider initialMetrics={initialWindowMetrics}>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
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
