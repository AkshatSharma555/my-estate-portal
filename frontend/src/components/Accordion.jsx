// src/components/Accordion.jsx
import React from 'react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-slate-200 dark:border-slate-700 py-4">
      <motion.header
        initial={false}
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold text-lg">{title}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: 'auto' },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-slate-600 dark:text-slate-400">
                {children}
            </div>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Accordion;