import React from 'react';

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-black to-gray-900 text-white flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-yellowgreen/10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-yellowgreen/5 blur-3xl animate-pulse delay-300"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div>
          <p className="text-yellowgreen font-mono mb-4">Hello World!</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 hover:scale-[1.02] transition-transform duration-300 inline-block">
            Hi, I'm <span className="text-yellowgreen">Muhammed Rizal</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            <span className="text-yellowgreen font-medium">Frontend Developer</span> |{' '}
            <span className="text-lime-300">React Specialist</span>
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-3 bg-yellowgreen hover:bg-lime-300 text-black font-bold rounded-lg shadow-lg shadow-yellowgreen/30 transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block"
            >
              Get In Touch
            </a>

            <a
              href="#projects"
              className="px-8 py-3 border-2 border-yellowgreen text-yellowgreen hover:bg-yellowgreen/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95 inline-block"
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-20 animate-bounce">
          <a
            href="#about"
            className="flex flex-col items-center text-yellowgreen/80 hover:text-yellowgreen transition-colors duration-300"
          >
            <span className="mb-2 text-sm">Scroll Down</span>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
