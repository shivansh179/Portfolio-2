import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Projects = () => {
  // Define project data with categories and descriptions
  const projectData = [
    { id: 1, name: "DISNEY CLONE", category: "Web Design", description: "This project is a clone of the Disney+ Hotstar application. It was my first project, where I aimed to replicate the design and functionality of the original platform. Through this project, I gained hands-on experience in front-end development, particularly in creating a seamless user interface that mirrors the real Disney+ Hotstar experience.", src:"/Disney.jpeg", link:"https://disney-4cmk.vercel.app/" },
    { id: 2, name: "POLLUTION ANALYZER", category: "Application", description: "This web app provides real-time analysis of air pollution levels. Users can input the coordinates of a location to check the air quality index (AQI) and see detailed information about the pollutants and gases present in the air. This project helped me delve into API integration and environmental data analysis, offering valuable insights into the current air quality conditions.", src:"/Pollution.jpeg", link:"https://air-pollution-analyzer.vercel.app/" },
    { id: 3, name: "FINTECH AUTHENTICATION", category: "Web Development", description: "This project focuses on developing alternative methods for digital transaction authentication, beyond the traditional OTP system. The challenge was posed by a fintech company that wanted to reduce dependence on telecom companies for OTPs. I implemented various authentication methods, including biometric recognition, face ID, magic links, and security pins, providing a more secure and reliable solution.", src:"/Fintech.jpeg", link:"https://fintech-beige-seven.vercel.app/" },
    { id: 4, name: "CIIE SRMUH", category: "Application", description: "This web app was developed for my college's incubation cell, which focuses on innovation and entrepreneurship. The platform serves both students and administration, facilitating the management of events, workshops, and student data. It features separate interfaces for clients and admins, making it a comprehensive tool for organizing and managing incubation activities. This project enhanced my skills in full-stack development and user management.", src:"/Incubation.jpeg", link:"https://ciiesrmuh.in/" },
    { id: 4, name: "Gemini", category: "Application", description: "This project is a working clone of the Gemini web browser, built from the ground up. It faithfully replicates the core functionality of Gemini, including fetching and displaying Gemini documents, navigating between resources using links, and rendering basic text and code formats. The project utilizes [Firebase, Javascript and Tailwind] to process Gemini requests and render the content. The user interface is designed to be intuitive and familiar, offering a streamlined experience for exploring the Gemini network. This clone provides a valuable tool for understanding the principles behind the Gemini protocol and serves as a starting point for further exploration and development within the Gemini ecosystem.", src:"/robot.jpg", link:"https://gemini-api-project.vercel.app/" },
  ];

  // State to track the selected category and menu toggle
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false); // For toggling the menu on small screens

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All"
    ? projectData
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='h-auto w-full bg-gray-900 shadow-lg rounded-lg md:p-6 border border-gray-900'
    >
      <h1 className='font-bold font-mono text-2xl mb-4 text-teal-200'>Projects</h1>
      <hr className='w-48 border-teal-200'/>

      {/* Menu Button for small screens */}
      <div className='block sm:hidden'>
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className='text-white bg-teal-600 p-2 rounded-md font-mono font-bold mt-2'
        >
          {menuOpen ? 'Close' : 'Filter'}
        </button>
      </div>

      {/* Filter Buttons */}
      <motion.ul 
        className={`${menuOpen ? 'block' : 'hidden'} sm:flex gap-7 text-white font-mono mt-6 font-bold text-sm`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <li 
          className={`cursor-pointer hover:text-teal-200 ${selectedCategory === 'All' ? 'text-teal-200' : ''}`} 
          onClick={() => setSelectedCategory("All")}
        >
          All
        </li>
        <li 
          className={`cursor-pointer hover:text-teal-200 ${selectedCategory === 'Web Design' ? 'text-teal-200' : ''}`} 
          onClick={() => setSelectedCategory("Web Design")}
        >
          Web Design
        </li>
        <li 
          className={`cursor-pointer hover:text-teal-200 ${selectedCategory === 'Application' ? 'text-teal-200' : ''}`} 
          onClick={() => setSelectedCategory("Application")}
        >
          Application
        </li>
        <li 
          className={`cursor-pointer hover:text-teal-200 ${selectedCategory === 'Web Development' ? 'text-teal-200' : ''}`} 
          onClick={() => setSelectedCategory("Web Development")}
        >
          Web Development
        </li>
      </motion.ul>

      {/* Projects Grid */}
      <motion.div 
        className='mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, scale: 0.8 },
          visible: {
            opacity: 1,
            scale: 1,
            transition: {
              delayChildren: 0.3,
              staggerChildren: 0.2
            }
          }
        }}
      >
        {filteredProjects.map((project) => (
          <motion.div 
            key={project.id} 
            className='relative group w-full bg-gray-800 p-3 rounded-md'
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='block'
            >
              <div className='text-teal-500 font-mono font-bold bg-gray-700 rounded-md p-2 px-4 mb-1 w-fit'>{project.name}</div>
              <img 
                src={project.src} 
                alt={project.name} 
                className='text-teal-500 rounded-lg shadow-lg object-cover w-full lg:h-72 h-50 transition duration-300 transform group-hover:scale-105'
              />
              <p className='text-sm mt-2 font-mono font-semibold text-teal-500'>{project.description}</p>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
