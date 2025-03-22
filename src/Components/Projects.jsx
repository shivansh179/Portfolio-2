import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGlobe, FaFilter } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
  // Define project data with categories and descriptions
  const projectData = [
    { 
      id: 1, 
      name: "CIIE SRMUH", 
      category: "Application", 
      description: "This web app was developed for my college's incubation cell, which focuses on innovation and entrepreneurship. The platform serves both students and administration, facilitating the management of events, workshops, and student data.", 
      src:"/Incubation.jpeg", 
      link:"https://ciiesrmuh.in/",
      tags: ["React", "Node.js", "MongoDB"]
    },
    { 
      id: 2, 
      name: "FOOD ALLERGY DETECTOR", 
      category: "Application", 
      description: "Developed a real-time food allergy detector designed to support people with food allergies. Users can create a profile and scan product barcodes to receive alerts if the product contains any allergenic ingredients.", 
      src:"/food.jpg", 
      link:"https://allergic-food-detector.vercel.app/",
      tags: ["React", "API Integration", "Firebase"]
    },
    { 
      id: 3, 
      name: "ALTERNATIVE AUTHENTICATION SYSTEM", 
      category: "Web Development", 
      description: "Created a multi-factor authentication system that reduced dependency on traditional OTP methods by 50%. Implemented advanced security measures like biometric authentication, face ID, and magic links.", 
      src:"/Auth.jpg", 
      link:"https://fintech-beige-seven.vercel.app/",
      tags: ["React", "Node.js", "Security"]
    },
    { 
      id: 4, 
      name: "GEMINI CLONE", 
      category: "Application", 
      description: "This project is a working clone of the Gemini web browser, built to replicate its core functionality, such as fetching and displaying Gemini documents, navigating resources using links, and rendering basic text formats.", 
      src:"/Gemini.jpg", 
      link:"https://gemini-api-project.vercel.app/",
      tags: ["JavaScript", "HTML", "CSS"]
    },
    { 
      id: 5, 
      name: "Unify - A Blogging Platform", 
      category: "Web Design", 
      description: "Unify is a blogging platform designed for seamless content sharing and collaboration. It features a modern, responsive interface, user authentication, and a dashboard for managing posts.", 
      src:"/Blog.png", 
      link:"https://blogging-app-flame.vercel.app/",
      tags: ["React", "MongoDB", "Express"]
    },
    { 
      id: 6, 
      name: "POLLUTION ANALYZER", 
      category: "Application", 
      description: "This web app provides real-time analysis of air pollution levels. Users can input the coordinates of a location to check the air quality index (AQI) and see detailed information about the pollutants and gases present in the air.", 
      src:"/Pollution.jpeg", 
      link:"https://air-pollution-analyzer.vercel.app/",
      tags: ["React", "API Integration", "Data Visualization"]
    },
    { 
      id: 7, 
      name: "Decentralize Voting Platform", 
      category: "Application", 
      description: "This blockchain-based platform ensures transparency and security during voting processes. It uses Ethereum for real-time vote tracking and cryptographic measures to guarantee voter privacy.", 
      src:"/vote.png", 
      link:"https://e-vote-pearl.vercel.app/",
      tags: ["React", "Ethereum", "Blockchain", "Solidity"]
    },
  ];

  // State to track the selected category and menu toggle
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  const categories = ["All", "Web Design", "Application", "Web Development"];

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

  const filterVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: { type: 'spring', stiffness: 400 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-8"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <motion.h2 
          variants={filterVariants}
          className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}
        >
          My Projects
        </motion.h2>

        {/* Filter Section */}
        <motion.div variants={filterVariants} className="relative">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg ${
              darkMode 
                ? 'bg-gray-700 text-white hover:bg-gray-600' 
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            } transition-colors`}
          >
            <FaFilter className="text-xs" />
            <span>Filter: {selectedCategory}</span>
          </button>

          {/* Dropdown */}
          <AnimatePresence>
            {isFilterOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className={`absolute z-10 mt-2 right-0 w-48 rounded-lg shadow-lg ${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } overflow-hidden`}
                style={{ minWidth: '180px' }}
              >
                <div className="py-1">
                  {categories.map((category) => (
                    <button
                      key={category}
                      className={`block w-full text-left px-4 py-2 text-sm ${
                        selectedCategory === category
                          ? darkMode
                            ? 'bg-gray-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                          : darkMode
                            ? 'text-gray-200 hover:bg-gray-600'
                            : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => {
                        setSelectedCategory(category);
                        setIsFilterOpen(false);
                      }}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={projectVariants}
              whileHover="hover"
              layout
              className={`overflow-hidden rounded-xl ${
                darkMode ? 'bg-gray-800' : 'bg-white shadow-md'
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.src}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  darkMode ? 'from-gray-900' : 'from-black/60'
                } opacity-50`}></div>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                    {project.name}
                  </h3>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`p-2 rounded-full ${
                      darkMode 
                        ? 'bg-teal-500/20 text-teal-400 hover:bg-teal-500/30' 
                        : 'bg-teal-100 text-teal-600 hover:bg-teal-200'
                    } transition-colors`}
                  >
                    <FaGlobe className="w-4 h-4" />
                  </a>
                </div>

                <p className={`mb-4 line-clamp-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {project.description}
                </p>

                {/* Project Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className={`text-xs px-2 py-1 rounded-full ${
                        darkMode
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`text-center py-10 ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}
        >
          <p>No projects found in this category.</p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Projects;