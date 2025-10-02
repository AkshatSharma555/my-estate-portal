// src/components/ProjectCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const StatusBadge = ({ status }) => {
    const statusStyles = {
        Completed: 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300',
        Ongoing: 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300',
        Upcoming: 'bg-gray-100 text-gray-800 dark:bg-gray-700/50 dark:text-gray-300',
    };
    return (
        <div className={`absolute top-4 right-4 text-xs font-bold px-3 py-1 rounded-full z-10 ${statusStyles[status]}`}>
            {status}
        </div>
    );
};

function ProjectCard({ project }) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 relative">
      <StatusBadge status={project.status} />
      <Link to={`/projects/${project._id}`} className="block">
        <img src={project.coverImage} alt={project.name} className="w-full h-64 object-cover" />
        <div className="p-6">
          <p className="text-sm text-orange-500 font-semibold mb-1">{project.category}</p>
          <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{project.name}</h3>
          <p className="text-slate-600 dark:text-slate-400">{project.location}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProjectCard;