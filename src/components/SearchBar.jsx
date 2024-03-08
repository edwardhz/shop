import React, { useState, useEffect } from "react";

const SearchBar = ({ setFilteredProducts }) => {
  const [product, setProduct] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "http://localhost:3005/plants";

  const fetchData = async () => {
    try {
      const response = await fetch(URL);
      const data = await response.json();
      setProduct(data);
      // Inicializa los productos filtrados con todos los productos
      setFilteredProducts(data);
    } catch (error) {
      console.error("Error al obtener los datos:", error);
    }
  };

  const filterProducts = (searchTerm) => {
    const filtered = product.filter((item) =>
      item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearch = (e) => {
    setSearch(e.target.value);
    filterProducts(e.target.value);
  };

  useEffect(() => {
    fetchData();
    // Agrega un efecto de limpieza para restablecer los productos filtrados cuando se desmonte el componente
    return () => setFilteredProducts([]);
  }, []);

  return (
    <div className="justify-center items-center w-full">
      <div className="relative mr-4">
        <input
          value={search}
          onChange={handleSearch}
          type="text"
          placeholder="Buscar productos"
          className="px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-blue-500 text-left w-full searchbar-container"
        />
      </div>
    </div>
  );
};

export default SearchBar;