import React from 'react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL']
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker']
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are the tools and technologies I work with to bring ideas to life.
          </p>
          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6"></div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-100">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className="flex items-center justify-center p-3 bg-indigo-50 rounded-lg"
                  >
                    <span className="text-indigo-700 font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors shadow-md">
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
}