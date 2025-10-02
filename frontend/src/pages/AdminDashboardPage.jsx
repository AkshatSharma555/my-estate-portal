// src/pages/AdminDashboardPage.jsx
import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
// useNavigate yahan se hata diya hai
import { getAllProjects, deleteProject, getAllInquiries, deleteInquiry } from '../services/api';
import ProjectManager from '../components/admin/ProjectManager';
import InquiryViewer from '../components/admin/InquiryViewer';

function AdminDashboardPage() {
  const { logout } = useAuth();
  // navigate yahan se hata diya hai
  const [activeTab, setActiveTab] = useState('projects');
  // ... baaki state variables
  const [projects, setProjects] = useState([]);
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    // ... useEffect ka code same rahega
    const fetchData = async () => {
      try {
        const projectsData = await getAllProjects();
        setProjects(projectsData.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)));
        const inquiriesData = await getAllInquiries();
        setInquiries(inquiriesData.data);
      } catch (error) {
        console.error("Failed to fetch data", error);
        logout();
      }
    };
    fetchData();
  }, [logout]);


  const handleLogout = () => {
    logout(); // Bas logout call karo, redirection automatically ho jayega
  };

  // ... baaki saare functions (handleProjectDelete, etc.) same rahenge
  const handleProjectDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteProject(id);
        setProjects(prev => prev.filter(p => p._id !== id));
      } catch (error) { console.error("Failed to delete", error); }
    }
  };

  const handleInquiryDelete = async (id) => {
    if (window.confirm("Are you sure?")) {
      try {
        await deleteInquiry(id);
        setInquiries(prev => prev.filter(i => i._id !== id));
      } catch (error) { console.error("Failed to delete", error); }
    }
  };
  
  const handleProjectAdded = (newProject) => {
    setProjects(prev => [newProject, ...prev]);
  };


  return (
    // JSX ka poora structure same rahega
    <div className="min-h-screen bg-slate-900 text-white p-4 md:p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl md:text-4xl font-bold">Admin Dashboard</h1>
          <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full">
            Logout
          </button>
        </div>

        <div className="flex space-x-4 border-b border-slate-700 mb-8">
          <button onClick={() => setActiveTab('projects')} className={`py-2 px-4 font-semibold ${activeTab === 'projects' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-slate-400'}`}>
            Manage Projects ({projects.length})
          </button>
          <button onClick={() => setActiveTab('inquiries')} className={`py-2 px-4 font-semibold ${activeTab === 'inquiries' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-slate-400'}`}>
            View Inquiries ({inquiries.length})
          </button>
        </div>

        {activeTab === 'projects' && (
          <ProjectManager 
            projects={projects} 
            onDelete={handleProjectDelete} 
            onProjectAdded={handleProjectAdded} 
          />
        )}

        {activeTab === 'inquiries' && (
          <InquiryViewer 
            inquiries={inquiries} 
            onDelete={handleInquiryDelete} 
          />
        )}

      </div>
    </div>
  );
}

export default AdminDashboardPage;