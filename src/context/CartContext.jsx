import React, { createContext, useState } from 'react'
import axios from 'axios';

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
    const form = {
      'user_name': 'usuario123',
      'product_user_input': product.category,
      'product_ID': 'title',
      'dataset': data
    }
    axios.post('http://127.0.0.1:5000/recommendations', form)
        .then(data => {
          console.log(data.data);
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