import React, { createContext, useState, useEffect } from "react";

// context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('https://dummyjson.com/products?limit=100');
      const data = await response.json()
      setProducts(data.products)
      console.log(data)
      

    }
    fetchProducts()
  },[])
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
