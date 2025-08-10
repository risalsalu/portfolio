import React, { useState, useEffect } from 'react';

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

    const element = document.getElementById('about');
    if (element) observer.observe(element);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <section
      id="about"
      className="bg-gradient-to-b from-black via-gray-950 to-black py-24 px-6 text-gray-100 relative overflow-hidden border-t border-lime-400/20"
    >
      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 205, 50, 0.1), rgba(34, 197, 94, 0.05), transparent 50%)`
        }}
      />

      {/* Enhanced decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Large animated orbs */}
        <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-lime-400/15 to-green-400/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 rounded-full bg-gradient-to-r from-green-400/12 to-lime-300/8 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 rounded-full bg-lime-300/10 blur-2xl animate-pulse delay-2000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 left-1/4 w-3 h-3 bg-lime-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-green-400 rounded-full animate-ping delay-1000 opacity-40"></div>
        <div className="absolute top-2/3 left-16 w-4 h-4 bg-lime-300 rounded-full animate-ping delay-1500 opacity-50"></div>
        <div className="absolute top-1/4 right-12 w-2 h-2 bg-green-300 rounded-full animate-ping delay-2000 opacity-30"></div>
        
        {/* Animated grid lines */}
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-transparent via-lime-400/10 to-transparent animate-pulse delay-500"></div>
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-green-400/8 to-transparent animate-pulse delay-1500"></div>
        
        {/* Geometric shapes */}
        <div className="absolute top-1/4 left-8 w-6 h-6 border-2 border-lime-400/30 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-8 w-8 h-8 border-2 border-green-400/25 rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <span className="text-lime-400 font-mono text-lg tracking-wider animate-pulse">
              // Get to know me
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none">
            <span className="text-gray-300">About</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 animate-pulse">
              Me
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-10">
            <div className="w-16 h-1 bg-gradient-to-r from-transparent to-lime-400 rounded-full animate-pulse"></div>
            <div className="w-8 h-8 border-2 border-lime-400 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="w-16 h-1 bg-gradient-to-l from-transparent to-green-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl lg:text-3xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            I'm a passionate{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 font-bold">
              web developer
            </span>{' '}
            crafting digital experiences that{' '}
            <span className="text-lime-300 font-semibold">inspire</span> and{' '}
            <span className="text-green-300 font-semibold">innovate</span>.
          </p>
        </div>

        {/* Enhanced content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-stretch mb-20">
          {/* Journey Card */}
          <div className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md p-10 rounded-2xl border border-lime-400/20 shadow-2xl shadow-lime-400/10 hover:shadow-lime-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '300ms' }}>
            
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-green-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-lime-400 to-green-400 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">🚀</span>
                </div>
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400">
                  My Journey
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  My coding adventure began during my computer science studies, where I discovered the magic of transforming ideas into{' '}
                  <span className="text-lime-400 font-semibold">interactive experiences</span>.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  Since then, I've been on a continuous quest to master{' '}
                  <span className="text-green-400 font-semibold">cutting-edge technologies</span> and push the boundaries of what's possible on the web.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-lime-300">
                    <span className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></span>
                    <span className="font-mono text-sm">Currently exploring: Next.js, TypeScript, Three.js</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Approach Card */}
          <div className={`group relative bg-gradient-to-br from-gray-800/60 to-gray-900/80 backdrop-blur-md p-10 rounded-2xl border border-green-400/20 shadow-2xl shadow-green-400/10 hover:shadow-green-400/20 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.02] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
               style={{ transitionDelay: '500ms' }}>
            
            {/* Card glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-lime-400/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-lime-400 rounded-xl flex items-center justify-center mr-4">
                  <span className="text-black font-bold text-xl">⚡</span>
                </div>
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400">
                  My Philosophy
                </h3>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed text-lg">
                  I believe every line of code should serve a purpose. My focus on{' '}
                  <span className="text-green-400 font-semibold">clean architecture</span> and{' '}
                  <span className="text-lime-400 font-semibold">pixel-perfect execution</span> ensures lasting impact.
                </p>
                <p className="text-gray-300 leading-relaxed text-lg">
                  When I'm not crafting code, you'll find me exploring new frameworks, contributing to{' '}
                  <span className="text-lime-300 font-semibold">open-source projects</span>, or experimenting with the latest web technologies.
                </p>
                <div className="pt-4">
                  <div className="flex items-center gap-2 text-green-300">
                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse delay-500"></span>
                    <span className="font-mono text-sm">Philosophy: "Code with purpose, design with passion"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`grid md:grid-cols-3 gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '700ms' }}>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse">
              50+
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Projects Completed</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300 delay-100">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 mb-2 animate-pulse delay-300">
              3+
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Years Experience</p>
          </div>
          
          <div className="text-center group hover:scale-105 transition-transform duration-300 delay-200">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse delay-600">
              24/7
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Passion for Code</p>
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '900ms' }}>
          <a
            href="#skills"
            className="group inline-flex items-center px-10 py-5 bg-gradient-to-r from-lime-400/10 to-green-400/10 border-2 border-lime-400 text-lime-400 hover:text-black font-black text-lg rounded-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-1 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Explore My Skills
              <svg
                className="w-5 h-5 group-hover:translate-x-2 group-hover:scale-110 transition-all duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-2xl"></div>
          </a>
        </div>
      </div>

      {/* Code-themed decorations */}
      <div className="absolute top-16 left-16 text-lime-400/10 font-mono text-6xl animate-pulse delay-2000 select-none hidden lg:block">
        {'{ }'}
      </div>
      <div className="absolute bottom-16 right-16 text-green-400/10 font-mono text-5xl animate-pulse delay-2500 select-none hidden lg:block transform rotate-12">
        {'</>'}
      </div>
      
      {/* Floating code comments */}
      <div className="absolute top-40 right-32 text-lime-400/15 font-mono text-sm animate-pulse delay-1000 hidden xl:block select-none transform rotate-2">
        // Always learning
      </div>
      <div className="absolute bottom-32 left-32 text-green-400/15 font-mono text-sm animate-pulse delay-1500 hidden xl:block select-none transform -rotate-1">
        /* Crafting experiences */
      </div>
    </section>
  );
}