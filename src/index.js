import  ReactDOM  from "react-dom/client";
import React from 'react';
import App from './App';
import './style.css'
import ProductProvider from "./context/ProductContext";
import SidebarProvider from "./context/SidebarContext";
import CartProvider from "./context/CartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<SidebarProvider>
  <CartProvider>
    <ProductProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </ProductProvider>
  </CartProvider>
</SidebarProvider>
);