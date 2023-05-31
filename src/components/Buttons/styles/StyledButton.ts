import { styled } from "styled-components";

const StyledButton = styled.button<{ $inputColor?: string }>`
  margin: 0 20px;
  height: 48px;
  width: calc(100vw - 40px);
  border-radius: 4px;
  display: flex;
  padding: 16px 8px;
  background: ${({ $inputColor }) => $inputColor};
  border: none;
  font-weight: 700;
  font-size: 18px;
  color: #ffffff;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  margin-bottom: 50px;
`;

export default StyledButton;
