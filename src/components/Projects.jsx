import React from 'react';

export default function Projects() {
  const projects = [
    {
      title: 'E-Commerce App',
      description: 'A modern e-commerce platform with seamless checkout experience and real-time inventory management.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe API'],
      emoji: '🛒'
    },
    {
      title: 'Fitness Tracker',
      description: 'AI-powered workout tracking with personalized recommendations and social features.',
      tags: ['Django', 'React', 'PostgreSQL', 'TensorFlow'],
      emoji: '💪'
    },
    {
      title: 'Crypto Dashboard',
      description: 'Real-time cryptocurrency analytics with portfolio tracking and price alerts.',
      tags: ['Next.js', 'Firebase', 'WebSockets', 'Chart.js'],
      emoji: '📊'
    },
    {
      title: 'AR Interior Designer',
      description: 'Augmented reality app for visualizing furniture in your space before purchase.',
      tags: ['Unity', 'ARKit', 'Three.js', 'Swift'],
      emoji: '🛋️'
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gray-950 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellowgreen rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellowgreen rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-lime-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-yellowgreen/30 pointer-events-none"
          style={{
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellowgreen to-lime-400 mb-6 tracking-tighter">
            PROJECT PORTFOLIO
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-yellowgreen to-lime-400 mx-auto rounded-full shadow-lg shadow-lime-400/30"></div>
          <p className="text-gray-300 mt-8 text-xl max-w-3xl mx-auto leading-relaxed">
            Where <span className="text-yellowgreen font-medium">innovation</span> meets <span className="text-lime-400 font-medium">execution</span>
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-900/50 rounded-3xl overflow-hidden border border-gray-800 hover:border-yellowgreen transition-all duration-500 shadow-2xl hover:shadow-yellowgreen/20 transform hover:-translate-y-2 hover:scale-[1.02] backdrop-blur-sm"
              style={{
                background: 'radial-gradient(circle at top left, rgba(154,205,50,0.1) 0%, rgba(20,20,20,0.8) 60%)'
              }}
            >
              {/* Project emoji decorator */}
              <div className="absolute -top-6 -right-6 text-7xl opacity-20 group-hover:opacity-30 group-hover:rotate-12 transition-all duration-700">
                {project.emoji}
              </div>
              
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellowgreen/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="p-8 relative">
                {/* Project index */}
                <div className="absolute top-8 left-8 text-5xl font-bold text-gray-800 group-hover:text-gray-700 transition-colors duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>
                
                <div className="pl-16">
                  {/* Project title with yellow-green accent */}
                  <h3 className="text-2xl font-bold text-gray-100 mb-4 group-hover:text-yellowgreen transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  {/* Description with subtle off-white color */}
                  <p className="text-gray-300 mb-6 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                    {project.description}
                  </p>
                  
                  {/* Tags with yellow-green variation */}
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1.5 bg-gray-800/80 text-gray-200 text-xs font-medium rounded-full border border-gray-700 hover:bg-yellowgreen/10 hover:border-yellowgreen/30 hover:text-yellowgreen transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="px-8 py-6 bg-gradient-to-r from-gray-900/70 to-gray-800/70 border-t border-gray-800 backdrop-blur-sm">
                <button className="group/btn relative overflow-hidden px-6 py-3 bg-yellowgreen/10 text-gray-300 font-bold rounded-lg border border-yellowgreen/30 hover:bg-yellowgreen/20 hover:border-yellowgreen/50 hover:text-yellowgreen transition-all duration-500 flex items-center gap-2">
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="group-hover/btn:translate-x-1 transition-transform duration-300">
                      View Details
                    </span>
                    <span className="text-xl group-hover/btn:translate-x-2 transition-all duration-300">
                      →
                    </span>
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-yellowgreen/30 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></span>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-20">
          <button className="group relative overflow-hidden px-12 py-5 bg-gradient-to-r from-yellowgreen to-lime-500 text-black font-bold text-xl rounded-xl hover:from-lime-400 hover:to-green-400 transition-all duration-500 shadow-2xl shadow-yellowgreen/30 hover:shadow-lime-400/40 transform hover:-translate-y-1 hover:scale-105 border-2 border-yellowgreen/50 hover:border-lime-300/50">
            <span className="relative z-10 flex items-center gap-3">
              <span className="group-hover:animate-bounce">🚀</span>
              View All Project
              <span className="group-hover:animate-spin">✨</span>
            </span>
            <span className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </button>
          
          <p className="text-gray-400 mt-8 text-sm font-mono">
            Want custom solutions? <span className="text-yellowgreen underline underline-offset-4 hover:text-lime-300 cursor-pointer transition-colors">Let's collaborate</span>
          </p>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-100px) translateX(20px); }
          100% { transform: translateY(0) translateX(0); }
        }
      `}</style>
    </section>
  );
}