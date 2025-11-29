import React from 'react'
import { Link } from 'react-router'

function ProductGrid({ products, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  if (!Array.isArray(products) || products.length === 0) {
    return <p className="text-center">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link key={index} to={`/product/${product._id}`} className="block">
          <div className="bg-white p-4 rounded-lg shadow">

            <div className="w-full h-96 mb-4">
              <img
                src={product?.image?.[0]?.url || "/placeholder.jpg"}
                alt={product?.name}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <h3 className="text-lg font-semibold">{product?.name}</h3>
            <p className="text-gray-600">₹{product?.price}</p>

          </div>
        </Link>
      ))}
    </div>
  );
}


export default ProductGrid
