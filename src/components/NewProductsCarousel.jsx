import React from "react";

const NewProductsCarousel = () => {
  return (
    <div className="flex justify-center mb-8">
      {" "}
      {/* Agregar margen inferior */}
      <div className="overflow-x-auto whitespace-nowrap py-2">
        <h2 className="text-2xl font-bold mb-2 ml-4">New Products</h2>
        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-lg shadow-md p-16 mr-16">
            <img
              src="/ruta/a/tu/imagen1.jpg"
              alt="Imagen 1"
              className="w-[300px] h-[auto] mb-4"
            />
            <div className="text-3xl font-bold">
              $<span className="text-gray-500">000000</span> $
              <span className="text-gray-500">000000</span>
            </div>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2">
              Shop Now
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-16 mr-16">
            <img
              src="/ruta/a/tu/imagen2.jpg"
              alt="Imagen 2"
              className="w-[300px] h-[auto] mb-4"
            />
            <div className="text-3xl font-bold">
              $<span className="text-gray-500">111111</span> $
              <span className="text-gray-500">111111</span>
            </div>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2">
              Shop Now
            </button>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-16">
            <img
              src="/ruta/a/tu/imagen3.jpg"
              alt="Imagen 3"
              className="w-[300px] h-[auto] mb-4"
            />
            <div className="text-3xl font-bold">
              $<span className="text-gray-500">222222</span> $
              <span className="text-gray-500">222222</span>
            </div>
            <p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-2">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsCarousel;
