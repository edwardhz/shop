// En tu archivo Home.js

import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import NewProductsCarousel from "../components/NewProductsCarousel";
import SalesCarousel from "../components/SalesCarousel"; // Asegúrate de importar correctamente el componente SalesCarousel
import "../style.css"; // Asegúrate de importar tu archivo de estilos donde defines la clase home-container

const Home = () => {
  const { products } = useContext(ProductContext);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const productsToShow = showAllProducts ? products : products.slice(0, 8);

  return (
    <div className="home-container">
      {" "}
      {/* Aplica la clase CSS al contenedor principal */}
      <Hero />
      <h2 className="text-2xl font-bold pt-[80px] mb-4 ml-[350px]">
        Current Sales
      </h2>
      <SalesCarousel /> {/* Aquí se renderiza SalesCarousel al principio */}
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-4 ml-[350px]">
          Featured Products
        </h2>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-sm mx-auto md:max-w-none md:mx-0">
            {productsToShow.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {showAllProducts ? (
              <button
                className="bg-secondary hover:bg-blue-600 text-white font-Roboto py-2 px-[90px] rounded-[10px] mr-4"
                onClick={() => setShowAllProducts(false)}
              >
                Ver menos productos
              </button>
            ) : (
              <button
                className="bg-secondary hover:bg-blue-600 text-white font-Roboto py-2 px-[90px] rounded-[10px] mr-4"
                onClick={() => setShowAllProducts(true)}
              >
                Ver todos los productos
              </button>
            )}
          </div>
        </div>
      </section>
      <h2 className="text-2xl font-bold mb-4 ml-[350px]">New Products</h2>
      <NewProductsCarousel />{" "}
      {/* Aquí se renderiza NewProductsCarousel siempre */}
    </div>
  );
};

export default Home;
