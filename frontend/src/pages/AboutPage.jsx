// src/pages/AboutPage.jsx
import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { FiTarget, FiEye, FiHeart, FiAward, FiHome, FiUsers } from 'react-icons/fi';

import ceoImage from '../assets/Mhatre.jpg'; // Make sure Mhatre.jpg is in src/assets/

// Helper component for animated sections
const AnimatedSection = ({ children, delay = 0.2 }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, delay }}
  >
    {children}
  </motion.div>
);

// Data for new and existing sections
const missionVision = [
    { icon: <FiTarget />, title: 'Our Mission', description: 'To craft superior quality homes that blend innovative design with functionality, ensuring every family finds their perfect sanctuary with us.' },
    { icon: <FiEye />, title: 'Our Vision', description: 'To be the most trusted and sought-after real estate developer, renowned for our commitment to excellence, transparency, and building lifelong relationships with our clients.' },
];

const timelineEvents = [
    { year: '2018', title: 'Foundation Laid', description: 'JMM Homes was founded with a singular vision: to redefine quality living.' },
    { year: '2020', title: 'First Landmark Project', description: 'Successfully completed and delivered our flagship residential complex, setting a new benchmark.' },
    { year: '2022', title: 'Geographical Expansion', description: 'Expanded our operations to new cities, bringing our mark of quality to a wider audience.' },
    { year: '2024', title: '50+ Happy Families', description: 'Celebrated the milestone of creating dream homes for over 50 families.' },
];

const stats = [
    { icon: <FiHome />, end: 30, suffix: '+', label: 'Projects Completed' },
    { icon: <FiUsers />, end: 50, suffix: '+', label: 'Happy Families' },
    { icon: <FiAward />, end: 99, suffix: '%', label: 'Client Satisfaction' },
];

const testimonials = [
    { name: 'Rohan & Priya Sharma', quote: "The attention to detail in our home is simply outstanding. JMM Homes delivered more than just a house; they gave us a home. The entire process was transparent and seamless." },
    { name: 'Anjali Mehta', quote: "From the initial consultation to the final handover, the team was professional and incredibly supportive. Their commitment to quality is visible in every corner of our apartment." },
    { name: 'Vikram Singh', quote: "I was impressed by their innovative designs and use of sustainable materials. They are truly building homes for the future. Highly recommended!" },
];

const coreValues = [
    { icon: <FiHeart />, title: 'Quality', description: 'We use only the finest materials and craftsmanship to ensure every project stands the test of time.' },
    { icon: <FiAward />, title: 'Integrity', description: 'Our business is built on transparency and trust. We maintain open communication with our clients.' },
    { icon: <FiTarget />, title: 'Innovation', description: 'We embrace modern techniques and sustainable practices to build homes that are efficient and future-ready.' },
];


