import MenuItem from "./MenuItem";
import { ProductWithRelations } from "@/types/product";

const Menu = ({ items }: { items: ProductWithRelations[] }) => {
  return items.length > 0 ? (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </ul>
    </div>
  ) : (
    <p className="text-accent text-center">No Products Found</p>
  );
};

export default Menu;
