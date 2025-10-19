import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import AdminSidebar from './AdminSidebar';
// import AdminHome from '../../Pages/AdminHome';
import { Outlet } from 'react-router';

function AdminLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row relative">
      {/* Mobile toggle button */}
      <div className="flex md:hidden items-center p-4 bg-gray-900 text-white z-20">
        <button onClick={toggleSidebar} className="flex items-center">
          <FaBars size={24} />
          <h1 className="ml-4 text-xl font-medium">Admin Dashboard</h1>
        </button>
      </div>

      {/* Overlay for mobile sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-50 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`bg-gray-900 w-64 min-h-screen text-white fixed md:relative transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 md:translate-x-0 md:static md:block z-20`}
      >
        <AdminSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <h2 className="text-2xl font-semibold"></h2>
        <Outlet/>
        
      </div>
    </div>
  );
}

export default AdminLayout;
