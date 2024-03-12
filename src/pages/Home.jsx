import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import NewProductsCarousel from "../components/NewProductsCarousel";
import SalesCarousel from "../components/SalesCarousel";
import ProductsRecommendation from "../components/ProductsRecommendation";
import "../style.css";

const Home = () => {
  const { products } = useContext(ProductContext);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const productsToShow = showAllProducts ? products : products.slice(0, 8);

  const recommendationsProductsData =
    JSON.parse(localStorage.getItem("recommendationsProductsData")) || [];

  return (
    <div className="home-container">
      <Hero />
      <h2 className="text-2xl font-bold pt-[80px] mb-4 ml-[20%]">
        Current Sales
      </h2>
      <SalesCarousel />
      <ProductsRecommendation
        title="Por lo ultimo que buscaste"
        products={recommendationsProductsData}
      />
      <ProductsRecommendation
        title="Hecho para ti"
        products={recommendationsProductsData}
      />
      <ProductsRecommendation
        title="¿Una cita importante?"
        products={recommendationsProductsData}
      />
      <ProductsRecommendation
        title="Causa una buena impresión"
        products={recommendationsProductsData}
      />
      <section className="py-16">
        <h2 className="text-2xl font-bold mb-4 ml-[20%]">Featured Products</h2>
        <div className="w-[80%] m-auto">
          <div className="flex flex-wrap justify-center gap-[15px]">
            {productsToShow.map((product) => (
              <Product product={product} products={products} key={product.id} />
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
      <h2 className="text-2xl font-bold mb-4 ml-[20%]">New Products</h2>
      <NewProductsCarousel />
    </div>
  );
};

export default Home;
