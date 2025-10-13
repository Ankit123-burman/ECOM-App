import React, { useEffect, useRef } from 'react';
import { IoMdClose } from 'react-icons/io';
import CartItem from '../Cart/CartItem';
import { useNavigate } from 'react-router';

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  const navigate = useNavigate();
  const drawerRef = useRef(null);

  const handleCheckOut = () => {
    toggleCartDrawer();
    navigate("/checkout");
  };

  // Close drawer when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        toggleCartDrawer();
      }
    };

    if (drawerOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [drawerOpen, toggleCartDrawer]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        drawerOpen ? 'bg-black/40 visible' : 'invisible'
      }`}
    >
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-[30rem] h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col ${
          drawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <div className='flex justify-end p-4'>
          <button onClick={toggleCartDrawer}>
            <IoMdClose className='h-6 w-6 text-gray-600' />
          </button>
        </div>

        {/* Cart Items */}
        <div className='flex-grow p-4 overflow-y-auto'>
          <h2 className='text-xl font-semibold mb-4'>Your Cart</h2>
          <CartItem />
        </div>

        {/* Checkout Button */}
        <div className='p-4 bg-white sticky bottom-0'>
          <button
            onClick={handleCheckOut}
            className='w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition'
          >
            CheckOut
          </button>
          <p className='text-sm tracking-tighter text-gray-500 mt-2 text-center'>
            Shipping, taxes, and discount codes calculated at checkout
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
