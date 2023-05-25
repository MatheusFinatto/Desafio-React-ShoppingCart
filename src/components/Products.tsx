import {
  ContentBox,
  Image,
  Item,
  ItemName,
  MaxPrice,
  Price,
  Prices,
} from "../styles/ProductsStyles";
import moneyFormatter from "../helpers/moneyFormatter";
import { IProducts } from "../interfaces/Item";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

const Products = () => {
  const { data } = useContext(ProductContext);
  const { items } = data;

  return (
    <ContentBox>
      {items.map(({ product }) => {
        const { price, maxPrice } = product.priceSpecification;
        const { small } = product.imageObjects[0];

        return (
          <Item key={product.sku}>
            <Image src={small} alt={product.name} />
            <ItemName>{product.name}</ItemName>
            <Prices>
              {maxPrice > price && (
                <MaxPrice>{moneyFormatter(maxPrice)}</MaxPrice>
              )}
              <Price>{moneyFormatter(price)}</Price>
            </Prices>
          </Item>
        );
      })}
    </ContentBox>
  );
};

export default Products;
