import React,{useContext,useState,useEffect} from 'react'
import { SiderbarContext } from '../context/SidebarContext';
import { CartContext } from '../context/CartContext';

import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Logo from '../img/icon_shop.svg'
import Search from './Search';

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  const {isOpen,setIsOpen} = useContext(SiderbarContext);
  const {totalItems} = useContext(CartContext);

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
    })
  })
  return (
    <header className={`${isActive ? 'bg-blue-200 shadow-md ' : 'bg-blue-300 py-1' } fixed w-full z-10 transition-all`}>
      <div className='container mx-auto flex items-center justify-between h-full'>
        <Link to={'/'}>
        <div>
          <img className='w-[50px]' src={Logo} alt="" />
        </div>
        </Link>
        <div onClick={() =>setIsOpen(!isOpen)}
          className='cursor-pointer inline-block relative'
        >
          <BsBag className='text-2xl'/>
          <div className=' bg-blue-100 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-black rounded-full flex justify-center items-center font-bold'>
                <p>{totalItems()}</p>
            </div>
        </div>
      </div>
      <Search/>
    </header>
  )
}

export default Header