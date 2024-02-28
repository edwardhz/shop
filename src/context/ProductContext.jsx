import React, { createContext, useState, useEffect } from "react";

// context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch(
        "https://fakestoreapi.com/products?limit=10"
      );
      const data = await response.json();
      setProducts(data);
      console.log(data);
    };
    fetchProducts();
  }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
