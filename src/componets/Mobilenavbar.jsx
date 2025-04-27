import React, { useState } from 'react';
import Navbar from './navbar';

export default function Mobilenavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to open and close the sidebar
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div>

      {/* Mobile Navbar */}
      <div className="flex items-center justify-between p-4 bg-white shadow-md pt-5 border-gray-100">
        <h1 className="text-xl font-semibold">HOME</h1>

        {/* Centered Navbar for large screens */}
        <div className="hidden lg:flex md:flex mx-auto">
          <Navbar />
        </div>

        <img 
          src="menugg.png" 
          alt="Menu" 
          className="h-8 w-auto cursor-pointer block lg:hidden md:hidden" 
          onClick={toggleSidebar} 
        />
      </div>

      {/* Sidebar */}
      <div 
        className={`fixed top-0 right-0 bg-gray-800 bg-opacity-75 z-50 w-3/4 h-full transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300`}
      >
        <div className="flex justify-between items-center p-4 text-white">
          <h2 className="text-xl font-semibold">Menu</h2>
          <span 
            onClick={toggleSidebar} 
            className="text-3xl cursor-pointer"
          >
            &times;
          </span>
        </div>
        <ul className="space-y-4 px-4 text-white">
          <li><a href="hotel.html" className="hover:text-blue-500">HOTELS</a></li>
          <li><a href="cruises.html" className="hover:text-blue-500">CRUISES</a></li>
          <li><a href="book.html" className="hover:text-blue-500">BOOK NOW</a></li>
          <li><a href="vacation.html" className="hover:text-blue-500">VACATIONS</a></li>
          <li><a href="tourpartner.html" className="hover:text-blue-500">TOUR PARTNERS</a></li>
        </ul>
      </div>
    </div>
  );
}


