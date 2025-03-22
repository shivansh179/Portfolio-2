import React from 'react';
import { motion } from 'framer-motion';
import { FaClock, FaTools, FaPen } from 'react-icons/fa';

const Blog = ({ darkMode }) => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const pulseVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "loop"
      }
    }
  };

  const spinVariants = {
    hidden: { rotate: 0, opacity: 0 },
    visible: { 
      rotate: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 200 }
    },
    spin: {
      rotate: 360,
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="h-full flex flex-col items-center justify-center text-center py-16"
    >
      <motion.div 
        variants={itemVariants}
        className={`text-5xl font-bold mb-8 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}
      >
        Blog Coming Soon
      </motion.div>

      <motion.div
        variants={pulseVariants}
        animate="pulse"
        className={`p-6 rounded-full ${darkMode ? 'bg-gray-800' : 'bg-gray-100'} mb-10`}
      >
        <motion.div
          variants={spinVariants}
          animate="spin"
          className={`w-24 h-24 border-4 rounded-full border-t-transparent ${
            darkMode ? 'border-teal-400' : 'border-teal-600'
          }`}
        ></motion.div>
      </motion.div>

      <motion.p 
        variants={itemVariants}
        className={`text-xl mb-10 max-w-lg ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}
      >
        I'm currently working on something amazing! My blog will feature insights on web development, design trends, and technical tutorials.
      </motion.p>

      {/* Features to Expect */}
      <motion.div 
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mb-10"
      >
        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} flex flex-col items-center`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'} mb-4`}>
            <FaClock className="w-6 h-6" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Weekly Content
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
            Regular articles and tutorials to help you stay updated with the latest tech trends.
          </p>
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} flex flex-col items-center`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'} mb-4`}>
            <FaTools className="w-6 h-6" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Developer Resources
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
            Curated tools, libraries, and resources to enhance your development workflow.
          </p>
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} flex flex-col items-center`}>
          <div className={`p-3 rounded-full ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'} mb-4`}>
            <FaPen className="w-6 h-6" />
          </div>
          <h3 className={`text-lg font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Tech Stories
          </h3>
          <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} text-center`}>
            Personal experiences and insights from my journey as a developer.
          </p>
        </div>
      </motion.div>

      {/* Newsletter Signup */}
      <motion.div 
        variants={itemVariants}
        className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white shadow-md'} max-w-xl mb-10`}
      >
        <h3 className={`text-xl font-bold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
          Get Notified When It's Ready
        </h3>
        <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-4`}>
          Subscribe to receive updates and be the first to know when the blog launches.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <input 
            type="email" 
            placeholder="Your email address" 
            className={`flex-grow px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 text-white border-gray-600 focus:border-teal-500' 
                : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-teal-500'
            } border focus:ring-2 focus:ring-teal-500/50 focus:outline-none transition-colors`}
          />
          <button 
            className={`px-6 py-2 rounded-lg font-medium ${
              darkMode 
                ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg' 
                : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg'
            } transition-all duration-300`}
          >
            Notify Me
          </button>
        </div>
      </motion.div>

      <motion.div 
        variants={itemVariants}
        className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
      >
        Expected launch date: Q2 2025
      </motion.div>
    </motion.div>
  );
};

export default Blog;