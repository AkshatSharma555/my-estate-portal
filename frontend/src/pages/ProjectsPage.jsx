// src/pages/ProjectsPage.jsx
import React, { useState, useEffect, useMemo } from "react";
import { getAllProjects } from "../services/api.js";
import ProjectCard from "../components/ProjectCard";
import SplitText from "../components/SplitText";
import RollingGallery from "../components/RollingGallery";
import SkeletonCard from "../components/SkeletonCard";

const filterCategories = ["All", "Residential", "Commercial"];

function ProjectsPage() {
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [displayedProjects, setDisplayedProjects] = useState([]); // <-- FIX: State for final sorted list
  const [activeFilter, setActiveFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("default"); // <-- FIX: State for sorting dropdown
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await getAllProjects();
        setAllProjects(data.data);
        setFilteredProjects(data.data);
      } catch (error) {
        console.error("Failed to fetch projects");
      } finally {
        setLoading(false);
      }
    };
    setTimeout(fetchProjects, 1500); // Thoda delay taaki skeleton dikhe
  }, []);

  const projectImageUrls = useMemo(
    () => allProjects.map((p) => p.coverImage),
    [allProjects]
  );

  const handleFilter = (category) => {
    setActiveFilter(category);
    if (category === "All") {
      setFilteredProjects(allProjects);
    } else {
      setFilteredProjects(allProjects.filter((p) => p.category === category));
    }
  };

  // Sorting ke liye naya useEffect
  useEffect(() => {
    let sorted = [...filteredProjects];
    if (sortOrder === "status") {
      const statusOrder = { Ongoing: 1, Upcoming: 2, Completed: 3 };
      sorted.sort((a, b) => statusOrder[a.status] - statusOrder[b.status]);
    } else if (sortOrder === "newest") {
      sorted.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
    setDisplayedProjects(sorted);
  }, [filteredProjects, sortOrder]);

  return (
    <div className="container mx-auto px-6 py-20">
      <div className="text-center">
        <SplitText
          tag="h1"
          text="Our Projects"
          className="text-5xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white"
          splitType="words"
        />
        <p className="text-lg text-slate-600 dark:text-slate-400">
          Explore our portfolio of completed and ongoing projects.
        </p>
      </div>
      <RollingGallery
        images={projectImageUrls}
        autoplay={true}
        pauseOnHover={true}
      />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8 mb-12">
        {/* Filter Buttons */}
        <div className="flex justify-center space-x-2 md:space-x-4">
          {filterCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleFilter(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-colors duration-300 ${
                activeFilter === category
                  ? "bg-orange-500 text-white"
                  : "bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-orange-200 dark:hover:bg-slate-600"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        {/* Sorting Dropdown */}
        <select
          onChange={(e) => setSortOrder(e.target.value)}
          value={sortOrder}
          className="px-4 py-2 rounded-full font-semibold bg-gray-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300 focus:outline-none"
        >
          <option value="default">Sort by Default</option>
          <option value="newest">Sort by Newest</option>
          <option value="status">Sort by Status</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {loading
          ? Array.from({ length: 6 }).map((_, index) => (
              <SkeletonCard key={index} />
            ))
          : // FIX: Render `displayedProjects` to show the sorted list
            displayedProjects.map((project) => (
              <ProjectCard key={project._id} project={project} />
            ))}
      </div>
    </div>
  );
}

export default ProjectsPage;
