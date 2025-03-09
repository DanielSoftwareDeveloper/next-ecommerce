import { navbarRoutes } from "./navbar.data";
import NavbarRoute from "./NavbarRoute";

function NavbarRoutes() {
  return (
    <nav>
      <ul className="hidden lg:flex items-center gap-x-6">
        {navbarRoutes.map((route) => (
          <li key={route.id}>
            <NavbarRoute label={route.label} href={route.href} />
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default NavbarRoutes;
