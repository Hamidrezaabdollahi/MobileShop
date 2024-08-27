import { createContext, useContext } from "react";
import useFetch from "../hooks/useFetch";

const ProductsContext = createContext();

export function ProductsProvider({ children }) {
    const { data } = useFetch("http://localhost:5001/products");

  return (
    <ProductsContext.Provider value={{data}}>{children}</ProductsContext.Provider>
  );
}

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (context === undefined)
    throw new Error("context used outside of provider");
  return context;
};
