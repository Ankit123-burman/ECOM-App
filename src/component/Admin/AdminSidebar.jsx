import React from "react";
import { Link, NavLink, useNavigate } from "react-router";
import {RiStore2Line} from 'react-icons/ri'
import { FaUsers, FaBox, FaShoppingCart, FaSignOutAlt } from "react-icons/fa"; // optional icons

function AdminSidebar() {
  const navigate = useNavigate()
  const handeleLogout = ()=>{
    navigate("/")
  }
  return (
    <div className="p-6">
      {/* Brand / Logo */}
      <div className="mb-6">
        <Link to="/admin" className="text-2xl font-medium">
          Rabbit
        </Link>
      </div>

      <h2 className="text-xl font-medium mb-6 text-center">Admin Dashboard</h2>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-2">
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-300 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaUsers />
          <span>Users</span>
        </NavLink>

        <NavLink
          to="/admin/products"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaBox />
          <span>Products</span>
        </NavLink>

        <NavLink
          to="/admin/orders"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <FaShoppingCart />
          <span>Orders</span>
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "bg-gray-700 text-white py-3 px-4 rounded flex items-center space-x-2"
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
          }
        >
          <RiStore2Line />
          <span>Shop</span>
        </NavLink>
      </nav>
      <div className="mt-6" >
        <button onClick={handeleLogout} className="w-full bg-red-500 hover:bg-red-600 text-white py-2 rounded flex items-center
        justify-center space-x-2" >
          <FaSignOutAlt/>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default AdminSidebar;
