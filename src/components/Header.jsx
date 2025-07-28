import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {  } from "../context/PreviewContext";

const Header = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActivePage = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gray-100 text-sm text-gray-600 py-2 hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <Link to="/about" className="hover:text-green-600 transition-colors">
              About Us
            </Link>
            <Link to="/compare" className="hover:text-green-600 transition-colors">
              Compare
            </Link>
            <Link to="/wishlist" className="hover:text-green-600 transition-colors">
              Wishlist
            </Link>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <i className="fa-solid fa-shield-check text-green-600"></i>
              <span>100% Secure delivery without contacting the courier</span>
            </div>
            <div className="flex items-center space-x-4">
              <span>Need help? Call Us: + 0020 500</span>
              <div className="flex items-center space-x-2">
                <span>English</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
              <div className="flex items-center space-x-2">
                <span>USD</span>
                <i className="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-orange-400 rounded-lg flex items-center justify-center">
                    <i className="fa-solid fa-shopping-basket text-white text-xl"></i>
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900">Basket</div>
                  <div className="text-xs text-gray-500">Online Grocery Shopping Center</div>
                </div>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8 hidden lg:block">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for Products, fruit, meat, eggs..etc..."
                  className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                />
                <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-600 text-white p-2 rounded-md hover:bg-green-700 transition-colors">
                  <i className="fa-solid fa-search"></i>
                </button>
              </div>
            </div>

            {/* Right Side - Account & Cart */}
            <div className="flex items-center space-x-4">
              {/* Account */}
              <div className="hidden md:flex items-center space-x-2 text-gray-600 hover:text-gray-900 cursor-pointer">
                <i className="fa-regular fa-user text-xl"></i>
                <span className="text-sm">Account</span>
              </div>

              {/* Cart */}
              <Link
                to="/checkout"
                className="relative flex items-center space-x-2 bg-green-50 hover:bg-green-100 px-4 py-2 rounded-lg transition-colors"
              >
                <i className="fa-solid fa-shopping-cart text-green-600 text-xl"></i>
                <div className="text-sm">
                  <div className="text-gray-600">Cart</div>
                  <div className="font-semibold text-gray-900">$0.00</div>
                </div>
                
              </Link>

              {/* Mobile menu button */}
              <button 
                className="md:hidden p-2 text-gray-500 hover:text-gray-900"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fa-solid ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Categories Dropdown */}
            <div className="relative">
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg flex items-center space-x-2 hover:bg-green-700 transition-colors">
                <i className="fa-solid fa-bars"></i>
                <span className="font-medium">ALL CATEGORIES</span>
                <i className="fa-solid fa-chevron-down"></i>
              </button>

            </div>

            {/* Main Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                to="/"
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePage("/")
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                <span>HOME</span>
                <i className="fa-solid fa-chevron-down text-xs"></i>
              </Link>

              <Link
                to="/shop"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActivePage("/shop")
                    ? "text-green-600"
                    : "text-gray-700 hover:text-green-600"
                }`}
              >
                SHOP
              </Link>

              <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer">
                <i className="fa-solid fa-drumstick-bite text-orange-500"></i>
                <span className="text-sm font-medium">MEATS & SEAFOOD</span>
              </div>

              <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer">
                <i className="fa-solid fa-birthday-cake text-pink-500"></i>
                <span className="text-sm font-medium">BAKERY</span>
              </div>

              <div className="flex items-center space-x-2 px-3 py-2 text-gray-700 hover:text-green-600 cursor-pointer">
                <i className="fa-solid fa-wine-glass text-purple-500"></i>
                <span className="text-sm font-medium">BEVERAGES</span>
              </div>

              <Link
                to="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                BLOG
              </Link>

              <Link
                to="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-green-600 transition-colors"
              >
                CONTACT
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-4 py-3 space-y-2">
              {/* Mobile Search */}
              <div className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products..."
                    className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
                    <i className="fa-solid fa-search"></i>
                  </button>
                </div>
              </div>

              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActivePage("/")
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                HOME
              </Link>
              <Link
                to="/shop"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActivePage("/shop")
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                SHOP
              </Link>
              <Link
                to="/wishlist"
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActivePage("/wishlist")
                    ? "text-green-600 bg-green-50"
                    : "text-gray-700 hover:text-green-600 hover:bg-gray-50"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                WISHLIST
              </Link>
              <Link
                to="/blog"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                BLOG
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-green-600 hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                CONTACT
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 