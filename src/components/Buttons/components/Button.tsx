import { NavLink } from "react-router-dom";
import StyledButton from "../styles/StyledButton";

type ButtonProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
  inputColor: string;
};
const Button = ({ children, to, onClick, inputColor }: ButtonProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <StyledButton onClick={onClick} $inputColor={inputColor}>
        {children}
      </StyledButton>
    </NavLink>
  );
};

export default Button;
