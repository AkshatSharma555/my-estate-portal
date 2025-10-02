// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';
import AdminLoginPage from './pages/AdminLoginPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboardPage from './pages/AdminDashboardPage';
import AnimatedPage from './components/AnimatedPage';
import BackToTopButton from './components/BackToTopButton';
import AdminRegisterPage from './pages/AdminRegisterPage';

function App() {
  const location = useLocation();

  return (
    <>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route
            element={
              <AnimatedPage>
                <MainLayout />
              </AnimatedPage>
            }
          >
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
          
          <Route path="/admin/login" element={<AnimatedPage><AdminLoginPage /></AnimatedPage>} />
          <Route path="/admin/register" element={<AnimatedPage><AdminRegisterPage /></AnimatedPage>} />
          <Route element={<ProtectedRoute />}>
            <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <BackToTopButton />
    </>
  );
}

export default App;