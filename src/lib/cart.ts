import { CartItem } from "@/redux/features/cart/cartSlice";

export const getCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};
