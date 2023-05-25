import styled from "styled-components";
import { IProducts } from "../interfaces/Item";
import { useEffect } from "react";
import LoadingSpinner from "../components/LoadingSpinner";

const BagSection = styled.section`
  padding: 20px 8px;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled.div`
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

type BagProps = {
  data: {
    items: IProducts[];
  };
  loading: boolean;
};

type BagType = React.FC<BagProps>;

const Bag: BagType = ({ data, loading }: BagProps): JSX.Element => {
  if (loading) {
    return (
      <BagSection>
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LoadingSpinner />
        </Box>
      </BagSection>
    );
  }

  return (
    <BagSection>
      <Box>
        {data.items.map((item: IProducts) => (
          <Item key={item.product.sku}>
            <Image
              src={`${item.product.imageObjects[0].small}`}
              alt={item.product.name}
            />
            <ItemName>{item.product.name}</ItemName>
            <Prices>
              {item.product.priceSpecification.maxPrice >
                item.product.priceSpecification.price && (
                <MaxPrice>
                  {item.product.priceSpecification.maxPrice.toLocaleString(
                    "pt-br",
                    {
                      style: "currency",
                      currency: "BRL",
                    }
                  )}
                </MaxPrice>
              )}
              <Price>
                {item.product.priceSpecification.price.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Price>
            </Prices>
          </Item>
        ))}
      </Box>
    </BagSection>
  );
};

export default Bag;
