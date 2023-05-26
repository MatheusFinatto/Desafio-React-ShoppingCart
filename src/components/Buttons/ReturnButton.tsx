import { NavLink } from "react-router-dom";
import StyledReturnButton from "../../styles/Buttons/StyledReturnButton";

type ButtonProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
};
const ReturnButton = ({ children, to }: ButtonProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <StyledReturnButton>{children}</StyledReturnButton>
    </NavLink>
  );
};

export default ReturnButton;
