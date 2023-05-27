import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

type isActiveType = { isActive: boolean };

type LinkProps = {
  className: (isActive: isActiveType) => string;
  children: React.ReactNode;
  to: string;
};

const Link: React.FC<LinkProps> = ({ className, children, to }) => (
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

export default StyledLink;
