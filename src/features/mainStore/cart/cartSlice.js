import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  itemAction: {},
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
});

export const { reset } = cartSlice.actions;
export default cartSlice.reducer;
