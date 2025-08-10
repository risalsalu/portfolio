import React, { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [textIndex, setTextIndex] = useState(0);

  const dynamicTexts = ["Frontend Developer", "React Specialist", "UI/UX Enthusiast", "Code Artist"];

  useEffect(() => {
    setMounted(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const textInterval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % dynamicTexts.length);
    }, 3000);

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black via-gray-950 to-gray-900 text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 205, 50, 0.15), rgba(34, 197, 94, 0.1), transparent 60%)`
        }}
      />

      {/* Animated background mesh */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-lime-400/10 to-green-400/5 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-green-400/8 to-lime-500/8 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/3 w-64 h-64 rounded-full bg-gradient-to-r from-lime-300/12 to-green-300/6 blur-2xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-1/3 w-48 h-48 rounded-full bg-gradient-to-r from-green-500/10 to-lime-400/10 blur-3xl animate-pulse delay-1500"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-gradient-to-r from-lime-400 to-green-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-40 right-32 w-2 h-2 bg-lime-300 rounded-full animate-ping delay-700 opacity-40"></div>
        <div className="absolute bottom-32 left-16 w-6 h-6 bg-gradient-to-r from-green-400 to-lime-300 rounded-full animate-ping delay-1200 opacity-50"></div>
        <div className="absolute bottom-20 right-20 w-3 h-3 bg-lime-400 rounded-full animate-ping delay-1800 opacity-60"></div>
        <div className="absolute top-3/4 left-2/3 w-2 h-2 bg-green-300 rounded-full animate-ping delay-2400 opacity-30"></div>
        <div className="absolute top-1/3 right-1/4 w-5 h-5 bg-gradient-to-r from-lime-500 to-green-500 rounded-full animate-ping delay-800 opacity-40"></div>
        
        {/* Animated lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-lime-400/20 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/15 to-transparent animate-pulse delay-1000"></div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-20 gap-4 h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className="border-l border-lime-400/10"></div>
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`relative z-10 max-w-5xl mx-auto transition-all duration-1200 ease-out ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
        
        {/* Animated greeting */}
        <div className={`mb-6 transition-all duration-800 delay-300 ${mounted ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}>
          <p className="text-lime-400 font-mono text-lg mb-2 tracking-wider">
            <span className="inline-block animate-bounce delay-300">💻</span> Welcome to my Digital Universe
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-lime-400 to-green-400 mx-auto rounded-full animate-pulse"></div>
        </div>
        
        {/* Main heading with enhanced animations */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 leading-none">
            <span className={`block transition-all duration-800 delay-500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              <span className="text-gray-300">Hi, I'm</span>
            </span>
            <span className={`block text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 via-lime-300 to-green-500 hover:scale-[1.02] transition-all duration-500 cursor-default animate-pulse ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                  style={{ transitionDelay: '700ms', backgroundSize: '200% 200%', animation: 'gradient-shift 4s ease infinite, pulse 2s infinite' }}>
              Muhammed Rizal
            </span>
          </h1>
        </div>

        {/* Dynamic role with typing effect */}
        <div className={`text-2xl md:text-3xl lg:text-4xl mb-12 h-16 transition-all duration-800 delay-900 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="relative inline-block">
            <span className="text-gray-400">I'm a </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 font-bold relative">
              {dynamicTexts[textIndex]}
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 transform origin-left animate-pulse rounded-full"></span>
            </span>
            <span className="animate-blink text-lime-400 ml-1 font-bold">|</span>
          </div>
        </div>

        {/* Enhanced description */}
        <div className={`max-w-3xl mx-auto mb-12 transition-all duration-800 delay-1100 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
            Crafting <span className="text-lime-400 font-semibold">exceptional digital experiences</span> with 
            <span className="text-green-400 font-semibold"> modern web technologies</span>. 
            Turning ideas into <span className="text-lime-300 font-semibold">interactive realities</span>.
          </p>
        </div>

        {/* Enhanced CTA buttons with more effects */}
        <div className={`flex flex-wrap justify-center gap-8 mb-16 transition-all duration-800 delay-1300 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="#contact"
            className="group px-10 py-5 bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 hover:from-green-400 hover:via-lime-400 hover:to-green-500 text-black font-black text-lg rounded-2xl shadow-2xl shadow-lime-400/40 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Let's Connect
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-lime-400 to-green-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-2xl"></div>
          </a>

          <a
            href="#projects"
            className="group px-10 py-5 border-3 border-lime-400 text-lime-400 hover:text-black font-black text-lg rounded-2xl transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 active:scale-95 inline-block relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500">
              View Portfolio
              <span className="group-hover:rotate-45 transition-transform duration-300">⚡</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-bottom rounded-2xl"></div>
          </a>
        </div>

        {/* Enhanced scroll indicator */}
        <div className={`transition-all duration-800 delay-1500 ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <a
            href="#about"
            className="group flex flex-col items-center text-lime-400/50 hover:text-lime-400 transition-all duration-500 hover:-translate-y-2"
          >
            <span className="mb-3 text-sm font-mono tracking-wide animate-pulse">Discover More</span>
            <div className="relative p-2">
              <svg
                className="w-8 h-8 animate-bounce group-hover:animate-none transition-all duration-500 group-hover:scale-125"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
              <div className="absolute inset-0 rounded-full border-2 border-lime-400/30 animate-ping group-hover:border-lime-400/60"></div>
              <div className="absolute inset-0 rounded-full border border-green-400/20 animate-ping delay-500 group-hover:border-green-400/40"></div>
            </div>
          </a>
        </div>
      </div>

      {/* Enhanced decorative elements */}
      <div className="absolute top-8 left-8 text-lime-400/10 font-mono text-8xl animate-pulse delay-2000 select-none">
        {'</>'}
      </div>
      <div className="absolute bottom-8 right-8 text-green-400/10 font-mono text-6xl animate-pulse delay-2500 select-none rotate-12">
        {'{}'}
      </div>
      
      {/* Floating code snippets */}
      <div className="absolute top-24 right-24 text-lime-400/15 font-mono text-sm animate-pulse delay-1000 hidden lg:block select-none transform rotate-3">
        const magic = "happens here";
      </div>
      <div className="absolute bottom-40 left-24 text-green-400/15 font-mono text-sm animate-pulse delay-1500 hidden lg:block select-none transform -rotate-2">
        return &lt;Innovation/&gt;
      </div>
      <div className="absolute top-1/2 left-8 text-lime-300/10 font-mono text-xs animate-pulse delay-2000 hidden xl:block select-none transform rotate-90">
        // Building the future
      </div>
      
      {/* Additional geometric decorations */}
      <div className="absolute top-1/3 right-12 w-8 h-8 border-2 border-lime-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
      <div className="absolute bottom-1/4 left-12 w-6 h-6 border-2 border-green-400/20 rotate-45 animate-spin" style={{animationDuration: '15s'}}></div>

      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </section>
  );
}