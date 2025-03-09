import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <span className="text-[28px] font-bold">
        Next<span className="text-orange-400 dark:text-orange-300">store</span>{" "}
      </span>
    </Link>
  );
}
export default Logo;
