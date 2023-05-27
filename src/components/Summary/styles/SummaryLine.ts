import { styled } from "styled-components";

const SummaryLine = styled.div`
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

export default SummaryLine;
