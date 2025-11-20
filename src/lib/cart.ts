import { CartItem } from "@/redux/features/cart/cartSlice";
const deliveryFee = 5;
export const getCartQuantity = (cart: CartItem[]) => {
  return cart.reduce((total, item) => total + (item.quantity || 1), 0);
};

export const getItemQuantity = (id: string, cart: CartItem[]) => {
  return cart.find((item) => item.id === id)?.quantity || 0;
};

export const getSubTotal = (cart: CartItem[]) => {
  return cart.reduce((total, item) => {
    const sizePrice = item.size ? item.size.price : 0;
    const extras = item.extras?.reduce((sum, extra) => sum + extra.price, 0);
    const itemTotal =
      (item.basePrice + sizePrice + (extras || 0)) * (item.quantity || 1);

    return total + itemTotal;
  }, 0);
};
export const getTotalAmount = (cart: CartItem[]) => {
  return getSubTotal(cart) + deliveryFee;
};
