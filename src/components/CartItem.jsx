import React,{useContext} from 'react'
import { Link } from 'react-router-dom';
import {IoMdClose,IoMdAddCircleOutline} from 'react-icons/io'
import {AiFillDelete} from 'react-icons/ai'
import { CartContext } from 'context/CartContext';


const CartItem = ({item}) => {
  const {id, title,image,price,amount} = item;

  const {addToCart, removeFromCart, removeItem } = useContext(CartContext);

  return (
    <div>
      <div className='w-full min-h-[150px] flex items-center gap-x-4 border-b'>
        <div>
          <Link to={`/product/${id}`}>
          <img className='max-w-[80px]' src={image} alt="" />
          </Link>
        </div>
        <div className='w-full flex flex-col'>
          {/* Title and remove */}
          <div className='flex justify-between mb-2'>
              {/* Link title */}
              <Link to={`/product/${id}`} className='text-sm uppercase front-medium max-w-[220px] hover:underline'>{title}</Link>
              {/* Remove */}
              <div className='text-xl'>
                <IoMdClose className='hover:text-red-500 transition cursor-pointer text-2xl'
                onClick={()=>removeItem(id)}
                />
              </div>
          </div>
          {/* Description */}
          <div className='w-full flex justify-between items-center'>
            {/* Price */}

              <div className='text-md font-bold'>$ {(amount*price).toFixed(3)}</div>      

            <div className='p-2 '>
              <div className='border flex justify-around items-center  min-w-[80px] min-h-[30px] rounded-md'>
                  <div className='cursor-pointer'>
                    <IoMdAddCircleOutline className='text-xl hover:text-blue-500 transition-all'
                    onClick={()=>addToCart(item,id)}
                    />
                  </div>
                  <div>
                    {amount}
                  </div>
                  <div className='cursor-pointer'>
                    <AiFillDelete className='text-xl hover:text-blue-500 transition-all'
                    onClick={()=>removeFromCart(item,id)}
                    />
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem