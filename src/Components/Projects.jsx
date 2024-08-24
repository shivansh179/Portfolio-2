import React, { useState } from 'react'

const Projects = () => {
  // Define project data with categories
  const projectData = [
    { id: 1, name: "Portfolio Website", category: "Web Design", description: "A personal portfolio website showcasing my skills and projects." },
    { id: 2, name: "Weather App", category: "Application", description: "A weather forecasting app using OpenWeather API." },
    { id: 3, name: "E-commerce Website", category: "Web Development", description: "A full-fledged e-commerce platform built with React and Firebase." },
    { id: 4, name: "To-Do List App", category: "Application", description: "A simple and effective to-do list app with local storage support." },
    { id: 5, name: "Blog Website", category: "Web Design", description: "A clean and responsive blog website template using HTML and CSS." },
    { id: 6, name: "Chat Application", category: "Web Development", description: "A real-time chat application with user authentication and WebSockets." },
  ];

  // State to track the selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All" 
    ? projectData 
    : projectData.filter(project => project.category === selectedCategory);

  return (
    <div className='h-auto w-full bg-gray-900 shadow-lg rounded-lg p-6 border border-gray-900'>
      <h1 className='font-bold font-mono text-2xl mb-4 text-yellow-200'>Projects</h1>
      <hr className='w-48 border-yellow-200'/>
      
      {/* Filter Buttons */}
      <ul className='list-none flex gap-7 text-white font-mono mt-6 font-bold text-sm'>
        <li 
          className={`cursor-pointer hover:text-yellow-200 ${selectedCategory === 'All' ? 'text-yellow-200' : ''}`} 
          onClick={() => setSelectedCategory("All")}
        >
          All
        </li>
        <li 
          className={`cursor-pointer hover:text-yellow-200 ${selectedCategory === 'Web Design' ? 'text-yellow-200' : ''}`} 
          onClick={() => setSelectedCategory("Web Design")}
        >
          Web Design
        </li>
        <li 
          className={`cursor-pointer hover:text-yellow-200 ${selectedCategory === 'Application' ? 'text-yellow-200' : ''}`} 
          onClick={() => setSelectedCategory("Application")}
        >
          Application
        </li>
        <li 
          className={`cursor-pointer hover:text-yellow-200 ${selectedCategory === 'Web Development' ? 'text-yellow-200' : ''}`} 
          onClick={() => setSelectedCategory("Web Development")}
        >
          Web Development
        </li>
      </ul>

      {/* Projects Grid */}
      <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10'>
        {filteredProjects.map((project) => (
          <div key={project.id} className='relative group w-full'>
            <img 
              src={`/Statistics.jpg`} 
              alt={project.name} 
              className='rounded-lg shadow-lg object-cover w-full h-72 transition duration-300 transform group-hover:scale-105'
            />
            <div className='absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center rounded-lg'>
              <h3 className='text-white font-bold text-xl'>{project.name}</h3>
              <p className='text-gray-300 text-sm mt-2'>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
