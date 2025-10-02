// src/components/home/ProjectSpotlight.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/effect-fade';

function ProjectSpotlight({ projects }) {
  if (!projects || projects.length === 0) {
    return <div className="w-full h-full bg-slate-200 dark:bg-slate-800 rounded-2xl animate-pulse"></div>;
  }

  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      effect="fade"
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      allowTouchMove={false}
      className="w-full h-full rounded-2xl shadow-2xl"
    >
      {projects.map((project) => (
        <SwiperSlide key={project._id}>
          <Link to={`/projects/${project._id}`} className="block w-full h-full relative">
            <img src={project.coverImage} alt={project.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-sm font-semibold bg-orange-500 px-2 py-1 rounded">{project.category}</span>
              <h3 className="text-3xl font-bold mt-2">{project.name}</h3>
              <p className="text-gray-300">{project.location}</p>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default ProjectSpotlight;