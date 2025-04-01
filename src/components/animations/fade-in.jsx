// First, install framer-motion:
// npm install framer-motion

// src/components/animations/fade-in.jsx
"use client";

import { motion } from 'framer-motion';

// Reusable animation wrapper for fade-in effect
export function FadeIn({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  viewportOnce = true,
  className = "" 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: viewportOnce, margin: "-100px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: "easeOut" 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// src/components/animations/stagger-children.jsx
"use client";

import { motion } from 'framer-motion';

// Stagger animation for parent
export function StaggerContainer({ 
  children, 
  delay = 0,
  staggerDelay = 0.1,
  className = "" 
}) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay,
      }
    }
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Stagger animation for children
export function StaggerItem({ 
  children, 
  direction = "up", // "up", "down", "left", "right"
  className = "" 
}) {
  // Set the x/y values based on direction
  let x = 0;
  let y = 0;
  
  if (direction === "up") y = 50;
  if (direction === "down") y = -50;
  if (direction === "left") x = 50;
  if (direction === "right") x = -50;

  const item = {
    hidden: { opacity: 0, x, y },
    show: { 
      opacity: 1, 
      x: 0, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] // Custom easing
      }
    }
  };

  return (
    <motion.div
      variants={item}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Usage example for the Services section:
/*
import { StaggerContainer, StaggerItem } from '@/components/animations/stagger-children';

<section className="py-16 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <FadeIn>
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Our Services</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
          Comprehensive construction solutions for your needs
        </p>
      </FadeIn>
    </div>

    <StaggerContainer className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <StaggerItem key={service.id}>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-md transition-all hover:-translate-y-1 hover:shadow-xl">
          </div>
        </StaggerItem>
      ))}
    </StaggerContainer>
  </div>
</section>
*/