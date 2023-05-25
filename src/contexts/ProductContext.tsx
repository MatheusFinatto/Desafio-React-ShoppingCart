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

type Props = {
  children: React.ReactNode;
};

const ProductContextProvider: React.FC<Props> = ({ children }) => {
  const [data, setData] = useState<ICart>(initialProductState.data);
  const [isLoading, setIsLoading] = useState<boolean>(
    initialProductState.isLoading
  );

  const getProducts = async (): Promise<void> => {
    setIsLoading(true);
    try {
      const res = await fetch(
        "https://run.mocky.io/v3/d6e9a93f-9741-4494-b81e-637a8e9b8ddd"
      );
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setIsLoading(false);
    }
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
