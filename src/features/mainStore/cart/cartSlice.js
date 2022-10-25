import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  // itemAction: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => initialState,
    addToCart: (state, action) => {
      const { item } = action.payload;
      let prevItem = state.cartItems.filter((i) => item.iid === i.iid);
      if (prevItem.length === 0) {
        let { quantity } = item;
        quantity--;
        state.cartItems.push({ ...item, qty: 1, quantity });
      } else {
        const index = state.cartItems.indexOf(prevItem[0]);
        state.cartItems[index].qty++;
        state.cartItems[index].quantity--;
      }
    },
  },
});

export const { reset, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
