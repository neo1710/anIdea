"use client"
import React, { useState } from 'react';
import { FaHome, FaShoppingBag, FaInfoCircle, FaBars, FaTimes } from 'react-icons/fa';
import { Button } from 'flowbite-react';
import { useRouter } from 'next/navigation';

export default function EnhancedNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const router = useRouter();
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { icon: FaHome, text: 'Home', navLink: '/' },
    { icon: FaShoppingBag, text: 'Products', navLink: '/products' },
    { icon: FaInfoCircle, text: 'About', navLink: '/about' },
  ];

  return (
    <nav className="bg-none shadow-lg fixed top-0 left-0 w-full z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold bg-gradient-to-br from-pink-300 via-pink-500 to-pink-700 bg-clip-text text-transparent tracking-wide transition-colors duration-300 cursor-pointer">
              Ornaments
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item, index) => (
                
              <Button
                key={index}
                onClick={() => router.push(item.navLink)}
                className="group focus:ring-0 relative flex items-center gap-2 px-4 py-2 !bg-pink-500 hover:!bg-rose-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-md active:scale-95 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <item.icon className="w-4 h-4 relative z-10 group-hover:rotate-12 transition-transform duration-300" />
                <span className="relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                  {item.text}
                </span>
              </Button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              onClick={toggleMobileMenu}
              className="p-2 !bg-pink-500 focus:ring-0 hover:!bg-rose-600 text-white rounded-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
            >
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5 transform rotate-0 transition-transform duration-300" />
              ) : (
                <FaBars className="w-5 h-5 transform rotate-0 transition-transform duration-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-2 pt-2 pb-3 space-y-2 bg-gray-200 rounded-b-lg shadow-inner">
            {navItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => router.push(item.navLink)}
                className="group focus:ring-0 w-full flex items-center gap-3 px-4 py-3 !bg-pink-500 hover:!bg-rose-600 text-white font-medium rounded-lg transition-all duration-300 transform hover:translate-x-2 hover:shadow-md active:scale-95"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isMobileMenuOpen ? 'slideInLeft 0.3s ease-out forwards' : 'none'
                }}
              >
                <item.icon className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  {item.text}
                </span>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}