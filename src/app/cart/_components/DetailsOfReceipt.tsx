import { formatCurrency } from "@/lib/formatCurrency";

const DetailsOfReceipt = ({
  subTotal,
  deliveryFee,
}: {
  subTotal: number;
  deliveryFee: number;
}) => {
  return (
    <div className="flex flex-col justify-end items-end pt-6">
      <span className="text-accent font-medium">
        Subtotal:
        <strong className="text-black">{formatCurrency(subTotal)}</strong>
      </span>
      <span className="text-accent font-medium">
        Delivery:
        <strong className="text-black">{formatCurrency(deliveryFee)}</strong>
      </span>
      <span className="text-accent font-medium">
        Total:
        <strong className="text-black">
          {formatCurrency(subTotal + deliveryFee)}
        </strong>
      </span>
    </div>
  );
};

export default DetailsOfReceipt;
