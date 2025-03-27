// src/components/layout/header.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // Handle scroll event to change header style when scrolled
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' }
  ];

  // Check if the current path matches the nav item
  const isActive = (path) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className={`text-2xl font-bold ${isScrolled ? 'text-blue-800' : 'text-white'}`}>
                Z Double B
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20
                    ${isActive(item.href)
                      ? `border-blue-500 ${isScrolled ? 'text-gray-900' : 'text-white'}`
                      : `border-transparent ${isScrolled ? 'text-gray-500 hover:text-gray-700 hover:border-gray-300' : 'text-gray-300 hover:text-white hover:border-gray-300'}`
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:flex sm:items-center">
            <Link
              href="/contact"
              className={`
                px-4 py-2 rounded-md font-medium transition-colors
                ${isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100'
                }
              `}
            >
              Get a Quote
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                inline-flex items-center justify-center p-2 rounded-md
                ${isScrolled
                  ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100'
                  : 'text-white hover:text-gray-300 hover:bg-blue-700'
                }
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
              `}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} sm:hidden ${isScrolled ? 'bg-white' : 'bg-blue-900'}`}>
        <div className="pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`
                block pl-3 pr-4 py-2 border-l-4 text-base font-medium
                ${isActive(item.href)
                  ? `bg-blue-50 border-blue-500 text-blue-700`
                  : `border-transparent ${isScrolled ? 'text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700' : 'text-gray-300 hover:bg-blue-800 hover:border-blue-400 hover:text-white'}`
                }
              `}
            >
              {item.name}
            </Link>
          ))}
          <div className="pt-4 pb-3 border-t border-gray-200 px-3">
            <Link
              href="/contact"
              className="w-full block text-center bg-blue-600 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-700 transition"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}