import React from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../Products/GenderCollection'
import New from '../Products/New'
import FeatureCollection from '../Products/FeaturCollection'
import { ProductDetails } from '../Products/ProductDetails'
import ProductGrid from '../Products/ProductGrid'
import FeatureSection from '../Products/FeatureSection'

const placeholderProducts = [
  {
    id: 1,
    name: "Floral Summer Dress",
    price: 1299,
    image: [{ url: "https://picsum.photos/400/600?random=11" }],
  },
  {
    id: 2,
    name: "Elegant Evening Gown",
    price: 3499,
    image: [{ url: "https://picsum.photos/400/600?random=12" }],
  },
  {
    id: 3,
    name: "Casual Denim Dress",
    price: 1899,
    image: [{ url: "https://picsum.photos/400/600?random=13" }],
  },
  {
    id: 4,
    name: "Classic Black Dress",
    price: 2499,
    image: [{ url: "https://picsum.photos/400/600?random=14" }],
  },
  {
    id: 5,
    name: "Floral Summer Dress",
    price: 1299,
    image: [{ url: "https://picsum.photos/400/600?random=11" }],
  },
  {
    id: 6,
    name: "Elegant Evening Gown",
    price: 3499,
    image: [{ url: "https://picsum.photos/400/600?random=12" }],
  },
  {
    id: 7,
    name: "Casual Denim Dress",
    price: 1899,
    image: [{ url: "https://picsum.photos/400/600?random=13" }],
  },
  {
    id: 8,
    name: "Classic Black Dress",
    price: 2499,
    image: [{ url: "https://picsum.photos/400/600?random=14" }],
  },
];


function Home() {
  return (
    <div>
        <Hero/>
        <GenderCollection/>
        <New/>
        <h2 className='text-3xl text-center font-bold mb-4' >Best Seller</h2>
        <ProductDetails/>

        <div className='container mx-auto' >
          <h2 className='text-3xl  text-center font-boldmb-4' >
            Top Wears for Women
          </h2>
          <ProductGrid products={placeholderProducts} />
        </div>
        <FeatureCollection/>
        <FeatureSection/>
    </div>
  )
}

export default Home