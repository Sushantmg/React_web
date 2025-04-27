import React from 'react';

export default function Navbar() {
  return (
    <nav className="">
      <div className="max-w-7xl mx-auto px-4 py-3 hidden items-center justify-between sm:hidden lg:flex md:flex">
        <div className="flex space-x-8">
          <a href="hotel.html" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            HOTELS
          </a>
          <a href="cruises.html" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            CRUISES
          </a>
          <a href="book.html" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            BOOK NOW
          </a>
          <a href="vacation.html" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            VACATIONS
          </a>
          <a href="tourpartner.html" className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300">
            TOUR PARTNERS
          </a>
        </div>
      </div>
    </nav>
  );
}
