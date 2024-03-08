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

  return (
    <>
      <h1 className="text-2xl font-bold pt-[80px] mb-4 ml-[350px]">
        You also may interest in: consectetuer adipiscing elit
      </h1>
      <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-start">
            <div className="flex-1 text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
              <img
                className="max-w-[300px] lg:max-w-full mx-auto mb-4"
                src={`/img/${removerEspacios(product_name)}.jpg`}
                alt=""
              />
            </div>
            <div className="flex-1 mt-14 text-justify">
              <div className="shadow-xl rounded-lg p-4 mb-4 w-[391px]">
                <img
                  src={heartShop}
                  alt="me gusta"
                  className="ml-[330px] mt-[2px]"
                />
                <h1 className="text-xl font-Roboto mb-2 w-[351px] mt-10">
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
                <p className="w-[351px]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec qu
                </p>
                <button
                  onClick={() => addToCart(product, product.id)}
                  className="bg-secondary hover:bg-blue-600 text-white font-Roboto w-[351px] rounded-[10px] h-[36px] align-text-center mb-4 mt-4"
                >
                  Shop now
                </button>
                <button className="bg-secondary hover:bg-blue-600 text-white font-Roboto w-[351px] rounded-[10px] h-[36px] align-text-center mb-4">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="container justify-center">
          <h3 className="flex text-2xl font-bold pt-[80px] mb-[100px] ml-[350px]">
            Related products
          </h3>
          <div className="flex gap-1 justify-center items-center w-[800px] mt-[10px] ml-[400px]">
            {relatedProducts.map((relatedProduct) => (
              <Product
                product={relatedProduct}
                products={products}
                key={relatedProduct.id}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
