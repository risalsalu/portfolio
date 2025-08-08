import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'A modern e-commerce platform using React and JSON Server.',
      tags: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'Fitness Tracker',
      description: 'A full-stack app with Django backend and React frontend.',
      tags: ['Django', 'React', 'PostgreSQL']
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:border-indigo-300 transition-colors duration-300 shadow-sm hover:shadow-md"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className="px-3 py-1 bg-indigo-50 text-indigo-700 text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="px-8 py-4 bg-gray-50 border-t border-gray-100">
                <button className="text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                  View Project →
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}