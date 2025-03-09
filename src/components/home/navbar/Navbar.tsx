import Logo from "@/components/shared/Logo";
import MainWrapper from "@/components/shared/MainWrapper";
import NavbarRoutes from "./NavbarRoutes";
import Cart from "./Cart";
import Profile from "./Profile";
import Sidebar from "./Sidebar";
import { ModeToggle } from "@/components/theme/ModeToggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Navbar() {
  const user = false;
  return (
    <header className="mt-10">
      <MainWrapper className="flex items-center justify-between border-b-2 pb-8">
        <div className="flex items-center gap-x-10">
          <Logo />
          <NavbarRoutes />
        </div>
        <div className="flex items-center">
          <div className="flex items-center gap-x-4">
            <Cart />
            <ModeToggle />
          </div>
          <div className="h-8 border-l border-gray-300 mx-6"></div>
          {user ? (
            <Profile />
          ) : (
            <div className="flex items-center gap-x-4">
              <Button asChild>
                <Link href="/auth/sign-in">Login</Link>
              </Button>
              <Button asChild>
                <Link href="/auth/sign-up">Register</Link>
              </Button>
            </div>
          )}
          <div className="lg:hidden">
            <Sidebar />
          </div>
        </div>
      </MainWrapper>
    </header>
  );
}
export default Navbar;
