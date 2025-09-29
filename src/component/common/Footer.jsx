import React from 'react'
import { Link } from 'react-router'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
  <footer className="border-t py-12 bg-gray-50">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">
    {/* Newsletter */}
    <div>
      <h3 className="text-lg text-gray-800 mb-4 font-semibold">Newsletter</h3>
      <p className="text-gray-500 mb-4">
        Be the first to hear about new products, exclusive events, and online offers.
      </p>
      <p className="font-medium text-sm text-gray-600 mb-6">
        Sign up and get 10% off your first order.
      </p>

      {/* Newsletter form */}
      <form action="" className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-3 w-full text-sm border-t border-b border-l border-gray-300 rounded-l-md 
                     focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all"
          required
        />
        <button
          type="submit"
          className="bg-black text-white px-6 text-sm rounded-r-md hover:bg-gray-800 transition-all"
        >
          Subscribe
        </button>
      </form>
    </div>

    {/* Shop Links */}
    <div>
      <h3 className="text-gray-800 mb-4 text-lg font-semibold">Shop</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-black transition-colors">Women's Top Wear</a></li>
        <li><a href="#" className="hover:text-black transition-colors">Women's Bottom Wear</a></li>
        <li><a href="#" className="hover:text-black transition-colors">Men's Top Wear</a></li>
        <li><a href="#" className="hover:text-black transition-colors">Men's Bottom Wear</a></li>
      </ul>
    </div>

    {/* Support Links */}
    <div>
      <h3 className="text-gray-800 mb-4 text-lg font-semibold">Support</h3>
      <ul className="space-y-2 text-gray-600">
        <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
        <li><a href="#" className="hover:text-black transition-colors">FAQs</a></li>
        <li><a href="#" className="hover:text-black transition-colors">Shipping & Returns</a></li>
        <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
      </ul>
    </div>

    {/* About & Socials */}
    <div>
      <h3 className="text-gray-800 mb-4 text-lg font-semibold">About</h3>
      <p className="text-gray-600 mb-4">
        We are committed to delivering the best fashion at affordable prices.
      </p>
      <div className="flex space-x-4">
        <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-facebook-f"></i></a>
        <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-twitter"></i></a>
        <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-instagram"></i></a>
        <a href="#" className="text-gray-600 hover:text-black"><i className="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="border-t mt-10 pt-6 text-center text-sm text-gray-500">
    © {new Date().getFullYear()} YourBrand. All rights reserved.
  </div>
</footer>

  )
}

export default Footer