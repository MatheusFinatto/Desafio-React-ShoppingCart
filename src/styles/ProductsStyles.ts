import { styled } from "styled-components";

const ContentBox = styled.div`
  background-color: white;
  height: 324px;
  width: 357px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border: 1px solid #ccc;
`;

const Item = styled.li`
  display: flex;
  padding: 9.5px;
  align-items: center;
  overflow: hidden;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
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

export { ContentBox, Item, Image, ItemName, Prices, MaxPrice, Price };
