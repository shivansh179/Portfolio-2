import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import Left from './Components/Left';
import Intro from './Components/Intro';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 10000); // Set the duration for the intro display (e.g., 3000ms = 3 seconds)

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  return (
    <>
      {showIntro ? (
        <Intro />
      ) : (
        <>
        <div className='bg-gray-800 h-fit flex flex-col md:flex-row'>
        
      
          <div className='md:h-screen'>
            <Left />
          </div>
          <Navbar />
        
        </div>
      <div className='bg-gray-800 text-center text-teal-400 font-bold text-1xl flex flex-col'>

       <span>  Design Inspired by <span className='text-green-600'> Om Kharche</span> </span> 
       <span>  Created using React.js, Tailwind CSS, and Framer Motion </span> 
      <span>  Coded with ❤️ Shivansh Shukla </span>

      </div>
         
        </>
      )}

    </>
  );
}

export default App;
