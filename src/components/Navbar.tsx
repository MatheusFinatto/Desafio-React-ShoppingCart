import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

type LinkProps = {
  className?: any;
  children: React.ReactNode;
  to: string;
  activeStyle?: any;
};

const Link = ({ className, children, to }: LinkProps): JSX.Element => (
  <NavLink className={className} to={to}>
    {children}
  </NavLink>
);

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #878787;
  padding: 10px;
  border-bottom: 1px solid #878787;
  box-sizing: border-box;
  &.active {
    box-shadow: 0px -10px 0px -6px black inset;
    color: #000;
  }
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  list-style: none;
  justify-content: center;
  padding: 8px 0;
  align-items: center;
`;

const Navbar = () => {
  return (
    <nav>
      <List>
        <li>
          <StyledLink
            to="/sacola"
            className={({ isActive }: any) => (isActive ? "active" : "")}
          >
            Sacola
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/pagamento"
            className={({ isActive }: any) => (isActive ? "active" : "")}
          >
            Pagamento
          </StyledLink>
        </li>
        <li>
          <StyledLink
            to="/confirmacao"
            className={({ isActive }: any) => (isActive ? "active" : "")}
          >
            Confirmação
          </StyledLink>
        </li>
      </List>
      <Outlet />
    </nav>
  );
};

export default Navbar;
