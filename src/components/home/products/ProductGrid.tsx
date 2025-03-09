import { productList } from "@/db/data";
import ProductCard from "./ProductCard";
import { getLatestProducts } from "@/lib/actions/product.actions";

interface Props {
  title: string;
}

async function ProductGrid({ title }: Props) {
  const latestProducts = await getLatestProducts();

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-8">{title}</h2>
      {productList.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {latestProducts.map((product) => (
            <ProductCard
              key={product.slug}
              images={product.images}
              name={product.name}
              slug={product.slug}
              description={product.description}
              price={Number(product.price)}
              stock={product.stock}
            />
          ))}
        </div>
      ) : (
        <p className="">No products found 🥲</p>
      )}
    </section>
  );
}
export default ProductGrid;
