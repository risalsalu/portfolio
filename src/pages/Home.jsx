import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Projects from '../components/sections/Projects';
import Architecture from '../components/sections/Architecture';
import Contact from '../components/sections/Contact';


const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Architecture />

            <Contact />
        </>
    );
};

export default Home;
