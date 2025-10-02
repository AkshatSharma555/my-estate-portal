// src/layouts/MainLayout.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';
import DotGridBackground from '../components/DotGridBackground';
import { useTheme } from '../context/ThemeContext';

function MainLayout() {
  const { theme } = useTheme();

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <DotGridBackground 
          dotSize={2}
          gap={25}
          baseColor={theme === 'light' ? "#d1d5db" : "#4b5563"}
          activeColor={theme === 'light' ? "#fb923c" : "#fb923c"}
          proximity={100}
          shockStrength={0.2}
        />
      </div>
      
      <div className="relative z-10">
        <Header />
        <main>
            <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default MainLayout;