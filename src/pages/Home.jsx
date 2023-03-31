import React,{useContext} from 'react'
import { ProductContext } from '../context/ProductContext';
import Product from 'components/Product'
import Hero from 'components/Hero'
const Home = () => {
    const {products} = useContext(ProductContext);
  return (
    <div>
        <Hero/>
        <section className='py-16'>
            <div className="container mx-auto">
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-sm mx-auto md:max-w-none md:mx-0'>
                    {products.map(product => (
                        <Product product={product} key={product.id}/>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default Home