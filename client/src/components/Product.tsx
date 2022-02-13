import React from "react";
import { ReactComponent as CartSvg } from "@assets/cart.svg";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl }) => {
  return (
    <div data-id={id}>
      <img src={imageUrl} className="product-img" />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}</span>
        </div>
        <CartSvg
          onClick={() => {
            console.log("on click cart svg");
          }}
        />
      </div>
    </div>
  );
};
export default Product;
