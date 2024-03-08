import React from "react";
import { Link } from "react-router-dom";
import arrowLeft from "../img/arrowLeft.svg";
import arrowRight from "../img/arrowRight.svg";

const SalesCarousel = () => {
  return (
    <div className="flex justify-center">
      {/* Flecha a la izquierda */}
      <div className="flex items-center">
        {/* Flecha a la izquierda */}
        <div className="flex items-center">
          <div className="-mr-4 z-50">
            <img
              src={arrowLeft}
              alt="Flecha izquierda"
              className="h-8 w-8 text-gray-400 cursor-pointer"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex justify-center">
          {/* Primer producto */}
          <Link
            to="/product/163"
            className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition mr-4 bg-white"
          >
            <div className="w-[200px] mx-auto flex justify-center items-center relative">
              <img
                className="max-h-[160px] group-hover:scale-110 transition duration-100 object-cover w-full"
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
          </Link>

          {/* Segundo producto */}
          <Link
            to="/product/167"
            className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition mr-4 bg-white"
          >
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
          </Link>

          {/* Tercer producto */}
          <Link
            to="/product/164"
            className="border border-gray-200 rounded-lg shadow-md mb-4 relative overflow-hidden group transition bg-white"
          >
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
          </Link>
        </div>
      </div>

      {/* Flecha a la derecha */}
      <div className="flex items-center">
        <div className="-ml-4 z-50">
          <img
            src={arrowRight}
            href="arrow right carousel"
            className="h-8 w-8 text-gray-400 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default SalesCarousel;
