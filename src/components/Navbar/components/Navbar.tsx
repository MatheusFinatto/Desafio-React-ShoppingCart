import { Outlet } from "react-router-dom";
import NavList from "../styles/NavList";
import StyledLink, { isActiveType } from "../styles/StyledLink";

const links = [
  { label: "Sacola", path: "/sacola" },
  { label: "Pagamento", path: "/pagamento" },
  { label: "Confirmação", path: "/confirmacao" },
];

const Navbar = () => {
  return (
    <nav>
      <NavList>
        {links.map((link) => (
          <li key={link.label}>
            <StyledLink
              className={({ isActive }: isActiveType) =>
                isActive ? "active" : ""
              }
              to={link.path}
            >
              {link.label}
            </StyledLink>
          </li>
        ))}
      </NavList>
      <Outlet />
    </nav>
  );
};

export default Navbar;
