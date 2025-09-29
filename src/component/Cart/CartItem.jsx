import React from 'react'
import image from '../../assets/image.png'
import {RiDeleteBin3Line} from 'react-icons/ri'

const CartItem = () => {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shrit",   // typo
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: image
    },
    {
      productId: 2,
      name: "Jeens Pant", // typo
      size: "L",
      color: "Blue",
      quantity: 2,
      price: 25,
      image: image
    },
    {
      productId: 3,
      name: "Snakers",   // typo
      size: "42",
      color: "White",
      quantity: 1,
      price: 50,
      image: "https://picsum.photos/200/300?random=3"
    },
    {
      productId: 4,
      name: "Hoddie",    // typo
      size: "XL",
      color: "Black",
      quantity: 1,
      price: 35,
      image: "https://picsum.photos/200/300?random=4"
    }
  ];

  return (
    <div>
      {cartProducts.map((product, index) => (
        <div key={index} className="flex items-center justify-between py-4 border-b">
          
          {/* Product image */}
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-20 h-20 object-cover rounded"
          />

          {/* Product details */}
          <div className="flex flex-col flex-grow ml-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-gray-500">
              size: {product.size} | color: {product.color}
            </p>

            {/* Quantity controls */}
            <div className="flex items-center mt-2">
              <button className="border rounded px-2 py-1 text-lg font-medium">-</button>
              <span className="mx-4">{product.quantity}</span>
              <button className="border rounded px-2 py-1 text-lg font-medium">+</button>
            </div>
          </div>

          {/* Price on the right */}
          <span className="ml-4 font-semibold">${product.price}</span>
          <button><RiDeleteBin3Line className='h-6 w-6 mt-2 text-red-600' /></button>
        </div>
      ))}
    </div>
  )
}

export default CartItem
