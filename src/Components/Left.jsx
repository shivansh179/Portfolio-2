import React from 'react';
import { MdEmail } from "react-icons/md";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaBirthdayCakeSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Left = () => {
  return (
    <div className='h-auto md:w-72 bg-gray-900 shadow-lg rounded-lg p-6 text-center m-4 border border-gray-200'>
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
          <MdEmail className='text-indigo-600 w-6 h-6' />
          <span className='text-gray-300 font-semibold'>shivansh@email.com</span>
        </div>
        <div className='flex items-center gap-4'>
          <IoIosPhonePortrait className='text-indigo-600 w-6 h-6' />
          <span className='text-gray-300 font-semibold'>+123 456 7890</span>
        </div>
        <div className='flex items-center gap-4'>
          <LiaBirthdayCakeSolid className='text-indigo-600 w-6 h-6' />
          <span className='text-gray-300 font-semibold'>October 12, 1995</span>
        </div>
        <div className='flex items-center gap-4'>
          <IoLocationOutline className='text-indigo-600 w-6 h-6' />
          <span className='text-gray-300 font-semibold'>Mumbai, India</span>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className='mt-8 flex justify-center gap-6'>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900'>
          <FaGithub className='w-6 h-6' />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900'>
          <FaLinkedin className='w-6 h-6' />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='text-gray-600 hover:text-gray-900'>
          <FaTwitter className='w-6 h-6' />
        </a>
      </div>
    </div>
  );
}

export default Left;
