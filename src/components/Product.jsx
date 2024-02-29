import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Product = ({product, products}) => {
  const {addToCart} = useContext(CartContext);
  const {id, image, description, price, title,category} = product;

  const handleOpenDetailsProduct = (product) => {
    let allProducts = JSON.parse(localStorage.getItem('productsData')) || products;

    localStorage.setItem('productsData', JSON.stringify(allProducts));
    
    const form = {
      'user_name': 'usuario123',
      'product_user_input': product.category,
      'product_ID': 'title',
      'dataset': allProducts
    }

    axios.post('http://127.0.0.1:5000/recommendations', form)
        .then(response => {
          console.log(response.data.all_products);
          localStorage.setItem('productsData', JSON.stringify(response.data.all_products));
        })
        .catch(error => {
          console.error(error);
        });
  }

  return (
    <div>
      <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition ">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[200px] mx-auto flex justify-center items-center">
            <img
              className="max-h-[160px] group-hover:scale-110 transition duration-100"
              src={image}
              alt={description}
            />
          </div>
        </div>

        <div
          className="absolute bottom-6 -right-11 group-hover:right-4 p-2
        flex flex-col items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
        >
          <button
            onClick={() => addToCart(product, id, products)}
            className="flex justify-center items-center text-white w-12 h-12 bg-blue-500 rounded-full"
          >
            <BsPlus className="text-3xl" />
          </button>
          <Link to={`/product/${id}`} className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-x1'>
            <BsEyeFill 
              onClick={() => handleOpenDetailsProduct(product)}
              className='text-xl' />
          </Link>
        </div>
      </div>

      <div>
        <div className="text-sm capitalize text-gray-500 mb-1">{category}</div>
        <Link to={`/product/${id}`}>
          <h2 className="font-semibold mb-1">{title}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
      </div>
    </div>
  );
};

export default Product;
