/* eslint-disable @typescript-eslint/no-unused-vars */
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
// import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AddToCartButton = ({ item }: { item: any }) => {
  const sizes = [
    { id: crypto.randomUUID(), name: "Small", price: 0 },
    { id: crypto.randomUUID(), name: "mid", price: 4 },
    { id: crypto.randomUUID(), name: "Lg", price: 8 },
  ];
  const extras = [
    { id: crypto.randomUUID(), name: "Small", price: 0 },
    { id: crypto.randomUUID(), name: "mid", price: 4 },
    { id: crypto.randomUUID(), name: "Lg", price: 8 },
  ];
  return (
    // <Button
    //   type="button"
    //   size="lg"
    //   className="mt-4 text-white rounded-full !px-8"
    // >
    //   Add To Cart
    // </Button>
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">Open Dialog</Button>
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
              <PickSize sizes={sizes} item={item} />
            </div>

            <div className="space-y-4 text-center">
              <Label className="block" htmlFor="pick-size">
                Extras
              </Label>
              <Extras extras={extras} />
            </div>
          </div>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="w-full h-10">
              Add To Cart
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function PickSize({ sizes, item }: { sizes: any; item: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {sizes.map((size) => (
        <div
          key={size.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <RadioGroupItem value={size.name} id={size.id} />
          <Label htmlFor={size.id}>
            {size.name} {formatCurrency(size.price + item.basePrice)}
          </Label>
        </div>
      ))}
    </RadioGroup>
  );
}
export function Extras({ extras }: { extras: any }) {
  return (
    <RadioGroup defaultValue="comfortable">
      {extras.map((extra) => (
        <div
          key={extra.id}
          className="flex items-center space-x-2 border border-gray-100 rounded-md p-4"
        >
          <Checkbox value={extra.name} id={extra.id} />
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
