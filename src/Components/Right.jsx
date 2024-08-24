import React from 'react';
import { FaPaintBrush, FaCode, FaPencilRuler, FaProjectDiagram } from "react-icons/fa";
import { BsEmojiHeartEyes } from "react-icons/bs";
import { GrMysql } from "react-icons/gr";

const Right = () => {
  return (
    <div className='h-auto w-full bg-gray-900 shadow-lg rounded-lg lg:p-6 md:mt-5 border border-gray-900'>
      {/* About Me Section */}
      <h1 className='font-bold font-mono text-2xl mb-4 text-teal-200'>About Me</h1>
      <p className='font-medium text-white leading-relaxed mb-4'>
        I am a passionate developer with a strong background in web and graphic design. My journey started with a fascination for creative design, which soon evolved into a love for coding. I enjoy building user-friendly and aesthetically pleasing applications that solve real-world problems.
      </p>
      <p className='font-medium text-white leading-relaxed mb-8'>
        With a keen eye for detail and a dedication to continuous learning, I thrive on challenges that push the boundaries of technology and design. I believe in creating impactful solutions that enhance user experience and drive innovation.
      </p>

      {/* What I am doing Section */}
      <h1 className='font-bold font-mono text-2xl mb-4 text-teal-200'>What I am doing</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-6'>
        {/* Card 1: Graphic Design */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <FaPaintBrush className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>Graphic Design</h2>
            <p className='text-gray-700'>
              I craft visually appealing designs that capture the essence of a brand. My approach combines creativity with strategic thinking to produce designs that are not only beautiful but also effective in communicating the desired message.
            </p>
          </div>
        </div>

        {/* Card 2: UI/UX Design */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <FaPencilRuler className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>UI/UX Design</h2>
            <p className='text-gray-700'>
              I focus on creating intuitive and engaging user interfaces. My design process involves user research, wireframing, and prototyping to ensure that the end product is both functional and delightful to use.
            </p>
          </div>
        </div>

        {/* Card 3: Full Stack Development */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <FaCode className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>Full Stack Development</h2>
            <p className='text-gray-700'>
              As a full stack developer, I build end-to-end solutions that cover both front-end and back-end development. My expertise includes creating scalable applications and integrating various technologies to deliver a seamless user experience.
            </p>
          </div>
        </div>

        {/* Card 4: Problem Solving */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <BsEmojiHeartEyes className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>Problem Solving</h2>
            <p className='text-gray-700'>
              I excel at tackling complex problems with innovative solutions. Whether it's debugging code, optimizing performance, or finding creative ways to overcome technical challenges, I approach each problem with a solution-oriented mindset.
            </p>
          </div>
        </div>

        {/* Card 5: SQL & Databases */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <GrMysql className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>SQL & Databases</h2>
            <p className='text-gray-700'>
              I have a strong foundation in database management and SQL. My experience includes designing efficient schemas, writing complex queries, and ensuring data integrity and security in various database systems.
            </p>
          </div>
        </div>

        {/* Card 6: Project Management */}
        <div className='bg-teal-100 rounded-xl shadow-md p-4 flex items-start space-x-4'>
          <FaProjectDiagram className='text-teal-600 w-12 h-12' />
          <div className='w-72'>
            <h2 className='text-xl font-bold text-teal-800 mb-2'>Project Management</h2>
            <p className='text-gray-700'>
              I manage projects from inception to completion, ensuring that they are delivered on time and within budget. My approach includes planning, coordination, and communication with stakeholders to achieve project goals effectively.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Right;
 