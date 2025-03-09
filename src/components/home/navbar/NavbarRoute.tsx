"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  label: string;
  href: string;
}

function NavbarRoute({ label, href }: Props) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={cn(
        "text-base text-neutral-600 dark:text-neutral-50 hover:opacity-80 transition-opacity duration-100 ease-in-out",
        {
          "text-orange-500 dark:text-orange-300": pathname === href,
        }
      )}
    >
      {label}
    </Link>
  );
}
export default NavbarRoute;
