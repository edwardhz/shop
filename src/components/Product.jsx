import React, { useContext } from "react";
import cartIntoCard from "../img/cartIntoCard.svg";
import { CartContext } from "../context/CartContext";

const Product = ({ product, products }) => {
  const { addToCart } = useContext(CartContext);

  function removerEspacios(texto) {
    return texto.replace(/\s/g, "");
  }

  const { id, Relevance, Descuentos, price, product_name, category } = product;

  const handleOpenDetailsProduct = (product) => {
    let allProducts =
      JSON.parse(localStorage.getItem("allProductsData")) || products;

    localStorage.setItem("allProductsData", JSON.stringify(allProducts));

    const form = {
      user_name: "usuario123",
      product_user_input: product.product_name,
      product_ID: "product_name",
      dataset: allProducts,
      descuento: 20,
      price_column: "price",
      category_discounts: {
        "Carlton London": [5, 20],
        Denver: [5, 20],
        Engage: [5, 20],
        Envy: [5, 20],
        FOGG: [5, 20],
        "KS WOMAN": [5, 20],
        "LA' French": [5, 20],
        Ahava: [5, 20],
        "Alpha Skin Care": [5, 20],
        "American Crew": [5, 20],
        "Ariana Grande": [5, 20],
        "Babo Botanicals": [5, 20],
        "Baxter of California": [5, 20],
        Beast: [5, 20],
        "Beekman 1802": [5, 20],
        Bliss: [5, 20],
        boscia: [5, 20],
        Briogeo: [5, 20],
        Bushbalm: [5, 20],
        "Buttah Skin": [5, 20],
        Cetaphil: [5, 20],
        Clarins: [5, 20],
        Clinique: [5, 20],
        "Coco & Eve": [5, 20],
        "Da Bomb": [5, 20],
        "Daily Concepts": [5, 20],
        Dermalogica: [5, 20],
        Differin: [5, 20],
        Dionis: [5, 20],
        "Dr Teal's": [5, 20],
      },
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

  const handleAddToCart = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del enlace
    addToCart(product, id, products);
  };

  return (
    <div
      className="border border-gray-200 rounded-lg shadow-xl relative overflow-hidden group transition w-[400px] bg-white"
      onClick={() => handleOpenDetailsProduct(product)}
    >
      <a href={`/product/${id}`} className="group">
        <div className="w-full h-[300px] mx-auto relative">
          <img
            className="object-fill w-full h-full relative top-0 left-0 px-[30px] pt-[15px]"
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
