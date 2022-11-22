import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../features/mainStore/categories/categorySlice";
import itemReducer from "../features/mainStore/items/itemSlice";
import paginationReducer from "../features/mainStore/pagination/paginationSlice";
import cartReducer from "../features/mainStore/cart/cartSlice";
import authReducer from "../features/auth/authSlice"

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    items: itemReducer,
    pagination: paginationReducer,
    cart: cartReducer,
    auth: authReducer
  },
});
