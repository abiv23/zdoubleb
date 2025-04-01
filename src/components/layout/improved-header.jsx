// src/components/layout/improved-header.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '@/components/theme-toggle';

export default function ImprovedHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef(null);
  const searchRef = useRef(null);
  const searchInputRef = useRef(null);

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

  // Handle click outside to close menus
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Focus search input when search is opened
  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

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
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md' 
          : 'bg-transparent'
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Link 
                href="/" 
                className={`text-2xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-blue-800 dark:text-white' 
                    : 'text-white'
                }`}
                aria-label="Z Double B Construction - Back to home"
              >
                Z Double B
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium h-20 transition-colors relative
                    ${isActive(item.href)
                      ? `border-blue-500 ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`
                      : `border-transparent ${isScrolled ? 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white' : 'text-gray-300 hover:text-white'} hover:border-gray-300`
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                  {isActive(item.href) && (
                    <motion.span
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500"
                      layoutId="navIndicator"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>

          {/* Right side elements */}
          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            {/* Search button */}
            <div ref={searchRef} className="relative">
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled 
                    ? 'text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white' 
                    : 'text-white hover:text-gray-200'
                }`}
                aria-label="Search"
                aria-expanded={isSearchOpen}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              {/* Search box */}
              <AnimatePresence>
                {isSearchOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 z-10"
                  >
                    <div className="relative">
                      <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="w-full pl-10 pr-4 py-2 rounded-md border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-blue-500 focus:border-blue-500"
                        aria-label="Search site"
                      />
                      <svg className="h-5 w-5 text-gray-400 absolute left-3 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Theme toggle */}
            <ThemeToggle />

            {/* CTA Button */}
            <Link
              href="/contact"
              className={`
                px-4 py-2 rounded-md font-medium transition-all hover:shadow-md
                ${isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-blue-600 hover:bg-gray-100 dark:bg-blue-800 dark:text-white dark:hover:bg-blue-700'
                }
              `}
              aria-label="Get a construction quote"
            >
              Get a Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`
                inline-flex items-center justify-center p-2 rounded-md transition-colors
                ${isScrolled
                  ? 'text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800'
                  : 'text-white hover:text-gray-300 hover:bg-blue-700'
                }
                focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500
              `}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
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
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className={`sm:hidden overflow-hidden ${isScrolled ? 'bg-white dark:bg-gray-900' : 'bg-blue-900'}`}
          >
            <div className="pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    block pl-3 pr-4 py-2 border-l-4 text-base font-medium transition-colors
                    ${isActive(item.href)
                      ? `bg-blue-50 dark:bg-blue-900 border-blue-500 text-blue-700 dark:text-blue-300`
                      : `border-transparent ${isScrolled ? 'text-gray-500 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800 hover:border-gray-300' : 'text-gray-300 hover:bg-blue-800 hover:border-blue-400 hover:text-white'}`
                    }
                  `}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="p-4 flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <Link
                href="/contact"
                className="w-full ml-3 block text-center bg-blue-600 px-4 py-2 rounded-md text-white font-medium hover:bg-blue-700 transition shadow-sm hover:shadow-md"
                aria-label="Get a construction quote"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

// Place this in layout.js
// import ImprovedHeader from '@/components/layout/improved-header';
//
// export default function RootLayout({ children }) {
//   return (
//     <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
//       <body className="min-h-screen flex flex-col">
//         <ImprovedHeader />
//         <main className="flex-grow">
//           {children}
//         </main>
//         <Footer />
//       </body>
//     </html>
//   );
// }