import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Blog from './Blog';

const Navbar = ({ darkMode }) => {
  const [activeComponent, setActiveComponent] = useState('About');

  const navItems = [
    { id: 'About', label: 'About' },
    { id: 'Resume', label: 'Resume' },
    { id: 'Projects', label: 'Projects' },
    { id: 'Blog', label: 'Blog' },
    { id: 'Contact', label: 'Contact' }
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <About darkMode={darkMode} />;
      case 'Resume':
        return <Resume darkMode={darkMode} />;
      case 'Projects':
        return <Projects darkMode={darkMode} />;
      case 'Contact':
        return <Contact darkMode={darkMode} />;
      case 'Blog':
        return <Blog darkMode={darkMode} />;
      default:
        return <About darkMode={darkMode} />;
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300 }
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
    exit: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className={`rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
      darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
    }`}>
      {/* Navigation */}
      <motion.div 
        className={`py-4 px-6 border-b ${
          darkMode ? 'border-gray-700' : 'border-gray-200'
        }`}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-wrap justify-center sm:justify-start gap-1 sm:gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              variants={itemVariants}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeComponent === item.id
                  ? darkMode
                    ? 'text-white bg-gradient-to-r from-teal-600 to-blue-600 shadow-md'
                    : 'text-white bg-gradient-to-r from-teal-500 to-blue-500 shadow-md'
                  : darkMode
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
              onClick={() => setActiveComponent(item.id)}
            >
              {item.label}
            </motion.button>
          ))}
        </div>
      </motion.div>

      {/* Content Area */}
      <div className="p-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeComponent}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;