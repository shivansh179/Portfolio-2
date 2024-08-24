import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const nameContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const nameItem = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300 } },
};

const finalMove = {
  moveLeft: {
    x: '-100vw',
    opacity: 0,
    transition: { type: 'spring', stiffness: 30, duration: 2 },
  },
  moveRight: {
    x: '100vw',
    opacity: 0,
    transition: { type: 'spring', stiffness: 30, duration: 2 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0 },
  },
};

const welcomeText = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { delay: 0, type: 'spring', stiffness: 100 } },
};

const rectangleDraw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 2, ease: 'easeInOut' },
  },
};

const splitRectangle = {
  moveLeft: {
    x: '-50vw',
    opacity: 0,
    transition: { type: 'spring', stiffness: 30, duration: 2 },
  },
  moveRight: {
    x: '50vw',
    opacity: 0,
    transition: { type: 'spring', stiffness: 30, duration: 2 },
  },
};

const Intro = ({ onAnimationEnd }) => {
  const [rectSize, setRectSize] = useState({ width: 400, height: 200 });
  const controlsShivansh = useAnimation();
  const controlsShukla = useAnimation();
  const controlsWelcome = useAnimation();
  const controlsRectangle = useAnimation();

  useEffect(() => {
    // Adjust rectangle size for smaller screens
    const updateRectSize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        setRectSize({ width: 300, height: 150 }); // Smaller size for small screens
      } else {
        setRectSize({ width: 400, height: 200 }); // Default size for larger screens
      }
    };

    // Initial update
    updateRectSize();

    // Listen for window resize
    window.addEventListener('resize', updateRectSize);

    return () => window.removeEventListener('resize', updateRectSize);
  }, []);

  useEffect(() => {
    const sequence = async () => {
      // Start the rectangle drawing animation
      await controlsRectangle.start('visible');

      // Start the animations for "Shivansh" and "Shukla"
      await controlsShivansh.start('visible');
      await controlsShukla.start('visible');

      // Show toast notification
      toast.success('Welcome!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: { fontSize: '24px', fontWeight: 'bold', color: '#fff', backgroundColor: '#1e3a8a' },
      });

      // Move "Shivansh" and "Shukla" out of view simultaneously
      await Promise.all([
        controlsShivansh.start(finalMove.moveLeft),
        controlsShukla.start(finalMove.moveRight),
      ]);

      // Split and move the rectangle
      await controlsRectangle.start(splitRectangle.moveLeft);

      // Show the welcome text immediately after the movement
      await controlsWelcome.start('visible');

      // Notify parent component when animation ends
      if (onAnimationEnd) onAnimationEnd(); 
    };

    sequence();
  }, [controlsShivansh, controlsShukla, controlsWelcome, controlsRectangle, onAnimationEnd]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Animated Rectangle */}
      <motion.svg
        width={rectSize.width}
        height={rectSize.height}
        viewBox={`0 0 ${rectSize.width} ${rectSize.height}`}
        className="absolute"
      >
        <defs>
          <mask id="mask">
            <rect x="0" y="0" width={rectSize.width} height={rectSize.height} fill="white" />
          </mask>
        </defs>
        <motion.rect
          x="0"
          y="0"
          width={rectSize.width}
          height={rectSize.height}
          rx="15"
          stroke="#1e3a8a"
          strokeWidth="5"
          fill="transparent"
          variants={rectangleDraw}
          initial="hidden"
          animate={controlsRectangle}
          mask="url(#mask)"
        />
      </motion.svg>

      <motion.div className="flex flex-col text-center text-white text-6xl font-bold">
        <motion.div
          className="mr-4"
          variants={nameContainer}
          initial="hidden"
          animate={controlsShivansh}
        >
          {'Shivansh'.split('').map((char, index) => (
            <motion.span key={index} variants={nameItem}>
              {char}
            </motion.span>
          ))}
        </motion.div>
        <motion.div
          variants={nameContainer}
          initial="hidden"
          animate={controlsShukla}
        >
          {'Shukla'.split('').map((char, index) => (
            <motion.span key={index} variants={nameItem}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute text-center text-white text-4xl font-bold"
        variants={welcomeText}
        initial="hidden"
        animate={controlsWelcome}
      >
        You're Most Welcome
      </motion.div>
    </div>
  );
};

export default Intro;
