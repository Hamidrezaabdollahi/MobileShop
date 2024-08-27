import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import SinglePageLayout from "./components/SinglePageLayout";

import CartLayout from "./components/CartLayout";
import Favorites from "./components/Favorites";
import Categories from "./components/Categories";
import { ProductsProvider } from "./context/ProductsContext";

export default function App() {
  return (
    <ProductsProvider>
      <Routes>
        <Route path="/products" element={<Layout />} />
        <Route path="/products/:id" element={<SinglePageLayout />} />
        <Route path="/cart" element={<CartLayout />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </ProductsProvider>
  );
}
