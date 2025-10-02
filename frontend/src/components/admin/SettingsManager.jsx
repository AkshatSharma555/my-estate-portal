// src/components/admin/SettingsManager.jsx
import React, { useState } from 'react';
import { changePassword } from '../../services/api';

function SettingsManager() {
    const [formData, setFormData] = useState({ oldPassword: '', newPassword: '', confirmPassword: '' });
    const [message, setMessage] = useState({ text: '', type: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (formData.newPassword !== formData.confirmPassword) {
            setMessage({ text: "New passwords do not match.", type: 'error' });
            return;
        }
        try {
            const res = await changePassword({ oldPassword: formData.oldPassword, newPassword: formData.newPassword });
            setMessage({ text: res.message, type: 'success' });
            setFormData({ oldPassword: '', newPassword: '', confirmPassword: '' });
        } catch (error) {
            setMessage({ text: error.response?.data?.message || 'Failed to change password.', type: 'error' });
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>
            <form onSubmit={handleSubmit} className="max-w-lg bg-slate-800 p-6 rounded-lg space-y-4">
                <h3 className="text-xl font-semibold">Change Password</h3>
                <div>
                    <label className="text-sm font-bold text-gray-300 block">Old Password</label>
                    <input type="password" name="oldPassword" value={formData.oldPassword} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md"/>
                </div>
                <div>
                    <label className="text-sm font-bold text-gray-300 block">New Password</label>
                    <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md"/>
                </div>
                <div>
                    <label className="text-sm font-bold text-gray-300 block">Confirm New Password</label>
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required className="w-full mt-1 p-2 bg-slate-700 text-white border border-slate-600 rounded-md"/>
                </div>
                <button type="submit" className="w-full py-2 px-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-md">Update Password</button>
                {message.text && (
                    <p className={`mt-2 text-center text-sm ${message.type === 'success' ? 'text-green-400' : 'text-red-400'}`}>
                        {message.text}
                    </p>
                )}
            </form>
        </div>
    );
}

export default SettingsManager;