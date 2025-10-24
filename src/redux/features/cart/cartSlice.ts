import { RootState } from "@/redux/store";
import { Extra, Size } from "@prisma/client";
import { createSlice } from "@reduxjs/toolkit";

export type CartItem = {
  id: string;
  name: string;
  basePrise: number;
  image: string;
  quantity?: number;
  size?: Size;
  extras?: Extra[];
};

type CartState = {
  items: CartItem[];
};

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
});

// Action creators are generated for each case reducer function
export const {} = cartSlice.actions;

export default cartSlice.reducer;

// Selector to get cart items in components
export const selectCartItems = (state: RootState) => state.cart.items;
