// src/components/home/HeroSection.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SplitText from '../SplitText';
import Counter from '../Counter';
import ProjectSpotlight from './ProjectSpotlight'; // Naya import
import { getAllProjects } from '../../services/api'; // Naya import

const stats = [
    { number: 15, suffix: '+', label: 'Years of Experience' },
    { number: 200, suffix: '+', label: 'Projects Delivered' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' }
];

function HeroSection() {
  const [spotlightProjects, setSpotlightProjects] = useState([]);

  useEffect(() => {
    const fetchSpotlightProjects = async () => {
      try {
        const data = await getAllProjects();
        // 4 projects ko spotlight me dikhayenge
        setSpotlightProjects(data.data.slice(0, 4)); 
      } catch (error) {
        console.error("Failed to fetch projects for spotlight", error);
      }
    };
    fetchSpotlightProjects();
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center container mx-auto px-6">
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center flex-grow pt-24 md:pt-0">
        {/* Left Column: Text Content */}
        <div className="text-left">
          <SplitText
            tag="h1"
            text="Building Your Dream Homes"
            className="text-5xl md:text-7xl font-bold mb-6 text-slate-800 dark:text-white"
            splitType="words"
            delay={100}
            textAlign="left"
          />
          
          <SplitText
            tag="p"
            text="At JMM Homes, we don't just build structures; we craft legacies. With over 15 years of excellence, we are dedicated to creating spaces that inspire, comfort, and endure. Your vision is our blueprint."
            className="text-lg md:text-xl mb-10 max-w-2xl text-slate-600 dark:text-slate-300"
            splitType="words"
            delay={30}
            textAlign="left"
          />
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/projects" className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 text-center">
              Explore Our Work
            </Link>
            <Link to="/contact" className="bg-transparent border-2 border-slate-700 dark:border-white hover:bg-slate-700 dark:hover:bg-white hover:text-white dark:hover:text-black font-bold py-3 px-8 rounded-full transition duration-300 text-center">
              Get a Quote
            </Link>
          </div>
        </div>

        {/* Right Column: Project Spotlight */}
        <div className="w-full h-[350px] md:h-[550px]">
            <ProjectSpotlight projects={spotlightProjects} />
        </div>
      </div>

      {/* Hero Stats Section */}
      <div className="py-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center md:text-left">
            {stats.map((stat, index) => (
                <div key={index}>
                    <h2 className="text-4xl md:text-5xl font-bold text-orange-500">
                        <Counter from={0} to={stat.number} />{stat.suffix}
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
                </div>
            ))}
        </div>
      </div>
      
    </div>
  );
}

export default HeroSection;