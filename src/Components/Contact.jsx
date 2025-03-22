import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail, MdLocationOn, MdPhone } from 'react-icons/md';
import emailjs from 'emailjs-com';

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

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
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset the form
        setLoading(false);
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
        setLoading(false);
      });
  };

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="space-y-10"
    >
      <motion.h2 
        variants={itemVariants}
        className={`text-2xl font-bold ${darkMode ? 'text-teal-400' : 'text-teal-600'}`}
      >
        Get In Touch
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'} mb-6`}>
            Feel free to contact me for any project inquiries or collaboration opportunities. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          {/* Contact Info Cards */}
          <div className="space-y-4">
            {/* Email */}
            <a 
              href="mailto:Prasantshukla89@gmail.com"
              className={`flex items-center gap-4 p-4 rounded-lg ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white shadow-md hover:shadow-lg'
              } transition-all duration-300`}
            >
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-teal-500/20 text-teal-400' : 'bg-teal-100 text-teal-600'
              }`}>
                <MdEmail className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Email
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Prasantshukla89@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a 
              href="tel:+916387427935"
              className={`flex items-center gap-4 p-4 rounded-lg ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white shadow-md hover:shadow-lg'
              } transition-all duration-300`}
            >
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-blue-500/20 text-blue-400' : 'bg-blue-100 text-blue-600'
              }`}>
                <MdPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Phone
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  +91 6387427935
                </p>
              </div>
            </a>

            {/* Location */}
            <a 
              href="https://www.google.com/maps/place/Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 p-4 rounded-lg ${
                darkMode 
                  ? 'bg-gray-700 hover:bg-gray-600' 
                  : 'bg-white shadow-md hover:shadow-lg'
              } transition-all duration-300`}
            >
              <div className={`p-3 rounded-lg ${
                darkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-purple-100 text-purple-600'
              }`}>
                <MdLocationOn className="w-6 h-6" />
              </div>
              <div>
                <h3 className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Location
                </h3>
                <p className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Delhi, India
                </p>
              </div>
            </a>
          </div>

          {/* Map */}
          <motion.div
            variants={itemVariants}
            className="mt-6"
          >
            <div className="rounded-lg overflow-hidden h-48 shadow-md">
              <iframe
                title="Google Maps"
                className="w-full h-full border-0"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d617.4718806368643!2d77.12160171473462!3d28.899880449764776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1724484396104!5m2!1sen!2sin"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>

        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label 
                htmlFor="name"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-teal-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-teal-500'
                } border focus:ring-2 focus:ring-teal-500/50 focus:outline-none transition-colors`}
              />
            </div>

            {/* Email */}
            <div>
              <label 
                htmlFor="email"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-teal-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-teal-500'
                } border focus:ring-2 focus:ring-teal-500/50 focus:outline-none transition-colors`}
              />
            </div>

            {/* Subject */}
            <div>
              <label 
                htmlFor="subject"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-teal-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-teal-500'
                } border focus:ring-2 focus:ring-teal-500/50 focus:outline-none transition-colors`}
              />
            </div>

            {/* Message */}
            <div>
              <label 
                htmlFor="message"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? 'text-gray-300' : 'text-gray-700'
                }`}
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className={`w-full px-4 py-3 rounded-lg ${
                  darkMode 
                    ? 'bg-gray-700 text-white border-gray-600 focus:border-teal-500' 
                    : 'bg-gray-50 text-gray-900 border-gray-300 focus:border-teal-500'
                } border focus:ring-2 focus:ring-teal-500/50 focus:outline-none transition-colors resize-none`}
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full px-6 py-3 rounded-lg font-medium ${
                darkMode 
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg' 
                  : 'bg-gradient-to-r from-teal-500 to-blue-500 text-white hover:shadow-lg'
              } transition-all duration-300 flex justify-center items-center`}
            >
              {loading ? (
                <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                  <circle 
                    className="opacity-25" 
                    cx="12" 
                    cy="12" 
                    r="10" 
                    stroke="currentColor" 
                    strokeWidth="4"
                    fill="none"
                  ></circle>
                  <path 
                    className="opacity-75" 
                    fill="currentColor" 
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>

      <ToastContainer 
        theme={darkMode ? 'dark' : 'light'}
      />
    </motion.div>
  );
};

export default Contact;