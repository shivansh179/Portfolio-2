import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_pwmdo1j', 'template_s23mdls', e.target, 'MjhJIJIWEG-6biXUn')
      .then((result) => {
          console.log('Email sent successfully:', result.text);
          toast.success('Message sent successfully!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          setFormData({ name: '', email: '', message: '' }); // Reset the form
      }, (error) => {
          console.log('Error sending email:', error.text);
          toast.error('Error sending message. Please try again.', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
      });
  };

  return (
    <motion.div
      className='h-auto w-full bg-gray-900 shadow-lg rounded-lg md:p-8 border border-gray-900'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-3xl font-mono font-bold mb-8 border-b-2 text-teal-500 border-teal-500 pb-4">Contact Me</h1>
      
      {/* Map Section */}
      <motion.div
        className='mb-10'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href="https://www.google.com/maps/dir/?api=1&destination=28.899880449764776,77.12160171473462&travelmode=driving" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <iframe
            title="Google Maps"
            className='w-full h-64 rounded-lg shadow-lg border-2 border-gray-700'
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d617.4718806368643!2d77.12160171473462!3d28.899880449764776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724484396104!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </a>
        <p className="text-teal-700 mt-2 text-sm">
          Click on the map to get directions from your location. A marker indicates the destination.
        </p>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        className='bg-gray-800 md:p-8 p-2 rounded-lg shadow-lg'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className='text-2xl font-bold text-teal-500 mb-6'>Get in Touch</h2>
        
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col sm:flex-row gap-6'>
            {/* Full Name Input */}
            <motion.input 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Full Name' 
              className='w-full sm:w-1/2 p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Email Input */}
            <motion.input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address' 
              className='w-full sm:w-1/2 p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500'
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            />
          </div>

          {/* Message Input */}
          <motion.textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Your Message' 
            className='w-full mt-6 p-4 bg-gray-700 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 h-32 resize-none'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          ></motion.textarea>

          {/* Submit Button */}
          <motion.button 
            type="submit" 
            className='mt-6 px-6 py-3  bg-teal-500 text-gray-900 font-bold rounded-lg shadow-md hover:bg-teal-500 transition-all'
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
      <ToastContainer />
    </motion.div>
  );
};

export default Contact;
