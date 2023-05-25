import styled from "styled-components";

const Line = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  justify-content: space-between;
  width: 90%;
  height: 22px;
  font-weight: 400;
  line-height: 16px;

  &:last-of-type {
    font-weight: 700;
  }
  &:last-of-type span {
    font-size: 16px;
  }
`;

const StyledSummary = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 28px;
  padding: 0px;
  gap: 8px;
`;

const Discount = styled.span`
  font-weight: 700;
  color: #9222dc;
`;

export { Line, StyledSummary, Discount };
