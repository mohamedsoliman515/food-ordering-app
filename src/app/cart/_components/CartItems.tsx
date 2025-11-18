"use client";
import { selectCartItems } from "@/redux/features/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";

const CartItems = () => {
  const cart = useAppSelector(selectCartItems);
  console.log(cart);

  return <div>cartItem</div>;
};

export default CartItems;
