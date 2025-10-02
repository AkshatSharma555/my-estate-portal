// src/components/admin/ProjectManager.jsx
import React, { useState } from 'react';
import { createProject } from '../../services/api';
import { compressImage } from '../../utils/imageCompressor';

function ProjectManager({ projects, onDelete, onProjectAdded }) {
  // ... (saare state variables same rahenge)
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
      name: '', description: '', location: '', category: 'Residential',
      status: 'Upcoming', timeline: ''
  });
  const [coverImage, setCoverImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ... (handleInputChange aur resetForm same rahenge)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData({ name: '', description: '', location: '', category: 'Residential', status: 'Upcoming', timeline: '' });
    setCoverImage(null);
    setGalleryImages([]);
    document.getElementById('coverImageInput').value = null;
    document.getElementById('galleryImagesInput').value = null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const data = new FormData();

    for (const key in formData) {
        data.append(key, formData[key]);
    }

    if (coverImage) {
        const compressedBlob = await compressImage(coverImage);
        // Compressed file ko original naam do
        const compressedCoverFile = new File([compressedBlob], coverImage.name, { type: coverImage.type });
        data.append('coverImage', compressedCoverFile);
    }
    if (galleryImages.length > 0) {
        const compressedGalleryPromises = galleryImages.map(async (image) => {
            const compressedBlob = await compressImage(image);
            return new File([compressedBlob], image.name, { type: image.type });
        });
        const compressedGalleryFiles = await Promise.all(compressedGalleryPromises);
        compressedGalleryFiles.forEach(file => {
            data.append('images', file);
        });
    }
    
    try {
      const createdProject = await createProject(data);
      onProjectAdded(createdProject.project);
      resetForm();
      setShowForm(false);
    } catch (error) {
      console.error("Failed to create project:", error);
      alert("Error: Could not create project. Check console for details.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // ... (poora JSX part same rahega)
    <div>
        <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">Projects</h2>
            <button 
              onClick={() => {
                setShowForm(!showForm);
                if (showForm) resetForm();
              }} 
              className={`font-bold py-2 px-4 rounded-full transition-colors ${showForm ? 'bg-gray-500 hover:bg-gray-600' : 'bg-green-500 hover:bg-green-600'}`}
            >
                {showForm ? 'Cancel' : 'Add New Project'}
            </button>
        </div>

        {showForm && (
            <form onSubmit={handleSubmit} className="bg-slate-800 p-6 rounded-lg mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                <input name="name" value={formData.name} onChange={handleInputChange} placeholder="Project Name" required className="bg-slate-700 p-2 rounded"/>
                <input name="location" value={formData.location} onChange={handleInputChange} placeholder="Location" required className="bg-slate-700 p-2 rounded"/>
                <select name="category" value={formData.category} onChange={handleInputChange} className="bg-slate-700 p-2 rounded">
                    <option>Residential</option><option>Commercial</option>
                </select>
                <select name="status" value={formData.status} onChange={handleInputChange} className="bg-slate-700 p-2 rounded">
                    <option>Upcoming</option><option>Ongoing</option><option>Completed</option>
                </select>
                <div className="md:col-span-1">
                  <label className="block text-sm font-medium text-slate-400 mb-1">Cover Image*</label>
                  <input id="coverImageInput" type="file" onChange={(e) => setCoverImage(e.target.files[0])} required className="bg-slate-700 p-2 rounded w-full file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"/>
                </div>
                <input name="timeline" value={formData.timeline} onChange={handleInputChange} placeholder="Timeline (e.g., 2025-2027)" className="bg-slate-700 p-2 rounded"/>
                <textarea name="description" value={formData.description} onChange={handleInputChange} placeholder="Description" required className="md:col-span-2 bg-slate-700 p-2 rounded h-24"/>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-400 mb-1">Gallery Images</label>
                  <input id="galleryImagesInput" type="file" onChange={(e) => setGalleryImages(Array.from(e.target.files))} multiple className="bg-slate-700 p-2 rounded w-full file:mr-4 file:py-1 file:px-2 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-orange-100 file:text-orange-700 hover:file:bg-orange-200"/>
                </div>
                <button type="submit" disabled={isSubmitting} className="md:col-span-2 bg-orange-500 hover:bg-orange-600 font-bold py-3 px-4 rounded-full disabled:bg-orange-300">
                  {isSubmitting ? 'Compressing & Uploading...' : 'Create Project'}
                </button>
            </form>
        )}

        <div className="bg-slate-800 rounded-lg p-4 overflow-x-auto">
            <table className="w-full text-left min-w-[400px]">
                <thead><tr className="border-b border-slate-700"><th className="p-2">Name</th><th className="p-2">Category</th><th className="p-2 text-right">Actions</th></tr></thead>
                <tbody>
                    {projects.map(p => (
                        <tr key={p._id} className="border-b border-slate-700 hover:bg-slate-700/50">
                            <td className="p-2">{p.name}</td><td className="p-2">{p.category}</td>
                            <td className="p-2 text-right"><button onClick={() => onDelete(p._id)} className="text-red-500 hover:underline">Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  );
}

export default ProjectManager;