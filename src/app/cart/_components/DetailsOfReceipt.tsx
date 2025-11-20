import { formatCurrency } from "@/lib/formatCurrency";

const DetailsOfReceipt = ({
  subTotal,
  deliveryFee,
}: {
  subTotal: number;
  deliveryFee: number;
}) => {
  return (
    <div className="flex flex-col justify-end  pt-6 border border-accent p-4 rounded-[8px]">
      <span className="text-accent font-medium">
        Subtotal :
        <strong className="text-black  pl-1">{formatCurrency(subTotal)}</strong>
      </span>
      <span className="text-accent font-medium">
        Delivery :
        <strong className="text-black pl-1">
          {formatCurrency(deliveryFee)}
        </strong>
      </span>
      <span className="text-accent font-medium">
        Total :
        <strong className="text-black pl-1">
          {formatCurrency(subTotal + deliveryFee)}
        </strong>
      </span>
    </div>
  );
};

export default DetailsOfReceipt;
