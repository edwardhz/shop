import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import axios from "axios";

const Product = ({ product, products }) => {
  const { addToCart } = useContext(CartContext);
  const { id, image, date, price, product_name, category } = product;

  const handleOpenDetailsProduct = (product) => {
    let allProducts =
      JSON.parse(localStorage.getItem("allProductsData")) || products;

    localStorage.setItem("allProductsData", JSON.stringify(allProducts));

    const form = {
      user_name: "usuario123",
      product_user_input: product.product_name,
      product_ID: "product_name",
      dataset: allProducts,
    };

    axios
      .post("http://127.0.0.1:5000/recommendations", form)
      .then((response) => {
        console.log(response.data.recommended_products);
        localStorage.setItem(
          "allProductsData",
          JSON.stringify(response.data.all_products)
        );
        localStorage.setItem(
          "recommendationsProductsData",
          JSON.stringify(response.data.all_products)
        );
      })
      .catch((error) => {
        console.error(error);
      });
  };

  function removerEspacios(texto) {
    return texto.replace(/\s/g, "");
  }

  return (
    <div className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition ">
      <div className="flex flex-col items-center">
        <div className="w-[200px] mx-auto flex justify-center items-center relative">
          <img
            className="max-h-[160px] group-hover:scale-110 transition duration-100"
            src={`/img/${removerEspacios(product_name)}.jpg`}
            alt={product_name}
          />
          <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <button
              onClick={() => addToCart(product, id, products)}
              className="flex justify-center items-center text-white w-10 h-10 bg-blue-500 rounded-full"
            >
              <BsPlus className="text-xl" />
            </button>
            <Link
              to={`/product/${id}`}
              className="ml-2 w-10 h-10 bg-white flex justify-center items-center text-primary rounded-full"
            >
              <BsEyeFill
                onClick={() => handleOpenDetailsProduct(product)}
                className="text-xl"
              />
            </Link>
          </div>
        </div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold text-center mb-1">{product_name}</h2>
        </Link>
        <div className="font-semibold">$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
