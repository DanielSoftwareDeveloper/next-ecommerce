import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface Props {
  images: string[];
  name: string;
  slug: string;
  description: string;
  price: number;
  stock: number;
}

function ProductCard({ images, name, description, price, slug, stock }: Props) {
  return (
    <article className="card">
      <Link href={`/product/${slug}`}>
        <Image
          src={images[0]}
          alt={`${name} - image`}
          width={0}
          height={0}
          sizes="100vw"
          priority
          className="w-full h-52 object-cover rounded-lg"
        />
      </Link>
      <h3 className="font-semibold mt-4 mb-2">{name}</h3>
      <p className="text-sm line-clamp-3 mb-3">{description}</p>
      {stock > 0 ? (
        <span className="text-sm">
          Price: <span className="text-emerald-500">${price}</span>
        </span>
      ) : (
        <p className="text-rose-500">Out of Stock</p>
      )}
      <Button variant="secondary" className="block w-full mt-3 hover:cursor-pointer">
        Add to Cart
      </Button>
    </article>
  );
}
export default ProductCard;
