import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;
      state.cart.push(newItem);
    },
    deleteItem(state, action) {
      // payload = pizzaId
      state.cart = state.cart.filter(
        (item) => item.pizzaId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId !== action.payload,
      );
      item.quantity++;
      item.totalPrice =
        item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find(
        (item) => item.pizzaId !== action.payload,
      );
      item.quantity--;
      item.totalPrice =
        item.quantity * item.unitPrice;
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
