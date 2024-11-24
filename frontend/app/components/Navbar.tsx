'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Car } from 'lucide-react';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'how-it-works', label: 'How It Works', href: '/how-it-works' },
  { id: 'contact', label: 'Contact', href: '/contact' }
] as const;

const scrollToUpload = () => {
  const uploadSection = document.getElementById('upload-section');
  uploadSection?.scrollIntoView({ behavior: 'smooth' });
};

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with Car Icon */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <Car className="h-8 w-8 text-red-600 animate-bounce-slow" />
              <span className="text-red-600 font-bold text-xl">Turners Karts</span>
            </Link>
          </div>

          {/* Centered Get Quote Button */}
          <div className="flex-1 flex justify-center">
            <button 
              onClick={scrollToUpload}
              className="bg-green-500 text-white px-6 py-2 rounded-full font-medium
                hover:bg-green-600 transition-colors duration-200 shadow-md"
            >
              Get Quote
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-red-600 
              hover:text-red-700 hover:bg-red-50 focus:outline-none focus:ring-2 
              focus:ring-inset focus:ring-red-500"
          >
            <span className="sr-only">Open main menu</span>
            {isOpen ? (
              <X className="block h-6 w-6" />
            ) : (
              <Menu className="block h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Slide-out Menu */}
      <div 
        className={`
          fixed top-0 right-0 h-full w-64 bg-white/20 backdrop-blur-md shadow-lg 
          transform transition-transform duration-200 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="text-white hover:text-gray-200 focus:outline-none"
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="px-4 py-2 space-y-3">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className="block text-white hover:text-gray-200 py-2 text-lg font-medium 
                border-b border-white/10"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-40"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </nav>
  );
}