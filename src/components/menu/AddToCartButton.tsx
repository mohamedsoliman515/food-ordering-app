"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import Image from "next/image";
import { Label } from "@/components/ui/label";
import { ProductWithRelations } from "@/types/product";
import { Extra, Size, ProductSize } from "@prisma/client";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { addCartItem, selectCartItems } from "@/redux/features/cart/cartSlice";

const AddToCartButton = ({ item }: { item: ProductWithRelations }) => {
  const cart = useAppSelector(selectCartItems);
  const dispatch = useAppDispatch();
  const defualtSize =
    cart.find((element) => element.id === item.id)?.size ||
    item.sizes.find((size) => size.name === ProductSize.SMALL);
  const defualtExtras =
    cart.find((element) => element.id === item.id)?.extras || [];
  const [selectedSize, setSelectedSize] = useState<Size>(defualtSize!);
  const [selectedExtras, setSelectedExtras] = useState<Extra[]>(defualtExtras!);

  const totalPrice =
    item.basePrice +
    selectedSize.price +
    selectedExtras.reduce((acc, extra) => acc + extra.price, 0);

  const handleAddToCart = () => {
    dispatch(
      addCartItem({
        id: item.id,
        name: item.name,
        basePrise: item.basePrice,
        image: item.image,
        size: selectedSize,
        extras: selectedExtras,
      })
    );
  };
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button className="block mx-auto w-[90%] h-10">Add To Cart </Button>
        </DialogTrigger>

        <DialogContent className="sm:max-w-[425px] max-h-[95vh] overflow-y-auto">
          <DialogHeader className="items-center">
            <Image src={item.image} alt={item.name} width={200} height={200} />

            <DialogTitle>{item.name}</DialogTitle>

            <DialogDescription className="text-center">
              Make changes to your profile here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-10 ">
            <div className="space-y-4 text-center">
              <Label className="block" htmlFor="pick-size">
                Pick your size
              </Label>
              <PickSize
                sizes={item.sizes}
                item={item}
                selectedSize={selectedSize}
                setSelectedSize={setSelectedSize}
              />
            </div>

            <div className="space-y-4 text-center">
              <Label className="block" htmlFor="pick-size">
                Extras
              </Label>
              <Extras
                extras={item.extras}
                selectedExtras={selectedExtras}
                setSelectedExtras={setSelectedExtras}
              />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button
              type="submit"
              className="w-full h-10"
              onClick={handleAddToCart}
            >
              Add To Cart {formatCurrency(totalPrice)}
            </Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
};

export default AddToCartButton;

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { formatCurrency } from "@/lib/formatCurrency";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";

export function PickSize({
  sizes,
  item,
  selectedSize,
  setSelectedSize,
}: {
  sizes: Size[];
  item: ProductWithRelations;
  selectedSize: Size;
  setSelectedSize: React.Dispatch<React.SetStateAction<Size>>;
}) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem
            value={selectedSize.name}
            id={size.id}
            checked={selectedSize.id === size.id}
            onClick={() => setSelectedSize(size)}
          />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}

export function Extras({
  extras,
  selectedExtras,
  setSelectedExtras,
}: {
  extras: Extra[];
  selectedExtras: Extra[];
  setSelectedExtras: React.Dispatch<React.SetStateAction<Extra[]>>;
}) {
  const handleExtra = (extra: Extra) => {
    if (selectedExtras.find((e) => e.id === extra.id)) {
      setSelectedExtras((prevSelectedExtras) =>
        prevSelectedExtras.filter((e) => e.id !== extra.id)
      );
    } else {
      setSelectedExtras((prevSelectedExtras) => [...prevSelectedExtras, extra]);
    }
  };

  return (
    <RadioGroup defaultValue="comfortable">
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <Checkbox
            checked={Boolean(selectedExtras.find((e) => e.id === extra.id))}
            onClick={() => handleExtra(extra)}
            id={extra.id}
          />
          <Label
            className="text-sm text-accent font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            htmlFor={extra.id}
          >
            {extra.name} {formatCurrency(extra.price)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
