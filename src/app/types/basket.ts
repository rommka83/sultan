import { IProduct } from './product';

export interface IProductInBasket {
  product: IProduct;
  price: number;
  count: number;
}

export interface IBasket {
  generalPrice: number;
  generalCount: number;
  productsInBasket: IProductInBasket[];
}
