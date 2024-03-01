import React, { createContext, useState, useEffect } from "react";

// context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  //products state
  const [products, setProducts] = useState([]);
  // fetch products
  useEffect(()=>{
    const fetchProducts = async ()=>{
      const response = await fetch('http://localhost:3005/plants');
      const data = await response.json()
      setProducts(data)
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
