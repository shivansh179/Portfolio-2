import React, { useEffect } from 'react';
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
    x: '-100vw',  // Move completely out of view to the left
    opacity: 0,
    transition: { type: 'spring', stiffness: 30, duration: 2 },
  },
  moveRight: {
    x: '100vw',  // Move completely out of view to the right
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

const Intro = ({ onAnimationEnd }) => {
  const controlsShivansh = useAnimation();
  const controlsShukla = useAnimation();
  const controlsWelcome = useAnimation();

  useEffect(() => {
    const sequence = async () => {
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

      // Show the welcome text immediately after the movement
      await controlsWelcome.start('visible');

      // Notify parent component when animation ends
      if (onAnimationEnd) onAnimationEnd(); 
    };

    sequence();
  }, [controlsShivansh, controlsShukla, controlsWelcome, onAnimationEnd]);

  return (
    <div className="h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
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
