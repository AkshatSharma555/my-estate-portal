// src/services/api.js
import axios from 'axios';

export const apiClient = axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/v1`,
});

// PROJECTS
export const getAllProjects = async () => {
    const response = await apiClient.get('/projects/all');
    return response.data;
};
export const getProjectById = async (id) => {
    const response = await apiClient.get(`/projects/${id}`);
    return response.data;
};
export const createProject = async (formData) => {
    const response = await apiClient.post('/projects/create', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
    return response.data;
};
export const deleteProject = async (id) => {
    const response = await apiClient.delete(`/projects/${id}`);
    return response.data;
};

// INQUIRIES
export const submitInquiry = async (formData) => {
    const response = await apiClient.post('/inquiries/submit', formData);
    return response.data;
};
export const getAllInquiries = async () => {
    const response = await apiClient.get('/inquiries/all');
    return response.data;
};
export const deleteInquiry = async (id) => {
    const response = await apiClient.delete(`/inquiries/${id}`);
    return response.data;
};

// ADMIN
export const loginAdmin = async (credentials) => {
    const response = await apiClient.post('/admins/login', credentials);
    return response.data;
};

export const changePassword = async (passwordData) => {
    const response = await apiClient.post('/admins/change-password', passwordData);
    return response.data;
};