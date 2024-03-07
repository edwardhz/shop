import React from "react";

import Img from "../img/woman.svg";

const Hero = () => {
  return (
    <section className="h-[424px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <h1 className="text-[70px] leading-[1.1] font-light mb-4 text-primary drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0)]">
            BEST SALES! <br />
            <span className="font-semibold">NOW</span>
          </h1>
          <div className="decoration-solid ml-2">
            <button className="bg-secondary hover:bg-blue-600 text-white font-Roboto py-2 px-4 rounded-lg mr-4">
              Shop now
            </button>
          </div>
        </div>
        <div className="hidden lg:block">
          <img className="w-full h-full" src={Img} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
