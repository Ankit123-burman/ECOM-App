import React, { useEffect, useState } from 'react'
import Hero from '../component/layout/Hero'
import GenderCollection from '../Products/GenderCollection'
import New from '../Products/New'
import FeatureCollection from '../Products/FeaturCollection'
import { ProductDetails } from '../Products/ProductDetails'
import ProductGrid from '../Products/ProductGrid'
import FeatureSection from '../Products/FeatureSection'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { fetchProductsByFilters } from "../redux/slices/productSlice";




function Home() {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // fetch product of specific collection
    dispatch(
      fetchProductsByFilters({
        gender: "women",
        category: "bottom wear",
        limit: 8,
      })
    );

    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error(error);
        console.log("BACKEND URL:", import.meta.env.VITE_BACKEND_URL);
      }
    };


    fetchBestSeller();
  }, [dispatch]); // <- Add dependency


  return (
    <div>
      <Hero />
      <GenderCollection />
      <New />
      <h2 className='text-3xl text-center font-bold mb-4' >Best Seller</h2>
      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct.id} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
      <div className='container mx-auto' >
        <h2 className='text-3xl  text-center font-boldmb-4' >
          Top Wears for Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>
      <FeatureCollection />
      <FeatureSection />
    </div>
  )
}

export default Home