import React, { createContext, useState } from 'react'
import axios, { all } from 'axios';

export const CartContext = createContext()


const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([])

  const addToCart = (product, id, data) => {

    const cartItem = cart.find(item => {
      return item.id === id
    });
    if (cartItem) {

      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)

    } else {
      const newItem = { ...product, amount: 1 }
      setCart([...cart, newItem])
    }
    let allProducts = JSON.parse(localStorage.getItem('allProductsData')) || data;

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
      .then(data => {
        localStorage.setItem('allProductsData', JSON.stringify(data.data.all_products));
        localStorage.setItem('recommendationsProductsData', JSON.stringify(data.data.recommended_products));
      })
      .catch(error => {
        console.log(error);
      });
  }
  const removeItem = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id
    })
    setCart(newCart)
  }
  const removeFromCart = (product, id) => {

    if (product.amount == 1) {
      removeItem(id)
    } else {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: product.amount - 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)
    }

  }
  const totalItems = () => {
    let sum = 0;
    cart.forEach(item => {
      sum += item.amount;
    })
    return sum
  }


  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, removeItem, totalItems }}
    >{children}</CartContext.Provider>
  )
}

export default CartProvider