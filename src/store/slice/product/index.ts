import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../";

export type CartItems = {
  id: number;
  title: String;
  price: number;
  image: String;
  count: number;
};

interface CartSliceState {
  items: CartItems[];
}

export const initialState: CartSliceState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<CartItems>) {
      // state.items = [...state.items, action.payload];
      // state.items.push(action.payload)
      const findItem = state.items.find((obj) => obj.id === action.payload.id);

      if (findItem) {
        findItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      // if (findItem){
      //   findItem.count += action.payload.count
      // } else {
      //   state.items.push(action.payload)
      // }
    },
    addItemMinus(state, action: PayloadAction<number>) {
      const findItem = state.items.find(
        (obj) => obj.id === action.payload
      );
      if (findItem) {
        findItem.count--;
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
    },
    clearItem(state) {
      state.items = [];
    },
  },
});

export const selectHeader = (state: RootState) => state.cart;
export const selectTotal = (state: RootState) =>
  state.cart.items.reduce(
    (total: number, item) => total + item.price * item.count,
    0
  );

export const selectCartItemsId = (id: number) => (state: RootState) =>
    state.cart.items.find((obj) => obj.id === id)

export const { addItem,addItemMinus,removeItem, clearItem } = cartSlice.actions;
export default cartSlice.reducer;
