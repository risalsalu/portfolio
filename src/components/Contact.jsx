import React, { useState, useEffect } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

    const element = document.getElementById('contact');
    if (element) observer.observe(element);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (element) observer.unobserve(element);
    };
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    alert('🚀 Message sent successfully! I\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactMethods = [
    {
      icon: '📧',
      title: 'Email',
      info: 'rizal@example.com',
      description: 'Drop me a line anytime',
      gradient: 'from-lime-400 to-green-400'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      info: '/in/muhammed-rizal',
      description: 'Let\'s connect professionally',
      gradient: 'from-green-400 to-lime-500'
    },
    {
      icon: '🐙',
      title: 'GitHub',
      info: '@muhammedrizal',
      description: 'Check out my repositories',
      gradient: 'from-lime-500 to-green-300'
    }
  ];

  return (
    <section 
      id="contact" 
      className="py-24 px-6 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden border-t border-lime-400/10"
    >
      {/* Dynamic mouse-following gradient */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(154, 205, 50, 0.1), rgba(34, 197, 94, 0.05), transparent 50%)`
        }}
      />

      {/* Enhanced background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large animated orbs */}
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-lime-400/12 to-green-400/8 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-green-400/10 to-lime-500/10 blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-2/3 left-1/2 w-64 h-64 rounded-full bg-lime-300/8 blur-2xl animate-pulse delay-2000"></div>
        
        {/* Communication-themed particles */}
        <div className="absolute top-32 left-32 w-3 h-3 bg-lime-400 rounded-full animate-ping opacity-60"></div>
        <div className="absolute top-48 right-40 w-2 h-2 bg-green-400 rounded-full animate-ping delay-700 opacity-40"></div>
        <div className="absolute bottom-40 left-24 w-4 h-4 bg-lime-300 rounded-full animate-ping delay-1200 opacity-50"></div>
        <div className="absolute bottom-32 right-32 w-2 h-2 bg-green-300 rounded-full animate-ping delay-1800 opacity-60"></div>
        
        {/* Geometric decorations */}
        <div className="absolute top-20 right-20 w-8 h-8 border-2 border-lime-400/20 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-20 left-20 w-6 h-6 border-2 border-green-400/25 rotate-45 animate-spin" style={{animationDuration: '25s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-8">
            <span className="text-lime-400 font-mono text-lg tracking-wider animate-pulse">
              // Let's build something amazing
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-none">
            <span className="text-gray-300">Get In</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 via-green-400 to-lime-500 animate-pulse">
              Touch
            </span>
          </h2>
          
          <div className="flex justify-center items-center gap-4 mb-10">
            <div className="w-20 h-1 bg-gradient-to-r from-transparent to-lime-400 rounded-full animate-pulse"></div>
            <div className="w-6 h-6 bg-gradient-to-r from-lime-400 to-green-400 rotate-45 animate-spin" style={{animationDuration: '8s'}}></div>
            <div className="w-20 h-1 bg-gradient-to-l from-transparent to-green-400 rounded-full animate-pulse delay-500"></div>
          </div>
          
          <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-gray-300">
            Have a <span className="text-lime-400 font-bold">project idea</span> or want to{' '}
            <span className="text-green-400 font-bold">collaborate</span>? I'd love to{' '}
            <span className="text-lime-300 font-semibold">hear from you</span>!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact methods */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}`}
               style={{ transitionDelay: '300ms' }}>
            
            <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-8">
              Let's Connect
            </h3>
            
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div
                  key={index}
                  className={`group relative bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-md p-6 rounded-2xl border border-lime-400/20 hover:border-lime-400/40 shadow-xl hover:shadow-lime-400/20 transition-all duration-500 hover:-translate-y-1 hover:scale-[1.02] cursor-pointer ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${method.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-center">
                    <div className={`w-12 h-12 bg-gradient-to-r ${method.gradient} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-black font-bold text-xl">{method.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r ${method.gradient}`}>
                        {method.title}
                      </h4>
                      <p className="text-lime-400 font-mono text-sm">{method.info}</p>
                      <p className="text-gray-400 text-sm mt-1">{method.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced contact form */}
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
               style={{ transitionDelay: '500ms' }}>
            
            <div className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 backdrop-blur-md p-10 rounded-3xl border border-lime-400/20 shadow-2xl">
              {/* Form glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-lime-400/5 to-green-400/5 rounded-3xl opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-8 text-center">
                  Send a Message
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name field */}
                  <div className="relative">
                    <label className="block text-lime-400 font-semibold mb-2 font-mono text-sm tracking-wide">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full p-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === 'name' 
                          ? 'border-lime-400 shadow-lg shadow-lime-400/20 scale-[1.02]' 
                          : 'border-gray-600 hover:border-lime-400/50'
                      }`}
                      placeholder="Enter your full name"
                    />
                    {focusedField === 'name' && (
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-lime-400 to-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Email field */}
                  <div className="relative">
                    <label className="block text-lime-400 font-semibold mb-2 font-mono text-sm tracking-wide">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full p-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === 'email' 
                          ? 'border-lime-400 shadow-lg shadow-lime-400/20 scale-[1.02]' 
                          : 'border-gray-600 hover:border-lime-400/50'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {focusedField === 'email' && (
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-lime-400 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Message field */}
                  <div className="relative">
                    <label className="block text-lime-400 font-semibold mb-2 font-mono text-sm tracking-wide">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={`w-full p-4 bg-gray-800/50 backdrop-blur-sm border-2 rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
                        focusedField === 'message' 
                          ? 'border-lime-400 shadow-lg shadow-lime-400/20 scale-[1.02]' 
                          : 'border-gray-600 hover:border-lime-400/50'
                      }`}
                      placeholder="Tell me about your project idea, collaboration opportunity, or just say hello!"
                    />
                    {focusedField === 'message' && (
                      <div className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-lime-500 to-green-300 rounded-full animate-pulse"></div>
                    )}
                  </div>

                  {/* Enhanced submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`group w-full py-5 bg-gradient-to-r from-lime-400 to-green-400 hover:from-green-400 hover:to-lime-400 text-black font-black text-lg rounded-2xl shadow-2xl shadow-lime-400/30 transition-all duration-500 hover:scale-105 hover:-translate-y-1 relative overflow-hidden ${
                      isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
                    }`}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:scale-110 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-lime-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center rounded-2xl"></div>
                  </button>
                </form>

                {/* Form footer */}
                <div className="mt-8 pt-6 border-t border-gray-700/50 text-center">
                  <p className="text-gray-400 font-mono text-sm">
                    <span className="text-lime-400">⚡</span> Usually respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced response time section */}
        <div className={`grid md:grid-cols-3 gap-8 mt-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
             style={{ transitionDelay: '700ms' }}>
          
          <div className="text-center group hover:scale-110 transition-all duration-300">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse">
              &lt;24h
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Response Time</p>
          </div>
          
          <div className="text-center group hover:scale-110 transition-all duration-300 delay-100">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-lime-400 mb-2 animate-pulse delay-300">
              100%
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Reply Rate</p>
          </div>
          
          <div className="text-center group hover:scale-110 transition-all duration-300 delay-200">
            <div className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-green-400 mb-2 animate-pulse delay-600">
              24/7
            </div>
            <p className="text-gray-400 font-mono text-sm tracking-wide">Available</p>
          </div>
        </div>
      </div>

      {/* Enhanced code decorations */}
      <div className="absolute top-16 left-16 text-lime-400/8 font-mono text-8xl animate-pulse delay-2000 select-none hidden lg:block">
        {'@'}
      </div>
      <div className="absolute bottom-16 right-16 text-green-400/8 font-mono text-6xl animate-pulse delay-2500 select-none hidden lg:block transform rotate-12">
        {'{}'}
      </div>
      
      {/* Floating communication comments */}
      <div className="absolute top-40 right-24 text-lime-400/12 font-mono text-sm animate-pulse delay-1000 hidden xl:block select-none transform rotate-2">
        // Connect with me
      </div>
      <div className="absolute bottom-40 left-24 text-green-400/12 font-mono text-sm animate-pulse delay-1500 hidden xl:block select-none transform -rotate-1">
        /* Always responsive */
      </div>
    </section>
  );
}