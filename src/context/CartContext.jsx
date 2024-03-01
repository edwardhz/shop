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
      'dataset': allProducts
    }
    axios.post('http://127.0.0.1:5000/recommendations', form)
        .then(data => {
          localStorage.setItem('allProductsData', JSON.stringify(data.data.all_products));
          localStorage.setItem('recommendationsProductsData', JSON.stringify(data.data.all_products));
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