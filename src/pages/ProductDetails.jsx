import React, { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { CartContext } from "../context/CartContext";

const ProductDetails = () => {
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [relatedProducts, setRelatedProducts] = useState([]);

  // Buscar el producto actual por ID
  const product = products.find((item) => item.id === parseInt(id));

  // Obtener productos relacionados basados en la categoría del producto actual
  useEffect(() => {
    if (product) {
      const fetchRelatedProducts = async () => {
        try {
          const response = await fetch(
            `https://fakestoreapi.com/products/category/${product.category}`
          );
          const data = await response.json();
          // Filtrar productos para excluir el producto actual
          const filteredProducts = data.filter(
            (item) => item.id !== product.id
          );
          setRelatedProducts(filteredProducts);
        } catch (error) {
          console.error("Error fetching related products:", error);
        }
      };

      fetchRelatedProducts();
    }
  }, [product]);

  if (!product) {
    return (
      <section className="h-screen flex justify-center items-center">
        Loading..
      </section>
    );
  }

  const { title, price, description, image } = product;

  return (
    <section className="pt-32 pb-12 lg:py-32 h-screen flex items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="flex flex-1 justify-center items-center mb-8 lg:mb-0">
            <img className="max-w-[200px] lg:max-w-sm" src={image} alt="" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">
              {title}
            </h1>
            <div className="text-xl font-medium text-blue-500 mb-6">
              $ {price}
            </div>
            <p className="mb-8">{description}</p>
            <button
              onClick={() => addToCart(product, product.id)}
              className="bg-primary py-4 px-8 text-white "
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {/* Mostrar productos relacionados */}
      <h3 className="mt-8 mb-4 text-xl font-semibold">
        Productos relacionados:
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {relatedProducts.map((relatedProduct) => (
          <div key={relatedProduct.id} className="text-center">
            <img
              className="max-w-[100px] mx-auto mb-2"
              src={relatedProduct.image}
              alt={relatedProduct.description}
            />
            <h4 className="text-sm font-semibold">{relatedProduct.title}</h4>
            <p className="text-sm">${relatedProduct.price}</p>
            <button
              onClick={() => addToCart(relatedProduct, relatedProduct.id)}
              className="bg-primary py-2 px-4 text-white mt-2"
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductDetails;
