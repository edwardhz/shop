import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";
import axios from "axios";
import Product from "../components/Product";

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

  const { product_name, price, category, image } = product;

  return (
    <>
      <h1 className="text-3xl font-bold mb-2">
        You also may interest in: consectetuer adipiscing elit
      </h1>
      <section className="pt-32 pb-12 lg:py-32 min-h-screen flex items-center">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 text-center lg:text-left lg:mr-8 mb-8 lg:mb-0">
              <img
                className="max-w-[400px] lg:max-w-full mx-auto mb-4"
                src={`/img/${removerEspacios(product_name)}.jpg`}
                alt=""
              />
            </div>
            <div className="flex-1 mt-14">
              <h1 className="text-3xl font-bold mb-2">{product_name}</h1>
              <div className="flex">
                <span className="text-2xl mr-1">⭐️</span>
                <span className="text-2xl mr-1">⭐️</span>
                <span className="text-2xl mr-1">⭐️</span>
                <span className="text-2xl mr-1">⭐️</span>
                <span className="text-2xl">⭐️</span>
              </div>
              <div className="text-xl font-medium text-blue-500 mb-4">
                $ {price}
              </div>
              <p className="mb-4">{category}</p>
              <button
                onClick={() => addToCart(product, product.id)}
                className="bg-primary py-4 px-8 text-white mr-4"
              >
                Add to cart
              </button>
              <button className="border py-4 px-8 text-primary">
                Shop now
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="min-h-screen">
        <div className="container mx-auto">
          <h3 className="text-xl font-semibold mb-4 flex justify-center items-center mb-8">
            Related products
          </h3>
          <div className="flex gap-8 justify-center items-center">
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
