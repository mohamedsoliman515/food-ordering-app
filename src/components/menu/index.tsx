/* eslint-disable @typescript-eslint/no-explicit-any */
import MenuItem from "./MenuItem";

const Menu = ({ items }: { items: any }) => {
  return (
    <div>
      <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {items.map(
          (item: {
            id: number;
            name: string;
            description: string;
            basePrice: number;
            image: string;
          }) => (
            <MenuItem key={item.id} item={item} />
          )
        )}
      </ul>
    </div>
  );
};

export default Menu;
