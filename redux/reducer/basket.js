import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    incrementItemCountById: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (idx > -1) newBasket[idx].count++;
      state.items = newBasket;
    },
    decrementItemCountById: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (idx > -1) newBasket[idx].count--;
      state.items = newBasket;
    },
    removeFromBasket: (state, action) => {
      const idx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const newBasket = [...state.items];
      if (idx > -1) newBasket.splice(idx, 1);
      state.items = newBasket;
    },
  },
});

export const {
  addToBasket,
  removeFromBasket,
  incrementItemCountById,
  decrementItemCountById,
} = basketSlice.actions;

export const selectBasketItems = (state) => state.basket.items;

export const selectBasketItemById = (state, id) =>
  state.basket.items.find((item) => item.id === id);

export const selectBasketTotal = (state) =>
  state.basket.items.reduce(
    (total, item) => (total += item.price * item.count),
    0
  );

export default basketSlice.reducer;
