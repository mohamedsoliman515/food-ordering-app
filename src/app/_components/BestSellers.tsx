import MainHeading from "@/components/main-heading";
import Menu from "@/components/menu";
import { db } from "@/lib/prisma";

const BestSellers = async () => {
  const bestSellers = await db.product.findMany();
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
