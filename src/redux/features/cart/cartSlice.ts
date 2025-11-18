import { RootState } from "@/redux/store";
import { Extra, Size } from "@prisma/client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  reducers: {
    addCartItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
        existingItem.size = action.payload.size;
        existingItem.extras = action.payload.extras;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeCartItem: (state, action: PayloadAction<{ id: string }>) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        if ((item.quantity || 1) > 1) {
          item.quantity = (item.quantity || 1) - 1;
        } else {
          state.items = state.items.filter(
            (item) => item.id !== action.payload.id
          );
        }
      }
    },
    removeItemFromCart: (state, action: PayloadAction<{ id: string }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCartItem, removeCartItem, removeItemFromCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

// Selector to get cart items in components
export const selectCartItems = (state: RootState) => state.cart.items;
