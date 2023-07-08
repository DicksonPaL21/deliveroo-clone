import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./reducer/basket";
import restaurantReducer from "./reducer/restaurant";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    restaurant: restaurantReducer,
  },
});
