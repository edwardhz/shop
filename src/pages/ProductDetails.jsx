import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import Product from "../components/Product";
import heartShop from "../img/heartShop.svg";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const currentProduct = products.find(
    (product) => product.id === parseInt(id)
  );

  // Función para remover espacios de un string
  const removerEspacios = (str) => {
    return str.replace(/\s+/g, "");
  };

  // Buscar el producto actual por ID
  const product = products?.find((item) => item.id == parseInt(id));

  // Obtener productos relacionados basados en la categoría del producto actual
  useEffect(() => {
    if (product) {
      let allProducts =
        JSON.parse(localStorage.getItem("allProductsData")) ||
        (products ? products : []);

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
          localStorage.setItem(
            "allProductsData",
            JSON.stringify(response.data.all_products)
          );
          localStorage.setItem(
            "recommendationsProductsData",
            JSON.stringify(response.data.recommended_products)
          );
          setRelatedProducts(response.data.recommended_products);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [product]);

  if (!product) {
    return (
      <section className="min-h-screen flex justify-center items-center">
        Loading..
      </section>
    );
  }

  const { product_name, price } = product;

  function capitalizeWords(text) {
    // Dividimos el texto en palabras utilizando el espacio como separador
    const words = text.split(" ");

    // Transformamos cada palabra para que su primera letra sea mayúscula
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Unimos las palabras transformadas en una cadena y la retornamos
    return capitalizedWords.join(" ");
  }

  return (
    <>
      <h1 className="text-2xl font-bold mt-[100px] w-full px-[15%]">
        You also may interest in: {capitalizeWords(product_name)}
      </h1>
      <section className="pt-[60px] pb-[100px] flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start justify-center gap-[50px] text-center">
            <div className="text-center lg:text-left pt-[15px] px-[55px] rounded-lg bg-[#fff]">
              <img
                className="max-w-[680px] mx-auto mb-4"
                src={`/img/${removerEspacios(product_name)}.jpg`}
                alt=""
              />
            </div>
            <div className="w-[391px]">
              <div className="shadow-xl rounded-lg bg-[#fff] p-[30px] w-[440px]">
                <img
                  src={heartShop}
                  alt="me gusta"
                  className="ml-[90%] w-[30px] flex justify-end"
                />
                <h1 className="text-xl font-Roboto mb-2  mt-2">
                  {product_name}
                </h1>
                <div className="flex items-center mb-2">
                  <span className="text-2xl mr-1">⭐️</span>
                  <span className="text-2xl mr-1">⭐️</span>
                  <span className="text-2xl mr-1">⭐️</span>
                  <span className="text-2xl mr-1">⭐️</span>
                  <span className="text-2xl">⭐️</span>
                </div>
                <div className="text-6xl font-medium text-black-500 mb-4">
                  $ {price}
                </div>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec qu
                </p>
                <div className="flex w-full justify-center items-center flex-col gap-[20px] mt-4">
                  <button
                    onClick={() => addToCart(product, product.id)}
                    className="bg-secondary hover:bg-blue-600 text-white font-Roboto  rounded-[10px] h-[36px] align-text-center w-[351px]"
                  >
                    Shop now
                  </button>
                  <button className="bg-secondary hover:bg-blue-600 text-white font-Roboto  rounded-[10px] h-[36px] align-text-center w-[351px]">
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[100px]">
        <h3 className="flex text-2xl font-bold ml-[15%] mb-[30px]">
          Related products
        </h3>
        <div className="flex gap-[20px] justify-center items-center">
          {relatedProducts
            .filter((relatedProduct) => relatedProduct.id !== currentProduct.id)
            .map((relatedProduct) => (
              <Product
                product={relatedProduct}
                products={products}
                key={relatedProduct.id}
              />
            ))}
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
