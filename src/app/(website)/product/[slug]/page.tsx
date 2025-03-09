import ProductPrice from "@/components/home/products/ProductPrice";
import { ProductSlider } from "@/components/home/products/slider/ProductSlider";
import { Button } from "@/components/ui/button";

import { getProductBySlug } from "@/lib/actions/product.actions";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

async function SingleProduct({ params }: Props) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);
  if (!product) notFound();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-x-14">
      <div className="">
        <ProductSlider images={product.images} title={product.name} />
      </div>
      <div className="">
        <h3 className="text-4xl font-bold text-neutral-700 dark:text-neutral-100 my-3">
          {product.name}
        </h3>
        <div className="flex gap-x-4 mb-6">
          <p className="">
            <span className="font-semibold text-neutral-600 dark:text-neutral-100">
              Brand:
            </span>{" "}
            {product.brand}
          </p>
          <p className="">
            <span className="font-semibold text-neutral-600 dark:text-neutral-100">
              Category:{" "}
            </span>{" "}
            {product.category}
          </p>
        </div>
        <div className="mb-6">
          <p className="">{product.description}</p>
        </div>
        <p className="mb-6">
          {product.rating} of {product.numReviews} reviews
        </p>
        <div className="">
          <ProductPrice
            value={Number(product.price)}
            className="font-bold inline-block rounded-lg"
          />
          <Button size="lg" className="w-full mt-2">
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
export default SingleProduct;
