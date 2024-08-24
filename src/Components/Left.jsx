import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

const Left = () => {
  return (
    <div className='h-auto md:w-80 bg-gray-900 shadow-lg rounded-lg p-6 text-center m-4 border border-gray-200'>
      {/* Profile Section */}
      <div className='flex flex-col items-center'>
        <img src="/avatar.jpg" alt="Profile" className='rounded-full w-32 h-32 object-cover border-4 border-indigo-500' />
        <h1 className='mt-4 text-xl font-bold text-gray-300'>Shivansh Shukla</h1>
        <span className='mt-2 bg-indigo-600 text-white px-3 py-1 rounded-full text-sm'>
          Full Stack Developer
        </span>
      </div>

      {/* Contact Information */}
      <div className='mt-8 space-y-4 text-left'>
        <div className='flex items-center gap-4'>
          <a href="mailto:Prasantshukla89@gmail.com" className='flex items-center gap-4 text-gray-300 font-semibold'>
            <MdEmail className='text-indigo-600 w-6 h-6' />
            <span>Prasantshukla89@gmail.com</span>
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <a href="tel:+916387427935" className='flex items-center gap-4 text-gray-300 font-semibold'>
            <IoIosPhonePortrait className='text-indigo-600 w-6 h-6' />
            <span>+91 6387427935</span>
          </a>
        </div>
        <div className='flex items-center gap-4'>
          <a href="https://calendar.google.com/" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4 text-gray-300 font-semibold'>
            <LiaBirthdayCakeSolid className='text-indigo-600 w-6 h-6' />
            <span>August 25, 2003</span>
          </a>
        </div>
        <div className='flex items-center gap-4 cursor-pointer'>
          <a href="https://www.google.com/maps/place/Delhi/@28.6442873,76.7635616,10z/data=!3m1!4b1!4m6!3m5!1s0x390cfd5b347eb62d:0x37205b715389640!8m2!3d28.7040592!4d77.1024902!16zL20vMDlmMDc?entry=ttu&g_ep=EgoyMDI0MDgyMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className='flex items-center gap-4 text-gray-300 font-semibold'>
            <IoLocationOutline className='text-indigo-600 w-6 h-6' />
            <span>Delhi, India</span>
          </a>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='mt-8 flex justify-center gap-6'>
        <a href="https://github.com/shivansh179" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-teal-700'>
          <FaGithub className='w-6 h-6' />
        </a>
        <a href="https://www.linkedin.com/in/shivansh-shukla-01a139234/" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-teal-700'>
          <FaLinkedin className='w-6 h-6' />
        </a>
        <a href="https://www.instagram.com/shuklajiii_25/" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-teal-700'>
          <FaInstagram className='w-6 h-6' />
        </a>
      </div>
    </div>
  );
}

export default Left;
