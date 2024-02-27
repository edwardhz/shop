import React from "react";
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import Product from "../components/Product";
import SearchBar from "../components/SearchBar";
import Hero from "../components/Hero"; // Asegúrate de importar correctamente el componente Hero

const Home = () => {
  const { products } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  return (
    <div>
      <Hero /> {/* Asegúrate de que Hero esté definido y sea accesible */}
      <SearchBar setFilteredProducts={setFilteredProducts} />
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-sm mx-auto md:max-w-none md:mx-0">
            {filteredProducts.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
