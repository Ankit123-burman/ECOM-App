import React, { useEffect, useState } from "react";
import { toast } from "sonner";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchProductDetails,
  fetchSimilarProducts,
} from "../redux/slices/productSlice";

import { addCart } from "../redux/slices/cartSlice";
import ProductGrid from "./ProductGrid";

export const ProductDetails = ({ productId }) => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { selectedProduct, similarProducts, loading, error } = useSelector(
    (state) => state.products
  );
  const { userId, guestId } = useSelector((state) => state.auth);

  const [mainImage, setMainImage] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisable, setIsButtonDisable] = useState(false);

  const productFetchId = productId || id;

  // Load product details + similar products
  useEffect(() => {
    if (productFetchId) {
      dispatch(fetchProductDetails(productFetchId));
      dispatch(fetchSimilarProducts(productFetchId)); // FIXED
    }
  }, [dispatch, productFetchId]);

  // Set main image when product loads
  useEffect(() => {
    if (selectedProduct?.image?.length > 0) {
      setMainImage(selectedProduct.image[0].url);
    }
  }, [selectedProduct]);

  const handleQuantityChange = (action) => {
    if (action === "plus") setQuantity((prev) => prev + 1);
    if (action === "minus" && quantity > 1) setQuantity((prev) => prev - 1);
  };

  const handleAddtoCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Select a size and color before adding to cart", {
        duration: 1000,
      });
      return;
    }

    setIsButtonDisable(true);

    dispatch(
      addCart({
        productId: productFetchId,
        quantity,
        size: selectedSize,
        color: selectedColor,
        guestId,
        userId,
      })
    )
      .unwrap()
      .then(() => {
        toast.success("Product added to cart");
      })
      .finally(() => {
        setIsButtonDisable(false);
      });
  };

  if (loading) return <p className="text-center p-10">Loading...</p>;
  if (error) return <p className="text-center p-10">Error: {error}</p>;

  if (!selectedProduct)
    return <p className="text-center p-10">Product not found.</p>;

  return (
    <div className="p-6">
      {/* Product Container */}
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/* Thumbnail images (desktop) */}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct?.image?.map((image, index) => (
              <img
                key={index}
                src={image.url}
                onClick={() => setMainImage(image.url)}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-20 h-20 object-cover rounded-lg cursor-pointer border"
              />
            ))}
          </div>

          {/* Main image */}
          <div className="md:w-1/2 mb-4">
            {mainImage && (
              <img
                src={mainImage}
                alt="main product"
                className="w-full h-auto object-cover rounded-lg"
              />
            )}
          </div>

          {/* Mobile thumbnails */}
          <div className="md:hidden flex overflow-x-scroll space-x-4 mb-4">
            {selectedProduct?.image?.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.altText || `Thumbnail ${index}`}
                className="w-32 h-32 object-cover rounded-lg cursor-pointer border"
                onClick={() => setMainImage(image.url)}
              />
            ))}
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>

            {selectedProduct.originalPrice && (
              <p className="text-lg text-gray-600 line-through">
                ₹{selectedProduct.originalPrice}
              </p>
            )}

            <p className="text-2xl text-black font-bold mb-2">
              ₹{selectedProduct.price}
            </p>

            <p className="text-gray-600 mb-4">
              {selectedProduct.description}
            </p>

            {/* Color Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct?.colors?.map((color) => (
                  <button
                    key={color}
                    className={`w-8 h-8 rounded-full border ${
                      selectedColor === color
                        ? "border-4 border-black"
                        : "border border-gray-300"
                    }`}
                    onClick={() => setSelectedColor(color)}
                    style={{ backgroundColor: color.toLowerCase() }}
                  ></button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct?.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => handleQuantityChange("minus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange("plus")}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              disabled={isButtonDisable}
              onClick={handleAddtoCart}
              className={`bg-black text-white py-2 px-6 rounded w-full mb-4 ${
                isButtonDisable
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-900"
              }`}
            >
              {isButtonDisable ? "Adding..." : "ADD TO CART"}
            </button>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mt-20">
          <h2 className="text-2xl text-center font-medium mb-4">
            You May Also Like
          </h2>

          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
};
