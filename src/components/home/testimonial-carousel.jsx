// src/components/home/testimonial-carousel.jsx
"use client";

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

// First install swiper:
// npm install swiper

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function TestimonialCarousel({ testimonials }) {
  const [isClient, setIsClient] = useState(false);
  
  // Fix for hydration errors with Swiper
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  if (!isClient) {
    return <TestimonialSkeleton />;
  }
  
  return (
    <div className="relative px-4 py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 20L80 80" stroke="currentColor" strokeWidth="0.5" />
          <path d="M80 20L20 80" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with Z Double B Construction.
          </p>
        </div>
        
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: '.testimonial-button-prev',
            nextEl: '.testimonial-button-next',
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow h-full"
              >
                {/* Quote Icon */}
                <div className="flex justify-center mb-6">
                  <div className="text-5xl leading-none text-blue-600 dark:text-blue-400">&ldquo;</div>
                </div>
                
                {/* Testimonial Text */}
                <blockquote className="text-gray-700 dark:text-gray-300 text-center mb-8">
                  <p className="text-lg italic">{testimonial.quote}</p>
                </blockquote>
                
                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 relative rounded-full overflow-hidden mb-4 border-2 border-blue-200 dark:border-blue-800">
                    {testimonial.avatar ? (
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                        <span className="text-blue-600 dark:text-blue-400 text-xl font-bold">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-sm">{testimonial.role}</p>
                    
                    {/* Project type tag */}
                    {testimonial.projectType && (
                      <span className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                        {testimonial.projectType}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
        
        {/* Custom Navigation Buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            className="testimonial-button-prev w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="testimonial-button-next w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 hover:bg-blue-700 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

// Loading skeleton for testimonials
function TestimonialSkeleton() {
  return (
    <div className="px-4 py-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="h-10 w-64 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
          <div className="mt-4 h-6 w-96 bg-gray-200 dark:bg-gray-700 rounded-lg mx-auto animate-pulse"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((index) => (
            <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg h-full">
              <div className="flex justify-center mb-6">
                <div className="h-8 w-8 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse"></div>
              </div>
              
              <div className="space-y-2 mb-8">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-200 dark:bg-gray-700 rounded-full animate-pulse mb-4"></div>
                <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 rounded animate-pulse"></div>
                <div className="h-3 w-20 bg-gray-200 dark:bg-gray-700 rounded animate-pulse mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Example usage:
/*
const testimonials = [
  {
    name: "John Smith",
    role: "Commercial Client",
    quote: "Z Double B Construction delivered our office renovation project on time and on budget. Their attention to detail and quality of work exceeded our expectations.",
    avatar: "/images/testimonials/john.jpg",
    projectType: "Commercial Construction"
  },
  {
    name: "Sarah Johnson",
    role: "Residential Client",
    quote: "We couldn't be happier with our new home. The Z Double B team was professional, responsive, and truly cared about bringing our vision to life.",
    avatar: "/images/testimonials/sarah.jpg",
    projectType: "Residential Construction"
  },
  {
    name: "Michael Brown",
    role: "Restaurant Owner",
    quote: "The renovation of our restaurant was completed with minimal disruption to our business. The quality of work was exceptional and our customers love the new space.",
    avatar: "/images/testimonials/michael.jpg",
    projectType: "Renovation"
  },
  {
    name: "Emily Wilson",
    role: "Office Manager",
    quote: "From the initial consultation to the final walkthrough, the Z Double B team was a pleasure to work with. Their commitment to quality is evident in every detail of our new office.",
    avatar: "/images/testimonials/emily.jpg",
    projectType: "Commercial Construction"
  }
];

<TestimonialCarousel testimonials={testimonials} />
*/