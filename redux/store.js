import { configureStore } from '@reduxjs/toolkit';
import basketReducer from './reducer/backet';

export const store = configureStore({
  reducer: {
    basket: basketReducer,
  },
});
