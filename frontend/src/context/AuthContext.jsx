// src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../services/api';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [admin, setAdmin] = useState(null);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
      apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Yahan admin ki details fetch karne ka code daal sakte hain agar zaroori ho
    } else {
      localStorage.removeItem('token');
      delete apiClient.defaults.headers.common['Authorization'];
    }
  }, [token]);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};