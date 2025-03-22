import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCode, FaPencilRuler, FaLightbulb } from "react-icons/fa";
import { BiData } from "react-icons/bi";
import { HiOutlineChartBar } from "react-icons/hi";

const About = ({ darkMode }) => {
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
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    },
    hover: {
      scale: 1.03,
      boxShadow: "0 10px 20px rgba(0, 0, 0, 0.12)",
      transition: { type: 'spring', stiffness: 400 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      {/* About Me Section */}
      <motion.div variants={itemVariants}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
          About Me
        </h2>
        <div className={`space-y-4 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p className="leading-relaxed">
            I am a passionate Full Stack Developer with a strong background in web and graphic design. My journey started with a fascination for creative design, which soon evolved into a love for coding. I blend creativity with technical skill to build engaging, user-centered digital experiences.
          </p>
          <p className="leading-relaxed">
            With a keen eye for detail and a dedication to continuous learning, I thrive on challenges that push the boundaries of technology and design. My approach combines innovative problem-solving with strategic thinking to deliver solutions that not only meet but exceed expectations.
          </p>
          <p className="leading-relaxed">
            I believe in creating impactful digital products that enhance user experience and drive innovation. My goal is to contribute to meaningful projects that make a positive difference in people's lives through thoughtful design and efficient functionality.
          </p>
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={itemVariants}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
          What I Do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: UI/UX Design */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'}`}>
                <FaPencilRuler className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  UI/UX Design
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I create intuitive and engaging user interfaces. My design process includes user research, wireframing, and prototyping to ensure the end product is both functional and delightful to use.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 2: Full Stack Development */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'}`}>
                <FaCode className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Full Stack Development
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I build end-to-end solutions covering both front-end and back-end development. My expertise includes creating scalable applications and integrating various technologies for a seamless user experience.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Graphic Design */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'}`}>
                <FaPaintBrush className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Graphic Design
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I craft visually appealing designs that capture a brand's essence. My approach combines creativity with strategic thinking to produce designs that effectively communicate the desired message.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Database Management */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-green-500/20 text-green-400' : 'bg-green-100 text-green-600'}`}>
                <BiData className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Database Management
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I have a strong foundation in database management and SQL. My experience includes designing efficient schemas, writing complex queries, and ensuring data integrity in various database systems.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 5: Project Management */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-yellow-500/20 text-yellow-400' : 'bg-yellow-100 text-yellow-600'}`}>
                <HiOutlineChartBar className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Project Management
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I manage projects from inception to completion, ensuring they're delivered on time and within budget. My approach includes planning, coordination, and communication with stakeholders.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 6: Problem Solving */}
          <motion.div
            variants={cardVariants}
            whileHover="hover"
            className={`rounded-xl p-6 ${
              darkMode 
                ? 'bg-gray-700 hover:bg-gray-700/80' 
                : 'bg-white shadow-md hover:shadow-lg'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-3 rounded-lg ${darkMode ? 'bg-red-500/20 text-red-400' : 'bg-red-100 text-red-600'}`}>
                <FaLightbulb className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`text-xl font-bold mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Problem Solving
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  I excel at tackling complex problems with innovative solutions. Whether debugging code, optimizing performance, or finding creative ways to overcome technical challenges, I approach each problem methodically.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;