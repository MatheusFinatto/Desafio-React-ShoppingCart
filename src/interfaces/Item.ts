export interface ICart {
  subTotal: number;
  shippingTotal: number;
  discount: number;
  total: number;
  items: IProducts[];
}

export interface IProducts {
  product: Product;
}

type Product = {
  sku: string;
  name: string;
  imageObjects: { small: string }[];
  priceSpecification: {
    maxPrice: number;
    price: number;
  };
};
