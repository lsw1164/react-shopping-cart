import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutePath } from "@common/constants";
import ProductListPage from "@pages/ProductListPage";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path={RoutePath.ProductList} element={<ProductListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
