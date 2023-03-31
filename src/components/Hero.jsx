import React from 'react'

import Img from '../img/woman.svg'

const Hero = () => {
  return (
    <section className='h-[800px] bg-hero bg-no-repeat bg-cover bg-center py-24'>
      <div className="container mx-auto flex justify-around h-full">
        <div className='flex flex-col justify-center'>
          
          <h1 className='text-[70px] leading-[1.1] font-light mb-4'>
            BEST SALES! <br/>
            <span className='font-semibold'>NOW</span>
            
          </h1>
          <div className='decoration-solid opacity-50 ml-2'>
            From March to July
          </div>
        </div>
        <div className='hidden lg:block'>
          <img className='w-full h-full' src={Img} alt="" />
        </div>
      </div>
      
    </section>
  )
}

export default Hero