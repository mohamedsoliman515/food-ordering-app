import { db } from "@/lib/prisma";
import { cache } from "@/lib/cache";

export const getProductsByCategory = cache(
  () => {
    const products = db.category.findMany({
      include: {
        products: {
          include: {
            sizes: true,
            extras: true,
          },
        },
      },
    });
    return products;
  },
  ["products-by-category"],
  { revalidate: 3600 }
);

export const getBestSellers = cache(
  async (limit?: number | undefined) => {
    const bestSellers = await db.product.findMany({
      where: {
        orders: {
          some: {}, // Products that appear in at least one order
        },
      },
      orderBy: {
        orders: {
          _count: "desc", // get products with the highest number of orders
        },
      },
      take: limit, // Limit to top 3 best sellers
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
