import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const StyledMainButton = styled.button`
  margin: 0 20px;
  height: 48px;
  width: calc(100vw - 40px);
  border-radius: 4px;
  display: flex;
  padding: 16px 8px;
  background: #9222dc;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

const StyledReturnButton = styled.button`
  margin: 0 20px;
  height: 48px;
  width: calc(100vw - 40px);
  border-radius: 4px;
  display: flex;
  padding: 16px 8px;
  background: #000;
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

type ButtonProps = {
  children: React.ReactNode;
  to: string;
};

const MainButton = ({ children, to }: ButtonProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <StyledMainButton>{children}</StyledMainButton>
    </NavLink>
  );
};

const ReturnButton = ({ children, to }: ButtonProps) => {
  return (
    <NavLink to={to} style={{ textDecoration: "none" }}>
      <StyledReturnButton>{children}</StyledReturnButton>
    </NavLink>
  );
};

export { MainButton, ReturnButton };
