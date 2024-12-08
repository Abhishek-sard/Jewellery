
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [], // Initialize as an empty array
  };
  
  const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
      addItemToCart(state, action) {
        const item = action.payload;
        const uniqueId = item.id || item.name; // Fallback to name as an ID
    
        const existingItem = state.cart.find((i) => i.id === uniqueId);
        if (existingItem) {
          existingItem.quantity += item.quantity;
        } else {
          state.cart.push({ ...item, id: uniqueId });
        }
      },
      updateCartQuantity(state, action) {
        const { id, quantity } = action.payload;
        const item = state.cart.find((i) => i.id === id);
        if (item) {
          item.quantity = quantity;
        }
      },
      removeFromCart(state, action) {
        state.cart = state.cart.filter((i) => i.id !== action.payload);
      },
    },
  });
  
  export const { addItemToCart, updateCartQuantity, removeFromCart } = cartSlice.actions;
  export default cartSlice.reducer;
  
