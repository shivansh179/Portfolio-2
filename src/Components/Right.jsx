import React from 'react';
import { CgWebsite } from "react-icons/cg";
import { FaPhotoVideo } from "react-icons/fa";
import { IoAppsSharp } from "react-icons/io5";
import { FaCode } from "react-icons/fa";

const Right = () => {
  return (
    <div className='h-auto w-full bg-gray-900 shadow-lg rounded-lg p-6  border border-gray-900'>
      {/* About Me Section */}
      <h1 className='font-bold font-mono text-2xl mb-4 text-yellow-200'>About Me</h1>
      <p className='font-medium text-white leading-relaxed mb-4'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa laborum ad voluptate quisquam perspiciatis in, voluptas facilis nihil facere nesciunt ex aut doloribus delectus error aspernatur accusantium pariatur, tempore cumque?
      </p>
      <p className='font-medium text-white leading-relaxed mb-8'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem voluptatum, in enim minus quam velit blanditiis fugiat accusantium quidem consequatur sed provident possimus, tempore a. Sapiente cupiditate magni at.
      </p>

      {/* What I am doing Section */}
      <h1 className='font-bold font-mono text-2xl mb-4 text-yellow-200'>What I am doing</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {/* Card 1: Web Design */}
        <div className='bg-indigo-100 rounded-xl shadow-md p-4 flex items-start'>
          <CgWebsite className='text-indigo-600 w-12 h-12 mr-4' />
          <div>
            <h2 className='text-xl font-bold text-indigo-800 mb-2'>Web Design</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quo!
            </p>
          </div>
        </div>

        {/* Card 2: Photography */}
        <div className='bg-indigo-100 rounded-xl shadow-md p-4 flex items-start'>
          <FaPhotoVideo className='text-indigo-600 w-12 h-12 mr-4' />
          <div>
            <h2 className='text-xl font-bold text-indigo-800 mb-2'>Photography</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quo!
            </p>
          </div>
        </div>

        {/* Card 3: Web Development */}
        <div className='bg-indigo-100 rounded-xl shadow-md p-4 flex items-start'>
          <FaCode className='text-indigo-600 w-12 h-12 mr-4' />
          <div>
            <h2 className='text-xl font-bold text-indigo-800 mb-2'>Web Development</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quo!
            </p>
          </div>
        </div>

        {/* Card 4: Mobile Apps */}
        <div className='bg-indigo-100 rounded-xl shadow-md p-4 flex items-start'>
          <IoAppsSharp className='text-indigo-600 w-12 h-12 mr-4' />
          <div>
            <h2 className='text-xl font-bold text-indigo-800 mb-2'>Mobile Apps</h2>
            <p className='text-gray-700'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, quo!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
