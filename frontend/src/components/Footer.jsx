// src/components/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SplitText from './SplitText';

const socialLinks = [
    { name: 'Instagram', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg> },
    { name: 'LinkedIn', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg> },
    { name: 'Facebook', url: '#', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> },
];

function Footer() {
  return (
    <>
      {/* --- Call to Action Section --- */}
      <section className="py-20 bg-orange-500/10 dark:bg-orange-500/5">
        <div className="container mx-auto px-6 text-center">
            <SplitText 
                tag="h2"
                text="Let's Build Your Dream Home Together."
                className="text-4xl md:text-5xl font-bold mb-6 text-slate-800 dark:text-white"
                splitType="words"
            />
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <Link 
                    to="/contact"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 inline-block"
                >
                    Get a Free Quote
                </Link>
            </motion.div>
        </div>
      </section>

      {/* --- Main Footer --- */}
      <footer className="bg-slate-800 dark:bg-black text-slate-300">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold text-white mb-4">JMM Homes</h3>
              <p className="text-slate-400 max-w-md">
                Crafting exceptional living spaces with a commitment to quality, integrity, and innovation. Your vision is our blueprint for creating a legacy.
              </p>
              <div className="flex space-x-4 mt-6">
                {socialLinks.map(link => (
                    <motion.a 
                        key={link.name} 
                        href={link.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-orange-500 transition-colors"
                        whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                        {link.icon}
                    </motion.a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link to="/about" className="text-slate-400 hover:text-orange-500 transition-colors">About Us</Link></li>
                <li><Link to="/projects" className="text-slate-400 hover:text-orange-500 transition-colors">Projects</Link></li>
                <li><Link to="/contact" className="text-slate-400 hover:text-orange-500 transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Contact Info</h3>
              <ul className="space-y-2 text-slate-400">
                  <li>Nerul, Navi Mumbai</li>
                  <li>Email: contact@jmmhomes.in</li>
                  <li>Phone: 91 99207 02559</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-slate-700 text-center pt-8">
            <p className="text-slate-500">&copy; {new Date().getFullYear()} JMM Homes. All Rights Reserved. | <Link to="/admin/login" className="hover:text-orange-500 underline">Admin</Link></p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;