import React from "react";

const SalesCarousel = () => {
  return (
    <div className="flex justify-center">
      {/* Flecha a la izquierda */}
      <div className="flex items-center">
        <div className="mr-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap py-4">
        <h2 className="text-2xl font-bold mb-4 ml-4">Current Sales</h2>
        <div className="flex justify-center">
          {/* Primer producto */}
          <div className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition mr-4">
            <div className="w-[200px] mx-auto flex justify-center items-center relative">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
                src="/img/CarltonLondonIncenseEaudaparfum,PremiumLongLasting&RefreshingPerfumeforMen-100.jpg"
                alt="Carlton London Incense Eau da parfume"
              />
            </div>
            <div className="p-4 bg-gray-100 bg-opacity-50">
              <div className="font-bold text-lg mb-2">
                $<span className="text-blue-500">599.0</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">
                Carlton London Incense Eau da parfume
              </p>
            </div>
          </div>

          {/* Segundo producto */}
          <div className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition mr-4">
            <div className="w-[200px] mx-auto flex justify-center items-center relative">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
                src="/img/DenverHamiltonPerfume-100LongLastingPerfumeBodyScentforMen.jpg"
                alt="Producto 2"
              />
            </div>
            <div className="p-4 bg-gray-100 bg-opacity-50">
              <div className="font-bold text-lg mb-2">
                $<span className="text-blue-500">422.0</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">
                Denver Hamilton Perfume Long Lasting
              </p>
            </div>
          </div>

          {/* Tercer producto */}
          <div className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition">
            <div className="w-[200px] mx-auto flex justify-center items-center relative">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
                src="/img/CharlenesprayMistPerfume30-Intimate(PACKOF1).jpg"
                alt="Producto 3"
              />
            </div>
            <div className="p-4 bg-gray-100 bg-opacity-50">
              <div className="font-bold text-lg mb-2">
                $<span className="text-blue-500">149.0</span>
              </div>
              <p className="text-gray-700 font-bold mt-2">
                Charlene Spray Mist Perfume 30 Intimate
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Flecha a la derecha */}
      <div className="flex items-center">
        <div className="ml-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SalesCarousel;
