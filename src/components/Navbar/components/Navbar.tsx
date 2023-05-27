import { Outlet } from "react-router-dom";

import NavList from "../styles/NavList";
import StyledLink from "../styles/StyledLink";

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
