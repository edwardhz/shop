import React, { useContext, useState, useEffect } from "react";
import { SiderbarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";
import { ProductContext } from "../context/ProductContext";
import downArrow from "../img/downArrow.svg";
import signIn from "../img/signIn.svg";
import heart from "../img/heart.svg";
import "../style.css";

import BsBag from "../img/icon_cart.svg";
import { Link } from "react-router-dom";
import Logo from "../img/icon_shop.svg";

const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const { isOpen, setIsOpen } = useContext(SiderbarContext);
  const { totalItems } = useContext(CartContext);
  const { products, setProducts } = useContext(ProductContext);
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
    setProducts(filteredProducts);
  }, [filteredProducts]);

  return (
    <header className="header-color h-[80px]">
      <div className="container mx-auto flex items-center justify-between h-full relative">
        <Link to="/">
          <div>
            <img className="w-[80px]" src={Logo} alt="" />
          </div>
        </Link>
        <ul className="flex items-center justify-center gap-[40px] text-white">
          <li>Home</li>
          <li className="flex items-center">
            Catalog{" "}
            <span className="ml-1">
              <img
                src={downArrow}
                alt="flecha hacia abajo"
                className="self-center"
              />
            </span>
          </li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
        <div className="w-[315px]">
          <SearchBar setFilteredProducts={setFilteredProducts} />
        </div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer inline-block relative"
        >
          <div className="flex gap-4">
            <img src={heart} alt="corazon" className="text-2xl" />
            <div className="header-cart absolute top-0 right-0 mt-[-10px] mr-[-10px] bg-white rounded-full w-[20px] h-[20px] flex items-center justify-center text-xs text-black">
              <p>{totalItems()}</p>
            </div>
            <img src={signIn} alt="sesión" className="text-2xl" />
            <img src={BsBag} className="text-2xl" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
