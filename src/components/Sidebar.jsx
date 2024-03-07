import React, { useContext } from "react";
import { SiderbarContext } from "context/SidebarContext";

import { Link } from "react-router-dom";

import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { TbMoodEmpty } from "react-icons/tb";

import CartItem from "components/CartItem";

import { CartContext } from "context/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SiderbarContext);
  const { cart, setCart, addToCart, totalItems } = useContext(CartContext);

  const totalPrice = () => {
    return cart.reduce((sum, { price, amount }) => sum + price * amount, 0);
  };

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all duration-300 z-50 px-4 lg:px-[35px]`}
    >
      <div className="flex items-center justify-between py-6 border-b ">
        <div className="uppercase text-sm font-semibold">
          Shopping Cart ( {totalItems()} Items)
        </div>
        <div className="cursor-pointer flex items-center justify-center">
          <IoMdArrowForward
            onClick={() => handleClose()}
            className="text-3xl"
          />
        </div>
      </div>

      {cart.length > 0 ? (
        <>
          <div className="overflow-y-auto h-[520px] lg:h-[640px] gap-y-2 border-b">
            {cart.map((item) => (
              <CartItem item={item} key={item.id} />
            ))}
          </div>
          <div className="w-full min-h-[80px] grid grid-cols-3">
            <div className="flex items-center">
              <div
                className="h-7 w-7 bg-red-500 flex justify-center items-center text-white rounded ml-4 cursor-pointer hover:bg-red-600"
                onClick={() => setCart([])}
              >
                <FiTrash2 />
              </div>
            </div>
            <button className=" bg-blue-500 inline-block h-12 px-4 rounded hover:bg-blue-400 transition-all hover:h-11 hover:px-3 text-white font-medium self-center col-end-4 col-start-2 mr-4 ">
              Pay now, total: {totalPrice().toFixed(3)}
            </button>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center italic mt-[30px] pt-2">
          <p>There's nothing in cart yet!</p>
          <TbMoodEmpty className="text-4xl mt-1" />
        </div>
      )}
    </div>
  );
};

export default Sidebar;