function AboutPage() {
  return (
    // Added a subtle dot pattern to the background for a premium feel
    <div className="bg-slate-50 dark:bg-slate-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="container mx-auto px-6 py-20">
        
        {/* --- HERO SECTION --- */}
        <AnimatedSection>
          <div className="text-center pt-16 pb-24">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-slate-800 dark:text-white">
              Crafting Homes, <span className="text-orange-500">Building Trust.</span>
            </h1>
            <p className="text-lg max-w-3xl mx-auto text-slate-600 dark:text-slate-400">
              JMM Homes was founded on the principle of creating exceptional living spaces that blend quality, comfort, and modern design.
            </p>
          </div>
        </AnimatedSection>

        {/* --- CEO SECTION --- */}
        <AnimatedSection>
          <div className="py-24">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-center max-w-7xl mx-auto">
              <div className="md:col-span-2 flex justify-center">
                  <img src={ceoImage} alt="Vipul Mhatre, CEO of JMM Homes" className="rounded-lg shadow-2xl w-full max-w-sm object-cover" />
              </div>
              <div className="md:col-span-3">
                  <h2 className="text-sm font-bold uppercase text-orange-500 tracking-widest mb-2">A Message from the Visionary</h2>
                  {/* === NAME UPDATED AND HIGHLIGHTED HERE === */}
                  <h3 className="text-4xl font-bold mb-2 text-slate-800 dark:text-white">
                    <span className="text-orange-500">Vipul Mhatre</span>
                  </h3>
                  <p className="font-semibold text-slate-600 dark:text-slate-400 mb-6">CEO & Founder, JMM Homes</p>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-4 text-lg">
                    Vipul Mhatre, a passionate entrepreneur and the driving force behind JM Mhatre Infra Logistics. With a strong belief in building dreams from the ground up, he began his journey from scratch — turning challenges into opportunities through hard work, dedication, and an eye for quality.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-lg">
                    Under his leadership, JMM Homes has grown into a trusted name in construction and real estate, known for delivering excellence, reliability, and innovation. Every project reflects his commitment to creating spaces that combine modern design, durability, and comfort — where every home tells a story of trust and craftsmanship.
                  </p>

              </div>
            </div>
          </div>
        </AnimatedSection>
        
        {/* --- NEW: MISSION & VISION SECTION --- */}
        <AnimatedSection>
            <div className="py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-5xl mx-auto">
                    {missionVision.map(item => (
                        <div key={item.title} className="flex items-start gap-6">
                            <div className="text-4xl text-orange-500 mt-1">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* --- NEW: OUR JOURNEY (TIMELINE) SECTION --- */}
        <AnimatedSection>
          <div className="py-24">
            <h2 className="text-4xl font-bold text-center mb-16 text-slate-800 dark:text-white">Our Journey</h2>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-1/2 w-0.5 h-full bg-orange-200 dark:bg-slate-700 transform -translate-x-1/2"></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="w-5/12"></div>
                  <div className="z-10 bg-orange-500 text-white rounded-full w-24 h-24 flex items-center justify-center font-bold text-xl shadow-lg">
                    {event.year}
                  </div>
                  <div className="w-5/12 bg-white/80 dark:bg-slate-800/80 p-6 rounded-lg shadow-xl backdrop-blur-sm">
                    <h3 className="font-bold text-xl mb-1 text-orange-500">{event.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* --- NEW: THE NUMBERS SPEAK SECTION --- */}
        <AnimatedSection>
          <div className="py-24">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {stats.map(stat => (
                <div key={stat.label} className="bg-white/50 dark:bg-slate-800/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                  <div className="text-5xl text-orange-500 mb-4 mx-auto w-fit">{stat.icon}</div>
                  <div className="text-5xl font-bold text-slate-800 dark:text-white">
                    <CountUp end={stat.end} duration={3} enableScrollSpy />{stat.suffix}
                  </div>
                  <p className="text-slate-500 dark:text-slate-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>
        
        {/* --- RE-STYLED: CORE VALUES SECTION --- */}
        <AnimatedSection>
            <div className="py-24">
                <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">Our Core Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {coreValues.map(value => (
                        <div key={value.title} className="text-center p-8 bg-white/50 dark:bg-slate-800/50 rounded-lg shadow-lg backdrop-blur-sm">
                            <div className="flex justify-center mb-4">
                                <div className="bg-orange-500/20 p-4 rounded-full text-4xl text-orange-500">
                                  {value.icon}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{value.title}</h3>
                            <p className="text-slate-600 dark:text-slate-400">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

        {/* --- NEW: TESTIMONIALS SECTION --- */}
        <AnimatedSection>
            <div className="py-24">
                <h2 className="text-4xl font-bold text-center mb-12 text-slate-800 dark:text-white">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {testimonials.map(testimonial => (
                        <div key={testimonial.name} className="bg-white/80 dark:bg-slate-800/80 p-8 rounded-lg shadow-xl backdrop-blur-sm flex flex-col">
                            <p className="text-slate-600 dark:text-slate-400 flex-grow">"{testimonial.quote}"</p>
                            <p className="font-bold text-orange-500 mt-6">- {testimonial.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </AnimatedSection>

      </div>
    </div>
  );
}

export default AboutPage;