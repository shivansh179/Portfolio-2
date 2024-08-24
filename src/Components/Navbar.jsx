import React, { useState } from 'react';
import Right from './Right';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';


const Navbar = () => {
  const [activeComponent, setActiveComponent] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderComponent = () => {
    switch (activeComponent) {
      case 'About':
        return <Right />;
      case 'Resume':
        return <Resume />;
      case 'Projects':
        return <Projects />
      case 'Contact':
        return <Contact />
      default:
        return <Right />;
    }
  };

  return (
    <div className='md:w-full bg-gray-900 shadow-lg rounded-lg m-4 border border-gray-900 relative'>
      {/* Hamburger button for small screens */}
      <div className='absolute top-2 right-2 md:hidden'>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className='text-yellow-400 hover:text-blue-200 focus:outline-none'
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>
      </div>

      {/* Navbar items */}
      <div className={`absolute -top-0.5 -right-0.5 md:flex md:gap-5 px-4 py-1 border-2 border-gray-800 font-mono font-semibold bg-gray-900 rounded-bl-lg ${isMenuOpen ? 'flex flex-col items-start' : 'hidden'} md:flex md:flex-row md:items-center`}>
        <button
          className={`transition-colors duration-300 ${
            activeComponent === 'About' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600 hover:text-blue-200'
          }`}
          onClick={() => {
            setActiveComponent('About');
            setIsMenuOpen(false);
          }}
        >
          About
        </button>
        <button
          className={`transition-colors duration-300 ${
            activeComponent === 'Resume' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600 hover:text-blue-200'
          }`}
          onClick={() => {
            setActiveComponent('Resume');
            setIsMenuOpen(false);
          }}
        >
          Resume
        </button>
        <button
          className={`transition-colors duration-300 ${
            activeComponent === 'Projects' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600 hover:text-blue-200'
          }`}
          onClick={() => {
            setActiveComponent('Projects');
            setIsMenuOpen(false);
          }}
        >
          Projects
        </button>
        <button
          className={`transition-colors duration-300 ${
            activeComponent === 'Portfolio' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600 hover:text-blue-200'
          }`}
          onClick={() => {
            setActiveComponent('Portfolio');
            setIsMenuOpen(false);
          }}
        >
          Portfolio
        </button>
        <button
          className={`transition-colors duration-300 ${
            activeComponent === 'Contact' ? 'text-yellow-400 border-b-2 border-yellow-400' : 'text-gray-600 hover:text-blue-200'
          }`}
          onClick={() => {
            setActiveComponent('Contact');
            setIsMenuOpen(false);
          }}
        >
          Contact
        </button>
      </div>

      {/* Render the selected component */}
      <div className='p-4 md:p-8'>
        {renderComponent()}
      </div>
    </div>
  );
};

export default Navbar;
