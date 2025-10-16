import React from "react";
import { Link, NavLink } from "react-router";
import { FaUsers, FaBox, FaShoppingCart } from "react-icons/fa"; // optional icons

function AdminSidebar() {
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
              : "text-gray-300 hover:bg-gray-700 hover:text-white py-3 px-4 rounded flex items-center space-x-2"
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
      </nav>
    </div>
  );
}

export default AdminSidebar;
