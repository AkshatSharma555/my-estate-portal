// src/pages/HomePage.jsx
import React from 'react'
import HeroSection from '../components/home/HeroSection'
import FeaturedProjects from '../components/home/FeaturedProjects'
import Testimonials from '../components/home/Testimonials' 

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProjects />
      <Testimonials /> 
    </>
  )
}

export default HomePage