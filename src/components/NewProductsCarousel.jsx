import React from "react";
import shopArrow from "../img/shopArrow.svg";

const NewProductsCarousel = () => {
  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto whitespace-nowrap py-4">
        <div className="flex justify-center">
          <div className="border border-gray-200 rounded-lg shadow-md p-4 mr-4 bg-white">
            <div className="flex justify-center items-center mb-4">
              <img
                src="/img/DENVERBlackCodePerfume-60EaudeParfum-ForMenLongLastingLuxuryScentFragrance.jpg"
                alt="Imagen 1"
                className="w-full max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
              />
            </div>
            <div className="p-4 bg-opacity-50">
              <div className="text-3xl font-bold text-gray-700">
                <p className="font-Roboto text-lg mb-2">
                  Denver Black Code Perfume - 60 Eau de Parfum D
                </p>
                <button className="bg-secondary hover:bg-blue-600 text-white w-[142px] h-[36px] rounded-xl mt-4 flex">
                  <p className="w-3/4 text-lg font-Roboto self-center">
                    Shop Now
                  </p>
                  <img
                    src={shopArrow}
                    alt="flecha para comprar"
                    className="w-1/8 self-center"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-4 mr-4 bg-white">
            <div className="flex justify-center items-center mb-4">
              <img
                src="/img/EngageOneSoulGender-freePerfume,Unisex,LongLasting,CitrusandSpicy,FreeTesterwithpack,100.jpg"
                alt="Imagen 2"
                className="w-full max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
              />
            </div>
            <div className="p-4 bg-opacity-50">
              <div className="text-3xl font-bold text-gray-700">
                <p className="font-Roboto text-lg mb-2">
                  Engage One Soul Gender-free Perfume, Unisex E
                </p>
                <button className="bg-secondary hover:bg-blue-600 text-white w-[142px] h-[36px] rounded-xl mt-4 flex">
                  <p className="w-3/4 text-lg font-Roboto self-center">
                    Shop Now
                  </p>
                  <img
                    src={shopArrow}
                    alt="flecha para comprar"
                    className="w-1/8 self-center"
                  />
                </button>
              </div>
            </div>
          </div>
          <div className="border border-gray-200 rounded-lg shadow-md p-4 bg-white">
            <div className="flex justify-center items-center mb-4">
              <img
                src="/img/CharleneSprayMistPerfume30-Intimate(PACKOF2).jpg"
                alt="Imagen 3"
                className="w-full max-h-[160px] group-hover:scale-110 transition duration-100 object-cover"
              />
            </div>
            <div className="p-4 bg-opacity-50">
              <div className="text-3xl font-bold text-gray-700">
                <p className="font-Roboto text-lg mb-2">
                  Charlene Spray Mist Perfume 30 - Intimate C
                </p>
                <button className="bg-secondary hover:bg-blue-600 text-white w-[142px] h-[36px] rounded-xl mt-4 flex">
                  <p className="w-3/4 text-lg font-Roboto self-center">
                    Shop Now
                  </p>
                  <img
                    src={shopArrow}
                    alt="flecha para comprar"
                    className="w-1/8 self-center"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProductsCarousel;
