import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBriefcase, FaDownload } from 'react-icons/fa';

const Resume = ({ darkMode }) => {
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Education data
  const education = [
    {
      id: 1,
      institution: 'SRM University, Delhi - NCR',
      degree: 'Bachelor of Technology in Computer Science',
      period: '2021 — 2025',
      description: 'Pursuing a Bachelor of Technology in Computer Science and Engineering. Developed a strong foundation in software engineering principles, data structures, algorithms, and web development. Actively participated in various technical clubs and hackathons.'
    },
    {
      id: 2,
      institution: 'Nehru Balodyan Inter College, Jaunpur',
      degree: 'Higher Secondary Education (Science)',
      period: '2019 - 2021',
      description: 'Completed my higher secondary education with a focus on Science, securing a strong academic record. Developed a keen interest in technology and software development, laying the groundwork for my future studies in computer science.'
    }
  ];

  // Experience data
  const experience = [
    {
      id: 1,
      company: 'Univest, Gurugram',
      role: 'Backend Developer Intern',
      period: 'Jan 2025 — current',
      description: 'Serving as a Backend Developer Intern, where I am developing and maintaining server-side applications, optimized database performance, implementing APIs, and ensuring seamless integration with front-end systems. Contributed to enhancing system scalability, reliability and performance'
     
     
    },
    {
      id: 2,
      company: 'Varsity Pro, New-Delhi',
      role: 'Software Developer',
      period: 'June 2024 — September 2024',
      description: 'Worked as a Software Developer, contributing to the design, development, and implementation of scalable software solutions. Collaborated with cross-functional teams to ensure the delivery of high-quality software products.'
    
    },
    {
      id: 3,
      company: 'Skolor, New-Delhi',
      role: 'Data Science Intern',
      period: 'August 2022 — October 2022',
      description: 'Served as a Data Science Intern, where I applied data analysis techniques to extract insights from complex datasets, supported data-driven decision-making, and worked on predictive modeling projects.'
     
    }
  ];

  // Skills data
  const skills = [
    { id: 1, name: 'JavaScript', level: 90 },
    { id: 2, name: 'React', level: 85 },
    { id: 3, name: 'Node.js', level: 80 },
    { id: 4, name: 'CSS/Tailwind', level: 90 },
    { id: 5, name: 'UI/UX Design', level: 75 },
    { id: 6, name: 'SQL', level: 70 }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      {/* Education Section */}
      <motion.div variants={sectionVariants}>
        <div className="flex items-center gap-3 mb-6">
          <FaGraduationCap className={`text-2xl ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            Education
          </h2>
        </div>
        
        <div className="space-y-6">
          {education.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className={`relative pl-8 pb-6 border-l-2 ${
                darkMode ? 'border-gray-700 last:border-transparent' : 'border-gray-200 last:border-transparent'
              }`}
            >
              <div className={`absolute top-0 left-0 w-4 h-4 rounded-full -translate-x-1/2 ${
                darkMode ? 'bg-teal-400' : 'bg-teal-600'
              }`}></div>
              
              <div className={`p-5 rounded-lg ${
                darkMode ? 'bg-gray-700/50' : 'bg-white shadow-md'
              }`}>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.institution}
                </h3>
                <div className={`${darkMode ? 'text-teal-400' : 'text-teal-600'} font-medium mb-1`}>
                  {item.degree}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mb-3`}>
                  {item.period}
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Section */}
      <motion.div variants={sectionVariants}>
        <div className="flex items-center gap-3 mb-6">
          <FaBriefcase className={`text-2xl ${darkMode ? 'text-teal-400' : 'text-teal-600'}`} />
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
            Experience
          </h2>
        </div>
        
        <div className="space-y-6">
          {experience.map((item) => (
            <motion.div 
              key={item.id}
              variants={itemVariants}
              className={`relative pl-8 pb-6 border-l-2 ${
                darkMode ? 'border-gray-700 last:border-transparent' : 'border-gray-200 last:border-transparent'
              }`}
            >
              <div className={`absolute top-0 left-0 w-4 h-4 rounded-full -translate-x-1/2 ${
                darkMode ? 'bg-teal-400' : 'bg-teal-600'
              }`}></div>
              
              <div className={`p-5 rounded-lg ${
                darkMode ? 'bg-gray-700/50' : 'bg-white shadow-md'
              }`}>
                <h3 className={`text-xl font-bold mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {item.company}
                </h3>
                <div className={`${darkMode ? 'text-teal-400' : 'text-teal-600'} font-medium mb-1`}>
                  {item.role}
                </div>
                <div className={`${darkMode ? 'text-gray-400' : 'text-gray-500'} text-sm mb-3`}>
                  {item.period}
                </div>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Section */}
      <motion.div variants={sectionVariants}>
        <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}>
          Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <motion.div key={skill.id} variants={itemVariants}>
              <div className="flex justify-between mb-2">
                <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  {skill.name}
                </span>
                <span className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                  {skill.level}%
                </span>
              </div>
              <div className={`w-full h-2 rounded-full ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
                <motion.div 
                  className={`h-full rounded-full ${darkMode ? 'bg-teal-400' : 'bg-teal-600'}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.3 }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Download Resume Button */}
      <motion.div 
        variants={sectionVariants} 
        className="flex justify-center mt-8"
      >
        <a
          href="https://drive.google.com/file/d/1mpJaO58gUWt2vXoE8xACNDYhEwSMiBoy/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg ${
            darkMode 
            ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg' 
            : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg'
          } transition-all duration-300`}
        >
          <FaDownload className="w-4 h-4" />
          <span>Download Full Resume</span>
        </a>
      </motion.div>
    </motion.div>
  );
};

export default Resume;