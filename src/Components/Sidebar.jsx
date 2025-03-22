import React from 'react';
import { motion } from 'framer-motion';
import { MdEmail, MdLocationOn, MdDateRange, MdPhoneAndroid } from "react-icons/md";
import { FaGithub, FaLinkedin, FaInstagram, FaDownload } from "react-icons/fa";

const Sidebar = ({ darkMode }) => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.2,
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`rounded-2xl shadow-xl overflow-hidden transition-colors duration-300 ${
        darkMode ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-800 border border-gray-200'
      }`}
    >
      {/* Profile Header */}
      <div className={`relative py-10 px-6 ${darkMode ? 'bg-gradient-to-r from-teal-600 to-blue-600' : 'bg-gradient-to-r from-teal-400 to-blue-400'}`}>
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <motion.img 
            src="/avatar.jpg" 
            alt="Shivansh Shukla" 
            className="w-32 h-32 rounded-full border-4 border-white object-cover shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          />
        </div>
      </div>
      
      {/* Profile Info */}
      <div className="pt-20 pb-8 px-6 text-center">
        <motion.h1 
          className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}
          variants={itemVariants}
        >
          Shivansh Shukla
        </motion.h1>
        
        <motion.div 
          variants={itemVariants}
          className={`inline-block px-4 py-1 rounded-full text-white mt-2 text-sm font-medium ${
            darkMode ? 'bg-teal-600' : 'bg-teal-500'
          }`}
        >
          Full Stack Developer
        </motion.div>
        
        {/* Contact Information */}
        <motion.div 
          className="mt-8 space-y-4" 
          variants={itemVariants}
        >
          <a 
            href="mailto:Prasantshukla89@gmail.com" 
            className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}
          >
            <MdEmail className={`${darkMode ? 'text-teal-400' : 'text-teal-500'} text-xl`} />
            <span className="text-sm">Prasantshukla89@gmail.com</span>
          </a>
          
          <a 
            href="tel:+916387427935" 
            className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}
          >
            <MdPhoneAndroid className={`${darkMode ? 'text-teal-400' : 'text-teal-500'} text-xl`} />
            <span className="text-sm">+91 6387427935</span>
          </a>
          
          <div 
            className={`flex items-center gap-3 ${darkMode ? 'text-gray-300' : 'text-gray-600'} transition-colors`}
          >
            <MdDateRange className={`${darkMode ? 'text-teal-400' : 'text-teal-500'} text-xl`} />
            <span className="text-sm">August 25, 2003</span>
          </div>
          
          <a 
            href="https://www.google.com/maps/place/Delhi" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`flex items-center gap-3 ${darkMode ? 'text-gray-300 hover:text-teal-400' : 'text-gray-600 hover:text-teal-600'} transition-colors`}
          >
            <MdLocationOn className={`${darkMode ? 'text-teal-400' : 'text-teal-500'} text-xl`} />
            <span className="text-sm">Delhi, India</span>
          </a>
        </motion.div>
        
        {/* Social Media Links */}
        <motion.div 
          className="flex justify-center gap-5 mt-8" 
          variants={itemVariants}
        >
          <a 
            href="https://github.com/shivansh179" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'} transition-colors`}
          >
            <FaGithub className="w-5 h-5" />
          </a>
          
          <a 
            href="https://www.linkedin.com/in/shivansh-shukla-01a139234/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-gray-400 hover:text-blue-400' : 'text-gray-600 hover:text-blue-600'} transition-colors`}
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
          
          <a 
            href="https://www.instagram.com/shuklajiii_25/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${darkMode ? 'text-gray-400 hover:text-pink-400' : 'text-gray-600 hover:text-pink-600'} transition-colors`}
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </motion.div>
        
        {/* Resume Download Button */}
        <motion.div className="mt-8" variants={itemVariants}>
          <a
            href="https://drive.google.com/file/d/1mpJaO58gUWt2vXoE8xACNDYhEwSMiBoy/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${
              darkMode 
              ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg' 
              : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg'
            } transition-all duration-300`}
          >
            <FaDownload className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Sidebar;