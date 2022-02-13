/*
  /products
*/

export interface IProduct {
  id: number;
  price: number;
  name: string;
  imageUrl: string;
}

export interface GetProdutResponse extends IProduct {}

export interface PostProductRequest {
  product: Omit<IProduct, "id">;
}

/*
  /carts
*/

export interface Cart {
  id: number;
  product: IProduct;
}

export interface GetCartResponse extends Cart {}

export interface PostCartRequest {
  product: IProduct;
}

/*
  /orders
*/

export interface OrderDetail extends IProduct {
  quantity: number;
}

export interface Order {
  id: number;
  orderDetails: OrderDetail[];
}

export interface GetOrderResponse extends Order {}

export interface PostOrderResponse {
  orderDetails: OrderDetail[];
}
