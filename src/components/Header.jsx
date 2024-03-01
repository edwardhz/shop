import React, { useContext, useState, useEffect } from "react";
import { SiderbarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
// import SearchBar from "./SearchBar";

import { BsBag } from "react-icons/bs";
import { Link } from "react-router-dom";
import Logo from "../img/icon_shop.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SiderbarContext);
  const { totalItems } = useContext(CartContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  }, []);

  return (
    <header
      className={`${
        isActive ? "bg-blue-200 shadow-md " : "bg-blue-300 py-1"
      } fixed w-full z-10 transition-all`}
    >
      <div className="container mx-auto flex items-center justify-between h-full">
        <Link to="/">
          <div>
            <img className="w-[50px]" src={Logo} alt="" />
          </div>
        </Link>
        {/* <SearchBar /> Incluye el componente SearchBar aquí */}
        <div className="flex items-center justify-center flex-1">
          {/* <div className="relative mr-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-500"
            />
            <button className="absolute inset-y-0 right-0 px-3">
              {/* Aquí podrías agregar un icono de búsqueda si lo deseas 
              Buscar
            </button>
          </div> */}
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer inline-block relative"
        >
          <BsBag className="text-2xl" />
          <div className="bg-blue-100 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-black rounded-full flex justify-center items-center font-bold">
            <p>{totalItems()}</p>
          </div>
        </div>
      </div>

    </header>
  );
};

export default Header;
