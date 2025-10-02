// src/pages/AdminRegisterPage.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios'; // Axios ko yahan import karo

// API function ko clean kiya
const registerAdminAPI = async (data) => {
    const baseURL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';
    const response = await axios.post(`${baseURL}/api/v1/admins/register`, data);
    return response.data;
};

function AdminRegisterPage() {
  const [formData, setFormData] = useState({ username: '', password: '', secretKey: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await registerAdminAPI(formData);
      setSuccess('Admin created successfully! You can now login.');
      setTimeout(() => navigate('/admin/login'), 2000);
    } catch (err) {
      console.error("API Request Error:", err);
      setError(err.response?.data?.message || 'Registration failed. Check console for details.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white">Create First Admin</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-300 block">Username</label>
            <input type="text" name="username" value={formData.username} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md" autoComplete="username"/>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-300 block">Password</label>
            <input type="password" name="password" value={formData.password} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md" autoComplete="new-password"/>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-300 block">Admin Secret Key</label>
            <input type="password" name="secretKey" value={formData.secretKey} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md" autoComplete="new-password"/>
          </div>
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          {success && <p className="text-green-500 text-sm text-center">{success}</p>}
          <button type="submit" className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md">Create Admin</button>
        </form>
        <p className="text-center text-sm text-gray-400">
            Already have an account? <Link to="/admin/login" className="font-medium text-orange-400 hover:underline">Login here</Link>
        </p>
      </div>
    </div>
  );
}

export default AdminRegisterPage;