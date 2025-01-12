import React from 'react';
import { Link } from 'react-router-dom';

function HeaderComponent() {
  return (
    <header className="flex items-center bg-[#150050] text-white py-4 px-6 rounded-b-lg ">
      <nav className="mx-auto flex gap-6 text-lg">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/contact" className="hover:text-gray-400">Contact</Link>
        <Link to="/food" className="hover:text-gray-400">Food</Link>
        <Link to="/addCard" className="hover:text-gray-400">Add Food</Link>
      </nav>
    </header>
  );
}

export default HeaderComponent;
