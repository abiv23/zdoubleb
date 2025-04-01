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