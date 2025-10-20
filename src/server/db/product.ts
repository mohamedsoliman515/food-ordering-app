import { db } from "@/lib/prisma";
import { cache } from "@/lib/cache";
export const getBestSellers = cache(
  () => {
    const bestSellers = db.product.findMany({
      include: {
        sizes: true,
        extras: true,
      },
    });
    return bestSellers;
  },
  ["best-sellers"],
  { revalidate: 3600 }
);
