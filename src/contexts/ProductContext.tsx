import { createContext, useEffect, useState } from "react";
import { ICart } from "../interfaces/Item";

export type ProductContextType = {
  data: ICart;
  isLoading: boolean;
};

const initialProductState: ProductContextType = {
  data: {
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: [],
  },
  isLoading: false,
};

export const ProductContext =
  createContext<ProductContextType>(initialProductState);

const ProductContextProvider: React.FC<any> = ({ children }) => {
  const [data, setData] = useState<ICart>({
    subTotal: 0,
    shippingTotal: 0,
    discount: 0,
    total: 0,
    items: [],
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getProducts = async (): Promise<void> => {
    setIsLoading(true);
    const res = await fetch(
      "https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd"
    );
    const data = await res.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ data, isLoading }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
