import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Cart() {
  return (
    <Button asChild variant="ghost">
      <Link href="/cart">
        <ShoppingCart className="size-6" />
      </Link>
    </Button>
  );
}
export default Cart;
