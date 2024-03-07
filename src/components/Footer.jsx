import React from "react";
import iconShop from "../img/icon_shop.svg";

const Footer = () => {
  return (
    <footer className="header-color py-4">
      <div className="flex justify-center  h-[147px]">
        <img src={iconShop} alt="logo" className="w-[190px]" />
      </div>
    </footer>
  );
};

export default Footer;
