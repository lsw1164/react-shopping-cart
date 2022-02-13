import React from "react";
import { ReactComponent as CartSvg } from "@assets/cart.svg";
import { NavLink } from "react-router-dom";
import { RoutePath } from "@common/constants";

const GNB: React.FC = () => {
  return (
    <nav className="nav flex justify-around">
      <NavLink to={RoutePath.ProductList} className="flex-center">
        <CartSvg />
        <h1 className="nav-title">CLEAN CODE SHOP</h1>
      </NavLink>
      <div className="flex gap-15">
        <NavLink
          className="nav-button flex-col-center"
          to={RoutePath.ShoppingCart}
        >
          장바구니
        </NavLink>
        <NavLink
          className="nav-button flex-col-center"
          to={RoutePath.OrderList}
        >
          주문목록
        </NavLink>
      </div>
    </nav>
  );
};

export default GNB;
