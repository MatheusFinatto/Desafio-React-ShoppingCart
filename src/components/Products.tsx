import {
  ContentBox,
  Image,
  Item,
  ItemDisplay,
  ItemName,
  MaxPrice,
  Price,
  Prices,
  StyledProdutosTitle,
} from "../styles/ProductsStyles";
import moneyFormatter from "../helpers/moneyFormatter";
import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";

interface ProductsProps {
  isConfirmation?: boolean;
}
const Products: React.FC<ProductsProps> = ({ isConfirmation }) => {
  const { data } = useContext(ProductContext);
  const { items } = data;

  return (
    <ContentBox>
      {isConfirmation && <StyledProdutosTitle>Produtos</StyledProdutosTitle>}
      <ItemDisplay>
        {items.map(({ product }) => {
          const { price, maxPrice } = product.priceSpecification;
          const { small } = product.imageObjects[0];

          return (
            <Item key={product.sku}>
              <Image src={small} alt={product.name} />
              <ItemName>{product.name}</ItemName>
              {!isConfirmation && (
                <Prices>
                  {maxPrice > price && (
                    <MaxPrice>{moneyFormatter(maxPrice)}</MaxPrice>
                  )}
                  <Price>{moneyFormatter(price)}</Price>
                </Prices>
              )}
            </Item>
          );
        })}
      </ItemDisplay>
    </ContentBox>
  );
};

export default Products;
