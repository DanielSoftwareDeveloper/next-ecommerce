import MainWrapper from "@/components/shared/MainWrapper";
import Social from "@/components/shared/social/Social";
import Link from "next/link";
import { FaHeart } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-12">
      <MainWrapper className="text-sm flex flex-col items-center md:flex-row md:justify-between gap-y-6 border-t-2 pt-10">
        <div className="">
          {currentYear} Sneakers - &copy; All rights reserved
        </div>
        <div className="">
          <Social />
        </div>
        <div className="flex items-center gap-x-1.5">
          Made with <FaHeart className="text-rose-500 dark:text-rose-400" /> by
          <Link
            href="https://danielreyesdev.com"
            target="_blank"
            className="text-orange-600  dark:text-orange-300 hover:underline"
          >
            Daniel Reyes
          </Link>
        </div>
      </MainWrapper>
    </footer>
  );
}
export default Footer;
