// src/pages/AboutPage.jsx
import React from 'react';
import SplitText from '../components/SplitText';
import ProfileCard from '../components/ProfileCard';
import vedangImage from '../assets/vedang.png';
import sahilImage from '../assets/sahil.png';
import vishalImage from '../assets/vishal.png';

// ... (founders aur processSteps ka data same rahega)
const founders = [
  { name: 'Vedang Madhavi', title: 'Co-Founder, Lead Architect', imageUrl: vedangImage, handle: 'vedang_archi', instaUrl: 'https://www.instagram.com/vedang.m_23/' },
  { name: 'Sahil Bhatt', title: 'Co-Founder, Project Management', imageUrl: sahilImage, handle: 'sahil_builds', instaUrl: 'https://www.instagram.com/_.sahilbhatt._/' },
  { name: 'Vishal Naidu', title: 'Co-Founder, Client Relations', imageUrl: vishalImage, handle: 'vishal_connects', instaUrl: 'https://www.instagram.com/vishall_naidu/' }
];
const processSteps = [
    { num: '01', title: 'Consultation & Vision', description: 'We begin with a deep dive into your vision, understanding your lifestyle and aspirations to lay a strong foundation.' },
    { num: '02', title: 'Architectural & Interior Design', description: 'Our team collaborates to create detailed blueprints and 3D models, focusing on optimizing space, light, and materials.' },
    { num: '03', title: 'Precision Construction', description: 'Employing the highest standards of craftsmanship, we manage every stage with quality and transparency.' },
    { num: '04', title: 'Finishing & Handover', description: 'After a thorough quality inspection, we proudly hand over the keys to your new space, ensuring your complete satisfaction.' }
];
const coreValues = [
    { title: 'Quality', description: 'We use only the finest materials and craftsmanship to ensure every project stands the test of time.' },
    { title: 'Integrity', description: 'Our business is built on transparency and trust. We maintain open communication with our clients.' },
    { title: 'Innovation', description: 'We embrace modern techniques and sustainable practices to build homes that are efficient and future-ready.' },
];

// Naye section ke liye data
const whyChooseUs = [
    { title: 'Unmatched Quality', description: 'Our obsession with quality is evident in every corner of our projects.', icon: 'M5 13l4 4L19 7' },
    { title: 'Transparent Process', description: 'We keep you informed at every step, ensuring a seamless and stress-free experience.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
    { title: 'Client-Centric Approach', description: 'Your satisfaction is our ultimate goal. We listen, we understand, and we deliver on our promises.', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' }
];

function AboutPage() {
  return (
    <div className="container mx-auto px-6 py-20">
      
      <div className="text-center mb-24">
        <SplitText 
          tag="h1"
          text="Crafting Homes, Building Trust."
          className="text-5xl md:text-6xl font-bold mb-4 text-slate-800 dark:text-white"
          splitType="words"
        />
        <p className="text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
          JMM Homes was founded on the principle of creating exceptional living spaces that blend quality, comfort, and modern design.
        </p>
      </div>

      <div className="mb-24">
        <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">Meet the Founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 justify-items-center">
          {founders.map((founder) => (
            <ProfileCard 
              key={founder.name}
              name={founder.name}
              title={founder.title}
              handle={founder.handle}
              avatarUrl={founder.imageUrl}
              enableTilt={true}
              onContactClick={() => window.open(founder.instaUrl, '_blank')}
            />
          ))}
        </div>
      </div>

      <div className="mb-24 py-20 bg-white/50 dark:bg-slate-800/50 rounded-xl backdrop-blur-sm">
        <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto px-6">
            {coreValues.map((value) => (
                <div key={value.title} className="p-6 text-center">
                    <h3 className="text-2xl font-bold text-orange-500 mb-2">{value.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                </div>
            ))}
        </div>
      </div>
      
      {/* --- Our Commitment Section (Updated) --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-20 mb-24">
        <div>
            <h2 className="text-4xl font-bold mb-4 text-slate-800 dark:text-white">Our Commitment to Excellence</h2>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
                At JMM Homes, excellence isn't just a goal; it's our standard. We are committed to delivering unparalleled quality in every project we undertake. From the initial design to the final handover, our team is dedicated to exceeding expectations.
            </p>
            <p className="text-slate-600 dark:text-slate-400">
                We believe that a home is more than just a structure; it's a foundation for memories and a sanctuary for families. This belief drives us to pour our hearts into every detail, ensuring that each JMM Home is a masterpiece of design, comfort, and durability.
            </p>
        </div>
        <div>
            <img src="https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg" alt="Commitment to excellence" className="rounded-lg shadow-2xl w-full" />
        </div>
      </div>
      
      {/* --- NEW SECTION: Why Choose Us --- */}
      <div className="py-20">
          <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Why Choose JMM Homes?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map(item => (
                  <div key={item.title} className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm text-center">
                      <div className="flex justify-center mb-4">
                          <div className="bg-orange-500/20 p-3 rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                            </svg>
                          </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                  </div>
              ))}
          </div>
      </div>
    </div>
  );
}

export default AboutPage;