// src/components/projects/project-card.jsx
"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectCard({ project }) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="group bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md transition-all duration-300 transform hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 transition-opacity duration-300 ${isHovered ? 'opacity-80' : 'opacity-60'}`}></div>
        
        {/* Project category badge */}
        <div className="absolute top-4 left-4 bg-blue-600 text-white text-sm font-medium px-3 py-1 rounded-full">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 relative">
        {/* Client logo (optional) */}
        {project.clientLogo && (
          <div className="absolute -top-8 right-6 h-16 w-16 rounded-full bg-white dark:bg-gray-700 p-2 shadow-md flex items-center justify-center">
            <Image 
              src={project.clientLogo} 
              alt={`${project.title} client`} 
              width={48} 
              height={48} 
              className="object-contain"
            />
          </div>
        )}
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">
          {project.title}
        </h3>
        
        {/* Location indicator */}
        {project.location && (
          <div className="flex items-center mt-2 text-sm text-gray-500 dark:text-gray-400">
            <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {project.location}
          </div>
        )}
        
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          {project.description}
        </p>
        
        {/* Project stats/highlights */}
        {project.stats && (
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {project.stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <span className="text-gray-500 dark:text-gray-400">{stat.label}</span>
                <span className="font-semibold text-gray-900 dark:text-white">{stat.value}</span>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-6 flex items-center justify-between">
          <Link 
            href={`/projects/${project.slug}`} 
            className="inline-flex items-center text-blue-600 hover:text-blue-500 dark:text-blue-400 dark:hover:text-blue-300 font-medium transition-colors"
          >
            View Project
            <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
          
          {/* Project completion status/date */}
          {project.completionDate && (
            <span className="text-sm text-gray-500 dark:text-gray-400">
              Completed {project.completionDate}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

// Example usage:
/*
// Sample project data
const project = {
  title: "Downtown Office Building",
  slug: "downtown-office-building",
  category: "Commercial",
  description: "A modern 10-story commercial space in Arvada's business district.",
  image: "/images/projects/project1.jpg",
  clientLogo: "/images/clients/client1.png",
  location: "Arvada, AB",
  completionDate: "2022",
  stats: [
    { label: "Size", value: "125,000 sq ft" },
    { label: "Duration", value: "18 months" },
    { label: "Floors", value: "10" },
    { label: "Type", value: "Office" }
  ]
};

<ProjectCard project={project} />
*/