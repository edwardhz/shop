import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { BsPlus, BsEyeFill } from 'react-icons/bs';
import { CartContext } from '../context/CartContext';
import axios from 'axios';

const Product = ({ product, products }) => {
  const { addToCart } = useContext(CartContext);
  const { id, Relevance, Descuentos, price, product_name, category } = product;

  const handleOpenDetailsProduct = (product) => {
    let allProducts = JSON.parse(localStorage.getItem('allProductsData')) || products;

    localStorage.setItem('allProductsData', JSON.stringify(allProducts));

    const form = {
      'user_name': 'usuario123',
      'product_user_input': product.product_name,
      'product_ID': 'product_name',
      'dataset': allProducts,
      'descuento': 20,
      'price_column': 'price',
      'category_discounts': {
        'Carlton London': [5, 20],
        'Denver': [5, 20],
        'Engage': [5, 20],
        'Envy': [5, 20],
        'FOGG': [5, 20],
        'KS WOMAN': [5, 20],
        "LA' French": [5, 20],
        'Ahava': [5, 20],
        'Alpha Skin Care': [5, 20],
        'American Crew': [5, 20],
        'Ariana Grande': [5, 20],
        'Babo Botanicals': [5, 20],
        'Baxter of California': [5, 20],
        'Beast': [5, 20],
        'Beekman 1802': [5, 20],
        'Bliss': [5, 20],
        'boscia': [5, 20],
        'Briogeo': [5, 20],
        'Bushbalm': [5, 20],
        'Buttah Skin': [5, 20],
        'Cetaphil': [5, 20],
        'Clarins': [5, 20],
        'Clinique': [5, 20],
        'Coco & Eve': [5, 20],
        'Da Bomb': [5, 20],
        'Daily Concepts': [5, 20],
        'Dermalogica': [5, 20],
        'Differin': [5, 20],
        'Dionis': [5, 20],
        "Dr Teal's": [5, 20],
      }

    }

    axios.post('http://127.0.0.1:5000/recommendations', form)
      .then(response => {
        console.log(response.data.recommended_products);
        localStorage.setItem('allProductsData', JSON.stringify(response.data.all_products));
        localStorage.setItem('recommendationsProductsData', JSON.stringify(response.data.all_products));
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
              src={`/img/${product_name}.png`}
              alt={product_name}
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
          <h2 className="font-semibold mb-1">{product_name}</h2>
        </Link>
        <div className='font-semibold'>$ {price}</div>
        <div className='font-semibold'>%{Descuentos}</div>
        <div className='font-semibold'>Relevance {Relevance}</div>
      </div>
    </div>
  );
};

export default Product;
