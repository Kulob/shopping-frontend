import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slice/auth";
import cartSlice from "./slice/product";

const store = configureStore({
  reducer: {
    auth: authSlice,
    cart: cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
