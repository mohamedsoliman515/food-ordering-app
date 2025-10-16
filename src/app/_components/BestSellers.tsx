import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";

const BestSellers = () => {
  const bestSellers = [
    {
      id: crypto.randomUUID(),
      name: "Margherita Pizza",
      description: "Classic delight with 100% real mozzarella cheese",
      basePrice: 5.99,
      image: "/assets/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Margherita Pizza",
      description: "Classic delight with 100% real mozzarella cheese",
      basePrice: 5.99,
      image: "/assets/pizza.png",
    },
    {
      id: crypto.randomUUID(),
      name: "Margherita Pizza",
      description: "Classic delight with 100% real mozzarella cheese",
      basePrice: 5.99,
      image: "/assets/pizza.png",
    },
  ];
  return (
    <section>
      <div className="container">
        <div className="text-center mb-4">
          <MainHeading subTitle="checkOut" title="Our Best Seller" />
        </div>
        <Menu items={bestSellers} />
      </div>
    </section>
  );
};

export default BestSellers;
