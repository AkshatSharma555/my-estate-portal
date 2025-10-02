// src/pages/ProjectDetailPage.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectById } from '../services/api';
import SplitText from '../components/SplitText';

function ProjectDetailPage() {
  const { projectId } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectById(projectId);
        setProject(data.data);
      } catch (error) {
        console.error("Failed to fetch project details");
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [projectId]);

  if (loading) return <div className="text-center py-40">Loading Project Details...</div>;
  if (!project) return <div className="text-center py-40">Project Not Found.</div>;

  return (
    <div className="container mx-auto px-6 py-20">
      <SplitText 
        tag="h1"
        text={project.name}
        className="text-4xl md:text-6xl font-bold mb-4 text-center text-slate-800 dark:text-white"
        splitType="words"
      />
      <p className="text-xl text-center text-slate-600 dark:text-slate-400 mb-12">{project.location}</p>

      <div className="mb-12">
        <img src={project.coverImage} alt={project.name} className="w-full max-w-4xl mx-auto rounded-lg shadow-xl" />
      </div>

      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">About the Project</h2>
        <p className="text-lg text-slate-700 dark:text-slate-300 whitespace-pre-line">{project.description}</p>

        <div className="mt-8 grid grid-cols-2 gap-4 text-center">
            <div className="bg-orange-100 dark:bg-orange-900/50 p-4 rounded-lg">
                <span className="block text-sm text-orange-600 dark:text-orange-400">Category</span>
                <span className="text-xl font-bold">{project.category}</span>
            </div>
            <div className="bg-blue-100 dark:bg-blue-900/50 p-4 rounded-lg">
                <span className="block text-sm text-blue-600 dark:text-blue-400">Status</span>
                <span className="text-xl font-bold">{project.status}</span>
            </div>
        </div>

        <h2 className="text-3xl font-bold mt-12 mb-4">Gallery</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((img, index) => (
                <img key={index} src={img} alt={`${project.name} gallery ${index + 1}`} className="w-full rounded-lg shadow-lg" />
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;