import React, { useEffect, useState } from "react";
import Hero from "../component/layout/Hero";
import GenderCollection from "../Products/GenderCollection";
import New from "../Products/New";
import FeatureCollection from "../Products/FeaturCollection";
import { ProductDetails } from "../Products/ProductDetails";
import ProductGrid from "../Products/ProductGrid";
import FeatureSection from "../Products/FeatureSection";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { fetchProductsByFilters } from "../redux/slices/productSlice";

function Home() {
  const dispatch = useDispatch();

  const { products, loading, error } = useSelector(
    (state) => state.products
  );

  const [bestSellerProduct, setBestSellerProduct] = useState(null);

  useEffect(() => {
    // Fetch top wear for women
    dispatch(
      fetchProductsByFilters({
        gender: "women",
        category: "bottom wear",
        limit: 8,
      })
    );

    // Fetch Best Seller Product
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );

        // console.log("BEST SELLER:", response.data);

        // Save best seller list to state
        setBestSellerProduct(response.data);
      } catch (error) {
        console.error("Best Seller Fetch Error:", error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  // Extract first product safely
  const firstBestSellerId =
    bestSellerProduct?.[0]?._id || bestSellerProduct?.[0]?._id || null;

  return (
    <div>
      <Hero />
      <GenderCollection />
      <New />

      {/* Best Seller Section */}
      <h2 className="text-3xl text-center font-bold mt-10 mb-4">
        Best Seller
      </h2>

      {bestSellerProduct ? (
        <ProductDetails productId={bestSellerProduct?._id} />
      ) : (
        <p className="text-center mb-10">Loading best seller product...</p>
      )}


      {/* Women's Top Wear */}
      <div className="container mx-auto mt-10">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>

        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeatureCollection />
      <FeatureSection />
    </div>
  );
}

export default Home;
