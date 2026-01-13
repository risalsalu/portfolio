import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { BookOpen, Award } from 'lucide-react';

const Education = () => {
    return (
        <Section id="education" className="bg-dark-bg">
            <div className="mb-16 text-center">
                <TextReveal>
                    <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">05. BACKGROUND</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Education & <span className="text-neon-purple">Certifications</span>
                    </h3>
                </TextReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
                {/* Education */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                        <BookOpen className="text-neon-blue" /> Education
                    </h4>
                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <h5 className="text-xl font-bold text-white">BSc Computer Science</h5>
                        <p className="text-neon-blue">Peekay CICS Arts and Science College</p>
                        <p className="text-sm text-gray-500 font-mono mt-1">Calicut University | 2022 – 2025</p>
                    </div>
                </div>

                {/* Certifications */}
                <div className="space-y-8">
                    <h4 className="text-2xl font-bold text-white flex items-center gap-3">
                        <Award className="text-neon-purple" /> Certifications
                    </h4>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <h5 className="text-lg font-bold text-white">Full Stack Project Certificate</h5>
                        <p className="text-gray-400 text-sm mt-2">Built comprehensive applications using Python (Flask), React.js, and MySQL.</p>
                    </div>

                    <div className="bg-white/5 border border-white/10 p-6 rounded-xl hover:bg-white/10 transition-colors">
                        <h5 className="text-lg font-bold text-white">Technical Workshop - Tata Elxsi</h5>
                        <p className="text-gray-400 text-sm mt-2">Deep dive into Automotive Embedded Systems and Emerging Technologies.</p>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Education;
