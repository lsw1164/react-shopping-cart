import "./css/index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "@common/constants";
import ProductListPage from "@pages/ProductListPage";
import ShoppingCartPage from "@pages/ShoppingCartPage";
import OrderListPage from "@pages/OrderListPage";
import GNB from "@components/GNB";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <GNB />
      <Routes>
        <Route path={RoutePath.ProductList} element={<ProductListPage />} />
        <Route path={RoutePath.ShoppingCart} element={<ShoppingCartPage />} />
        <Route path={RoutePath.OrderList} element={<OrderListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
