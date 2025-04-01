// src/components/animations/stagger-children.js
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