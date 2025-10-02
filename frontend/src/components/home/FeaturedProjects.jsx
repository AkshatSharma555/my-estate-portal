// src/components/home/FeaturedProjects.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllProjects } from '../../services/api.js';
import SkeletonCard from '../SkeletonCard';

function FeaturedProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const data = await getAllProjects();
                // Hum zyada projects fetch karenge taaki loop accha lage
                setProjects(data.data.slice(0, 6)); 
            } catch (error) {
                console.error("Failed to fetch projects");
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const duplicatedProjects = [...projects, ...projects];

    return (
        <div className="py-20">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Featured Projects</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-12">A Glimpse of Our Finest Work</p>
            </div>
            
            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-6">
                    {Array.from({ length: 3 }).map((_, index) => <SkeletonCard key={index} />)}
                </div>
            ) : (
                <div className="relative w-full overflow-hidden group">
                    {/* Side fade effects */}
                    <div className="absolute top-0 left-0 z-10 w-24 h-full bg-gradient-to-r from-white dark:from-slate-900 to-transparent pointer-events-none"></div>
                    <div className="absolute top-0 right-0 z-10 w-24 h-full bg-gradient-to-l from-white dark:from-slate-900 to-transparent pointer-events-none"></div>

                    <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
                        {duplicatedProjects.map((project, index) => (
                            <div key={`${project._id}-${index}`} className="flex-shrink-0 w-[400px] mx-4">
                                <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300 h-full">
                                    <Link to={`/projects/${project._id}`} className="block">
                                        <img src={project.coverImage} alt={project.name} className="w-full h-56 object-cover" />
                                        <div className="p-6">
                                            <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white truncate">{project.name}</h3>
                                            <p className="text-slate-600 dark:text-slate-300 mb-4">{project.location}</p>
                                            <p className="text-orange-500 font-semibold hover:underline">View Details &rarr;</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeaturedProjects;