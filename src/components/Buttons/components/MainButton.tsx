import { NavLink } from "react-router-dom";
import StyledMainButton from "../styles/StyledMainButton";

type ButtonProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
};
const MainButton = ({ children, to, onClick }: ButtonProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <StyledMainButton onClick={onClick}>{children}</StyledMainButton>
    </NavLink>
  );
};

export default MainButton;
