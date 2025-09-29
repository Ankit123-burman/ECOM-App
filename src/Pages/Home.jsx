import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../Products/GenderCollection'
import New from '../Products/New'
import { ProductDetails } from '../Products/ProductDetails'

function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <New/>

        <h2 className='text-3xl text-center font-bold mb-4' >Best Seller</h2>
        <ProductDetails/>
    </div>
  )
}

export default Home