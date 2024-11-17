'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Car, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'upload', label: 'Upload', href: '/upload' },
  { id: 'how-it-works', label: 'How It Works', href: '/how-it-works' },
  { id: 'contact', label: 'Contact', href: '/contact' }
] as const;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !event.target?.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <Car className="h-8 w-8 text-red-600" />
              <span className="ml-2 text-xl font-bold text-red-600">Turners Karts</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {NAV_ITEMS.map(({ id, label, href }) => (
                <Link
                  key={id}
                  href={href}
                  className={`${
                    pathname === href
                      ? 'border-red-500 text-gray-900' 
                      : 'border-transparent text-gray-500 hover:border-red-300 hover:text-gray-700'
                  } inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <button 
              className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium 
                hover:bg-green-600 transform hover:scale-110 transition-all duration-300 
                animate-bounce-slow shadow-lg"
            >
              Get Quote
            </button>
          </div>
          
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-label="Toggle menu"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 
                hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 
                focus:ring-inset focus:ring-red-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          {NAV_ITEMS.map(({ id, label, href }) => (
            <Link
              key={id}
              href={href}
              className={`${
                pathname === href
                  ? 'bg-red-50 border-red-500 text-red-700'
                  : 'border-transparent text-gray-500 hover:bg-red-50 hover:border-red-300 hover:text-gray-700'
              } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}