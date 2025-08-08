import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="bg-black py-20 px-6 text-gray-100 relative overflow-hidden border-t border-yellowgreen/10"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-yellowgreen blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 rounded-full bg-lime-300 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-yellowgreen">About</span> Me
          </h2>
          <div className="w-20 h-1 bg-yellowgreen mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            I'm a passionate{' '}
            <span className="text-yellowgreen font-medium">web developer</span>{' '}
            focused on creating modern, responsive, and accessible digital experiences.
          </p>
        </div>

        {/* Content grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-yellowgreen/10 shadow-lg shadow-yellowgreen/10">
            <h3 className="text-2xl font-bold mb-6 text-yellowgreen">My Journey</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I discovered my passion for web development while studying computer science. Since then, I've dedicated myself to mastering modern web
              technologies.
            </p>
            <p className="text-gray-300 leading-relaxed">
              I specialize in <span className="text-lime-300">React.js</span> and enjoy exploring new frameworks and tools to build exceptional user
              experiences.
            </p>
          </div>

          <div className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-yellowgreen/10 shadow-lg shadow-yellowgreen/10">
            <h3 className="text-2xl font-bold mb-6 text-yellowgreen">My Approach</h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              I believe in <span className="text-lime-300">clean, maintainable code</span> and <span className="text-lime-300">pixel-perfect designs</span>.
              Every project is an opportunity to solve problems creatively.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When I'm not coding, I'm probably learning new technologies or contributing to open-source projects.
            </p>
          </div>
        </div>

        {/* Button */}
        <div className="mt-16 text-center">
          <a
            href="#skills"
            className="inline-flex items-center px-6 py-3 border border-yellowgreen text-yellowgreen hover:bg-yellowgreen/10 rounded-lg transition-all duration-300 group"
          >
            <span>View My Skills</span>
            <svg
              className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
