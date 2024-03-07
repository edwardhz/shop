import React, { useContext } from "react";
import cartIntoCard from "../img/cartIntoCard.svg";
import { CartContext } from "../context/CartContext";

const Product = ({ product, products }) => {
  const { addToCart } = useContext(CartContext);
  const { id, product_name, price, category } = product;

  function removerEspacios(texto) {
    return texto.replace(/\s/g, "");
  }

  const handleAddToCart = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    addToCart(product, id, products);
  };

  return (
    <div className="border border-gray-200 rounded-lg shadow-xl mb-4 relative overflow-hidden group transition mr-4">
      <a href={`/product/${id}`} className="group">
        <div className="w-full h-[300px] mx-auto relative bg-white">
          <img
            className="object-fill w-full h-full relative top-0 left-0"
            src={`/img/${removerEspacios(product_name)}.jpg`}
            alt={product_name}
          />
        </div>
        <div className="p-4 bg-gray-100 bg-opacity-50 product-details-container h-full">
          <div className="font-bold text-lg mb-2">
            $<span className="text-blue-500">{price}</span>
          </div>
          <div className="font-bold text-lg mb-2 h-14 overflow-hidden w-full">
            {product_name}
          </div>
          <button
            onClick={handleAddToCart}
            className="text-white py-[25px] px-4 rounded-md float-right"
          >
            <img src={cartIntoCard} alt="Cart Into Card" />
          </button>
        </div>
      </a>
    </div>
  );
};

export default Product;
