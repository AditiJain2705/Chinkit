import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array to store products in the cart
  totalQuantity: 0, // Total quantity of items in the cart
  totalPrice: 0, // Total price of items in the cart
  deliveryCharge: 50,
  handlingCharge: 50,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const { id, name, price, size } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ id, name, price, size, quantity: 1 });
      }
      // Update totals
      state.totalQuantity += 1;
      state.totalPrice += price;
    },
    decrementItem(state, action) {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
        } else {
          state.totalQuantity -= 1;
          state.totalPrice -= existingItem.price;
          state.items = state.items.filter((item) => item.id !== id);
        }
      }
    },
    clearCart(state) {
      // Reset the cart
      state.items = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
    calculateTotals(state) {
      state.totalQuantity = state.items.reduce(
        (total, item) => total + item.quantity,
        0
      );
      state.totalPrice = state.items.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },
});

export const {
  addItem,
  decrementItem,
  clearCart,
  calculateTotals,
} = cartSlice.actions;

export default cartSlice.reducer;
