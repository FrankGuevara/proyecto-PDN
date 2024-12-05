import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-2xl font-bold">MyLogo</a>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="/" className="hover:text-gray-300">Home</a>
            <a href="/about" className="hover:text-gray-300">About</a>
            <a href="/services" className="hover:text-gray-300">Services</a>
            <a href="/contact" className="hover:text-gray-300">Contact</a>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-700">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              Home
            </a>
            <a href="/about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              About
            </a>
            <a href="/services" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              Services
            </a>
            <a href="/contact" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-blue-500">
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
