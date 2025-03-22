import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Intro from './Components/Intro';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 6000); // Reduced intro time for better UX

    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full h-screen"
          >
            <Intro onAnimationEnd={() => setShowIntro(false)} />
          </motion.div>
        ) : (
          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="container mx-auto px-4 py-8">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Sidebar */}
                <div className="lg:w-1/4">
                  <Sidebar darkMode={darkMode} />
                </div>
                
                {/* Main Content */}
                <div className="lg:w-3/4">
                  <div className="flex justify-end mb-4">
                    <button
                      onClick={toggleDarkMode}
                      className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-900'}`}
                    >
                      {darkMode ? '☀️' : '🌙'}
                    </button>
                  </div>
                  <Navbar darkMode={darkMode} />
                </div>
              </div>
            </div>
            
            {/* Footer */}
            <footer className={`py-6 text-center ${darkMode ? 'bg-gray-800 text-teal-400' : 'bg-gray-200 text-gray-700'} transition-colors duration-300`}>
              <div className="container mx-auto px-4">
                <p className="text-sm">
                  <span className="block">Created using React.js, Tailwind CSS, and Framer Motion</span>
                  <span className="block mt-1">Coded with ❤️ by Shivansh Shukla</span>
                </p>
              </div>
            </footer>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;