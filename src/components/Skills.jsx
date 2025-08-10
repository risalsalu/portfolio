import React, { useState, useEffect } from 'react';

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: '🎨',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Next.js'],
      gradient: 'from-lime-400 to-green-400'
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'Python', 'Django', 'MongoDB', 'PostgreSQL'],
      gradient: 'from-green-400 to-lime-500'
    },
    {
      title: 'Tools',
      icon: '🛠️',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma', 'Postman', 'Docker'],
      gradient: 'from-lime-500 to-green-300'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('skills');
    if (element) observer.observe(element);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section 
      id="skills" 
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden border-t border-lime-400/10"
    >
      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(700px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 205, 50, 0.12), rgba(34, 197, 94, 0.08), transparent 50%)`
        }}
      />

      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 left-1/5 w-96 h-96 rounded-full bg-gradient-to-r from-lime-400/8 to-green-400/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/5 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/6 to-lime-500/6 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-lime-300/8 blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating tech particles */}
        <div className="absolute top-32 left-32 w-3 h-3 bg-lime-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-48 right-40 w-2 h-2 bg-green-400 rounded-full animate-ping delay-700 opacity-40"></div>
        <div className="absolute bottom-40 left-24 w-4 h-4 bg-lime-300 rounded-full animate-ping delay-1200 opacity-50"></div>
        <div className="absolute bottom-32 right-32 w-2 h-2 bg-green-300 rounded-full animate-ping delay-1800 opacity-60"></div>
        <div className="absolute top-2/3 right-1/4 w-3 h-3 bg-lime-500 rounded-full animate-ping delay-2400 opacity-40"></div>
        
        {/* Animated grid lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime-400/15 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/12 to-transparent animate-pulse delay-1500"></div>
        
        {/* Tech-themed decorations */}
        <div className="absolute top-20 left-20 w-8 h-8 border-2 border-lime-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 right-20 w-6 h-6 border-2 border-green-400/25 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <span className="text-lime-400 font-mono text-lg tracking-wider animate-pulse">
              // Technical arsenal
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none">
            <span className="text-gray-300">Skills &</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 animate-pulse">
              Technologies
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-10">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-lime-400 rounded-full animate-pulse"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-lime-400 to-green-400 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-green-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            The powerful <span className="text-lime-400 font-bold">technologies</span> and{' '}
            <span className="text-green-400 font-bold">tools</span> I use to craft{' '}
            <span className="text-lime-300 font-semibold">extraordinary digital experiences</span>.
          </p>
        </div>
        
        {/* Enhanced skills grid */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-md p-10 rounded-3xl border border-lime-400/20 shadow-2xl hover:shadow-lime-400/20 transition-all duration-700 hover:-translate-y-3 hover:scale-[1.02] cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${300 + index * 200}ms` }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}></div>
              
              {/* Card border glow */}
              <div className={`absolute inset-0 rounded-3xl transition-all duration-500 ${hoveredCard === index ? 'shadow-2xl shadow-lime-400/30' : ''}`}></div>
              
              <div className="relative z-10">
                {/* Enhanced header */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-2xl flex items-center justify-center mr-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-500`}>
                    <span className="text-black font-bold text-2xl">{category.icon}</span>
                  </div>
                  <h3 className={`text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r ${category.gradient}`}>
                    {category.title}
                  </h3>
                </div>
                
                {/* Enhanced skills grid */}
                <div className="grid grid-cols-2 gap-4">
                  {category.skills.map((skill, i) => (
                    <div 
                      key={i}
                      className={`group/skill relative bg-gradient-to-br from-gray-800/50 to-gray-700/30 backdrop-blur-sm p-4 rounded-xl border border-lime-400/10 hover:border-lime-400/30 transition-all duration-300 hover:scale-105 hover:-translate-y-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                      style={{ transitionDelay: `${600 + index * 200 + i * 100}ms` }}
                    >
                      {/* Skill item glow */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover/skill:opacity-5 rounded-xl transition-opacity duration-300`}></div>
                      
                      <div className="relative z-10 text-center">
                        <span className="text-gray-300 group-hover/skill:text-lime-400 font-semibold text-sm transition-colors duration-300">
                          {skill}
                        </span>
                        
                        {/* Skill level indicator */}
                        <div className="mt-2 w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${category.gradient} rounded-full transition-all duration-1000 delay-${600 + index * 200 + i * 100}`}
                            style={{ 
                              width: isVisible ? `${85 + Math.random() * 15}%` : '0%',
                              transitionDelay: `${800 + index * 200 + i * 100}ms`
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Category progress indicator */}
                <div className="mt-8 pt-6 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 font-mono">Proficiency</span>
                    <span className={`text-transparent bg-clip-text bg-gradient-to-r ${category.gradient} font-bold`}>
                      Advanced
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced stats section */}
        <div className={`grid md:grid-cols-4 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '1000ms' }}>
          
          <div className="text-center group hover:scale-110 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse">
              15+
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Technologies</p>
          </div>
          
          <div className="text-center group hover:scale-110 transition-all duration-300 delay-100">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 mb-2 animate-pulse delay-300">
              100+
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Projects Built</p>
          </div>
          
          <div className="text-center group hover:scale-110 transition-all duration-300 delay-200">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse delay-600">
              5+
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Years Learning</p>
          </div>
          
          <div className="text-center group hover:scale-110 transition-all duration-300 delay-300">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 mb-2 animate-pulse delay-900">
              ∞
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Curiosity Level</p>
          </div>
        </div>

        {/* Enhanced CTA section */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '1200ms' }}>
          
          <div className="mb-8">
            <p className="text-gray-400 font-mono text-lg mb-4">Ready to collaborate?</p>
            <div className="w-32 h-1 bg-gradient-to-r from-lime-400 to-green-400 mx-auto rounded-full animate-pulse"></div>
          </div>
          
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-lime-400 to-green-400 hover:from-green-400 hover:to-lime-400 text-black font-black text-lg rounded-2xl shadow-2xl shadow-lime-400/30 transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Download Resume
                <svg className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-2xl"></div>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center px-10 py-5 border-2 border-lime-400 text-lime-400 hover:text-black font-black text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                See My Work
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-2xl"></div>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced code-themed decorations */}
      <div className="absolute top-16 left-16 text-lime-400/8 font-mono text-8xl animate-pulse delay-2000 select-none hidden lg:block">
        {'</>'}
      </div>
      <div className="absolute bottom-16 right-16 text-green-400/8 font-mono text-6xl animate-pulse delay-2500 select-none hidden lg:block transform rotate-12">
        {'{ }'}
      </div>
      
      {/* Floating tech comments */}
      <div className="absolute top-40 right-24 text-lime-400/12 font-mono text-sm animate-pulse delay-1000 hidden xl:block select-none transform rotate-2">
        // const skills = advanced;
      </div>
      <div className="absolute bottom-40 left-24 text-green-400/12 font-mono text-sm animate-pulse delay-1500 hidden xl:block select-none transform -rotate-1">
        /* Always evolving */
      </div>
      <div className="absolute top-1/2 right-8 text-lime-300/10 font-mono text-xs animate-pulse delay-2000 hidden xl:block select-none transform rotate-90">
        return &lt;Excellence/&gt;
      </div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
      `}</style>
    </section>
  );
}