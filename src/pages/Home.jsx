import React, { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import Hero from "../components/Hero";
import NewProductsCarousel from "../components/NewProductsCarousel";
import SalesCarousel from "../components/SalesCarousel"; // Asegúrate de importar correctamente el componente SalesCarousel

const Home = () => {
  const { products } = useContext(ProductContext);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const productsToShow = showAllProducts ? products : products.slice(0, 8);

  return (
    <div>
      <Hero />
      <SalesCarousel /> {/* Aquí se renderiza SalesCarousel al principio */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-sm mx-auto md:max-w-none md:mx-0">
            {productsToShow.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
          <div className="flex justify-center mt-8">
            {showAllProducts ? (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
                onClick={() => setShowAllProducts(false)}
              >
                Ver menos productos
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mr-4"
                onClick={() => setShowAllProducts(true)}
              >
                Ver todos los productos
              </button>
            )}
          </div>
        </div>
      </section>
      <NewProductsCarousel />{" "}
      {/* Aquí se renderiza NewProductsCarousel siempre */}
    </div>
  );
};

export default Home;
