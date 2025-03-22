import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Intro = ({ onAnimationEnd }) => {
  const controlsFirstName = useAnimation();
  const controlsLastName = useAnimation();
  const controlsWelcome = useAnimation();
  const controlsBackground = useAnimation();
  const [isMounted, setIsMounted] = useState(false);

  // Set mounted state after component mounts
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Run animation sequence only after component is mounted
  useEffect(() => {
    if (!isMounted) return;

    const sequence = async () => {
      try {
        // Start with dark background
        await controlsBackground.start({ opacity: 1 });
        
        // First name animation
        await controlsFirstName.start("visible");
        
        // Last name animation with a slight delay
        await new Promise(resolve => setTimeout(resolve, 300));
        await controlsLastName.start("visible");
        
        // Show the toast
        toast.success('Welcome to my portfolio!', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: { fontSize: '16px', fontWeight: 'bold' },
        });
        
        // Short pause for the user to read the names
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Move names away
        await Promise.all([
          controlsFirstName.start("exitLeft"),
          controlsLastName.start("exitRight"),
        ]);
        
        // Show welcome text
        await controlsWelcome.start("visible");
        
        // Short pause to read welcome text
        await new Promise(resolve => setTimeout(resolve, 1200));
        
        // Fade everything out
        await Promise.all([
          controlsWelcome.start("exit"),
          controlsBackground.start({ opacity: 0, transition: { duration: 0.8 } }),
        ]);
        
        // End animation
        if (onAnimationEnd) onAnimationEnd();
      } catch (error) {
        console.error("Animation sequence error:", error);
        // Fallback to end animation if there's an error
        if (onAnimationEnd) onAnimationEnd();
      }
    };

    sequence();
  }, [controlsFirstName, controlsLastName, controlsWelcome, controlsBackground, onAnimationEnd, isMounted]);

  // Variants for text animations
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 100,
        staggerChildren: 0.1 
      } 
    },
    exitLeft: { 
      opacity: 0, 
      x: -100, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    },
    exitRight: { 
      opacity: 0, 
      x: 100, 
      transition: { duration: 0.8, ease: "easeInOut" } 
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: "spring", stiffness: 200 }
    }
  };

  const welcomeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        type: "spring", 
        stiffness: 100,
        delay: 0.2
      } 
    },
    exit: { 
      opacity: 0, 
      scale: 1.2,
      transition: { duration: 0.6 } 
    }
  };

  return (
    <motion.div 
      className="flex items-center justify-center h-screen relative overflow-hidden"
      style={{ background: 'linear-gradient(to right, #0f2027, #203a43, #2c5364)' }}
      initial={{ opacity: 0 }}
      animate={controlsBackground}
      transition={{ duration: 0.8 }}
    >
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={{
          background: "linear-gradient(120deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
          backgroundSize: "200% 200%",
          backgroundPosition: "0% 50%"
        }}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 15,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />

      {/* Particles effect */}
      <div className="absolute inset-0 z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 5 + 2,
              height: Math.random() * 5 + 2,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      <div className="relative z-20 text-center">
        {/* First name */}
        <motion.div
          className="flex justify-center mb-3"
          variants={nameVariants}
          initial="hidden"
          animate={controlsFirstName}
        >
          {Array.from("SHIVANSH").map((letter, index) => (
            <motion.span
              key={`first-${index}`}
              variants={letterVariants}
              className="text-6xl sm:text-7xl font-bold text-white inline-block mx-1"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Last name */}
        <motion.div
          className="flex justify-center"
          variants={nameVariants}
          initial="hidden"
          animate={controlsLastName}
        >
          {Array.from("SHUKLA").map((letter, index) => (
            <motion.span
              key={`last-${index}`}
              variants={letterVariants}
              className="text-6xl sm:text-7xl font-bold text-teal-400 inline-block mx-1"
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        {/* Welcome text */}
        <motion.div
          className="mt-16 text-4xl font-medium text-white"
          variants={welcomeVariants}
          initial="hidden"
          animate={controlsWelcome}
        >
          Welcome to my portfolio
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Intro;