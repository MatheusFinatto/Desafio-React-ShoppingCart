interface IProduct {
  product: {
    sku: string;
    name: string;
    priceSpecification: {
      price: number;
      maxPrice: number;
    };
    imageObjects: {
      small: string;
    }[];
  };
}
