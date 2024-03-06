import React, { useContext, useState, useEffect } from "react";
import { SiderbarContext } from "../context/SidebarContext";
import { CartContext } from "../context/CartContext";
import SearchBar from "./SearchBar";
import { ProductContext } from "../context/ProductContext";
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
    <header className="header-color">
      <div className="container mx-auto flex items-center justify-between h-full relative">
        <Link to="/">
          <div>
            <img className="w-[50px]" src={Logo} alt="" />
          </div>
        </Link>
        <ul className="flex items-center justify-center flex-1 gap-4 text-white">
          <li>Home</li>
          <li>
            Catalog <span>.</span>
          </li>
          <li>Contact</li>
          <li>About us</li>
        </ul>
        <SearchBar setFilteredProducts={setFilteredProducts} />
        <div className="flex items-center justify-center flex-1"></div>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer inline-block relative"
        >
          <img src={BsBag} className="text-2xl" />
          <div className="header-cart absolute top-0 right-0 mt-[-10px] mr-[-10px] bg-white rounded-full w-[20px] h-[20px] flex items-center justify-center text-xs text-black">
            <p>{totalItems()}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
