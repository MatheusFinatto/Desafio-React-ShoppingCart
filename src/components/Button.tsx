import { styled } from "styled-components";

const StyledButton = styled.button`
  margin: 0 20px;
  height: 48px;
  width: calc(100% - 40px);
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

type ButtonProps = {
  children: React.ReactNode;
};

const Button = ({ children }: ButtonProps) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
