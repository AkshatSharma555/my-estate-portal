// src/pages/AdminLoginPage.jsx
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { loginAdmin } from '../services/api';
import { useNavigate } from 'react-router-dom';

function AdminLoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const data = await loginAdmin({ username, password });
      login(data.accessToken);
      navigate('/admin/dashboard');
    } catch (err) {
      setError('Invalid username or password.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-slate-800 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-white">Admin Login</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-300 block">Username</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md"/>
          </div>
          <div>
            <label className="text-sm font-bold text-gray-300 block">Password</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md"/>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button type="submit" className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md">Login</button>
        </form>
      </div>
    </div>
  );
}

export default AdminLoginPage;