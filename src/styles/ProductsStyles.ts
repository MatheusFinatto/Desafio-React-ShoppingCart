import { styled } from "styled-components";

const ContentBox = styled.div`
  background-color: white;
  width: 357px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  border: 1px solid #ccc;
  padding-top: 24px;
`;

const ItemDisplay = styled.ul``;

const Item = styled.li`
  display: flex;
  padding: 0 9.5px;
  overflow: hidden;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  margin-bottom: 40px;
`;

const ItemName = styled.p`
  font-size: 12px;
  padding: 0 15px;
  line-height: 16px;
`;

const Prices = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 16px;
  font-size: 14px;
  font-family: Arial;
`;

const MaxPrice = styled.p`
  font-weight: 400;
  color: #9b9b9b;
  text-decoration: line-through;
`;

const Price = styled.p`
  font-weight: 700;
  text-align: right;
`;

const StyledProdutosTitle = styled.h2`
  font-family: Jost;
  font-size: 20px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  width: calc(100% - 20px);
  margin-left: 10px;
`;

export {
  ContentBox,
  ItemDisplay,
  Item,
  Image,
  ItemName,
  Prices,
  MaxPrice,
  Price,
  StyledProdutosTitle,
};
