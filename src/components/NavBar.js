import React, { useState } from "react";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 w-full py-4">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          MusicZone
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="/" className="text-gray-400 hover:text-white transition duration-300">Home</a>
          <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About</a>
          <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white transition duration-300">
            ☰
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="/" className="block text-gray-400 hover:text-white transition duration-300 py-2">Home</a>
          <a href="/about" className="block text-gray-400 hover:text-white transition duration-300 py-2">About</a>
          <a href="/contact" className="block text-gray-400 hover:text-white transition duration-300 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
}

export default NavBar;