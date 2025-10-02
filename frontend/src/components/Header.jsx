// src/components/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import ThemeToggleButton from './ThemeToggleButton'; // Naya component import karo

// ... (navContainerVariants, navItemVariants, NavItem component same rahenge)
const navContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};
const navItemVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
};
const NavItem = ({ to, children }) => {
    const navLinkClass = ({ isActive }) => isActive ? "text-orange-500" : "text-slate-700 dark:text-slate-300";
    return (
        <NavLink to={to} className={navLinkClass}>
            {({ isActive }) => (
                <motion.div className="relative px-2 py-1" whileHover="hover">
                    <span className="relative z-10">{children}</span>
                    {isActive && (
                        <motion.div 
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                            layoutId="underline"
                            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        />
                    )}
                    <motion.div 
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500"
                        variants={{ hover: { scaleX: 1 }, initial: { scaleX: 0 } }}
                        initial="initial"
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>
            )}
        </NavLink>
    );
};


function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerClass = isScrolled 
    ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm shadow-md' 
    : 'bg-transparent';

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 20 }}
    >
      <motion.nav 
        className="container mx-auto px-6 py-4 flex justify-between items-center"
        variants={navContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={navItemVariants}>
          <Link to="/" className="text-2xl font-bold text-slate-800 dark:text-white">
            JMM Homes
          </Link>
        </motion.div>
        
        <motion.div className="flex items-center space-x-6 font-semibold" variants={navContainerVariants}>
          <motion.div variants={navItemVariants}><NavItem to="/">Home</NavItem></motion.div>
          <motion.div variants={navItemVariants}><NavItem to="/projects">Projects</NavItem></motion.div>
          <motion.div variants={navItemVariants}><NavItem to="/about">About Us</NavItem></motion.div>
          <motion.div variants={navItemVariants}><NavItem to="/contact">Contact</NavItem></motion.div>
          <motion.div variants={navItemVariants}>
            {/* Purane button ki jagah naya component */}
            <ThemeToggleButton />
          </motion.div>
        </motion.div>
      </motion.nav>
    </motion.header>
  );
}

export default Header;