import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-lg">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center">
          <img src="logo.png" alt="logo" className="h-10 w-auto" />
        </div>
        <div>
          <a 
            href="signin.html" 
            className="text-gray-700 font-semibold hover:text-blue-600 transition duration-300"
          >
            MY ACCOUNT
          </a>
        </div>
      </nav>
    </header>
  );
}
