import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";
import moneyFormatter from "../helpers/moneyFormatter";
import ContentBox from "../styles/Products/ContentBox";
import ItemDisplay from "../styles/Products/ItemDisplay";
import ItemName from "../styles/Products/ItemName";
import MaxPrice from "../styles/Products/MaxPrice";
import Price from "../styles/Products/Price";
import Prices from "../styles/Products/Prices";
import StyledProdutosTitle from "../styles/Products/StyledProdutosTitle";
import Item from "../styles/Products/item";
import Image from "../styles/Products/Image";

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
