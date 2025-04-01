// src/components/home/animated-stats.jsx
"use client";

import { useState, useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// First install required dependencies:
// npm install framer-motion

export default function AnimatedStats() {
  return (
    <section className="py-16 bg-blue-700 dark:bg-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            Our Project Success Story
          </h2>
          <p className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto">
            Numbers that speak to our experience and commitment to excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <StatCard 
            value={250} 
            label="Projects Completed" 
            icon={
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            } 
            prefix=""
            suffix="+"
          />
          
          <StatCard 
            value={15} 
            label="Years of Experience" 
            icon={
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            } 
            prefix=""
            suffix="+"
          />
          
          <StatCard 
            value={95} 
            label="Client Satisfaction" 
            icon={
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
              </svg>
            } 
            prefix=""
            suffix="%"
          />
          
          <StatCard 
            value={35} 
            label="Team Members" 
            icon={
              <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            } 
            prefix=""
            suffix="+"
          />
        </div>
      </div>
    </section>
  );
}

// Animated stat counter component
function StatCard({ value, label, icon, prefix = "", suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // Animation duration in ms
      const frameDuration = 1000 / 60; // Duration of a single frame at 60fps
      const totalFrames = Math.round(duration / frameDuration);
      
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const currentCount = Math.round(easeOutQuad(progress) * value);
        
        if (frame === totalFrames) {
          clearInterval(counter);
          setCount(value);
        } else {
          setCount(currentCount);
        }
      }, frameDuration);
      
      return () => clearInterval(counter);
    }
  }, [isInView, value]);
  
  // Easing function for smooth animation
  function easeOutQuad(x) {
    return 1 - (1 - x) * (1 - x);
  }
  
  return (
    <div ref={ref} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center transform transition-all hover:scale-105">
      <div className="flex justify-center text-blue-300 mb-4">
        {icon}
      </div>
      <div className="text-4xl font-bold text-white mb-2 flex items-center justify-center">
        <span>{prefix}</span>
        <span>{isInView ? count : 0}</span>
        <span>{suffix}</span>
      </div>
      <div className="text-blue-200 font-medium">{label}</div>
    </div>
  );
}