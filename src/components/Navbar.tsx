import { Outlet } from "react-router-dom";
import StyledLink from "../styles/Navbar/StyledLink";
import NavList from "../styles/Navbar/NavList";

const Navbar = () => {
  return (
    <nav>
      <NavList>
        <li>
          <StyledLink
            to="/sacola"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            Sacola
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/pagamento"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            Pagamento
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/confirmacao"
            className={({ isActive }: { isActive: boolean }) =>
              isActive ? "active" : ""
            }
          >
            Confirmação
          </StyledLink>
        </li>
      </NavList>
      <Outlet />
    </nav>
  );
};

export default Navbar;
