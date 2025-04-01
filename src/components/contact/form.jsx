// src/components/home/parallax-hero.js
"use client";

import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ParallaxHero() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        // Only track scroll position when element is in viewport
        const rect = heroRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setScrollY(window.scrollY);
        }
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden">
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      >
        <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
        <Image
          src="/images/construction-hero.jpg"
          alt="Z Double B Construction - Building Arvada's Future"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>
      
      {/* Hero Content with Animation */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center md:text-left pt-20 animate-fade-in">
          <div className="overflow-hidden">
            <h1 
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl animate-slide-up" 
              style={{ animationDelay: '200ms' }}
            >
              <span className="block mb-2">Building Arvada's</span>
              <span className="block text-blue-400">Future Together</span>
            </h1>
          </div>
          <div className="overflow-hidden">
            <p 
              className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl md:mx-0 animate-slide-up"
              style={{ animationDelay: '400ms' }}
            >
              Quality Window and Construction with a focus on client satisfaction, craftsmanship, and timely delivery.
            </p>
          </div>
          <div 
            className="mt-5 sm:mt-8 sm:flex sm:justify-center md:justify-start animate-slide-up"
            style={{ animationDelay: '600ms' }}
          >
            <div className="rounded-md shadow">
              <Link
                href="/contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all hover:scale-105 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <Link
                href="/projects"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-gray-50 transition-all hover:scale-105 md:py-4 md:text-lg md:px-10 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-10 left-0 right-0 z-20 flex justify-center">
        <div className="animate-bounce flex items-center justify-center h-10 w-10 rounded-full bg-white bg-opacity-20">
          <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}