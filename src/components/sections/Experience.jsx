import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Card from '../ui/Card';
import Badge from '../ui/Badge';

const Experience = () => {
    const jobs = [
        {
            role: 'React–.NET Developer Intern',
            company: 'Bridgeon Solutions LLP',
            period: 'May 2025 – Present',
            description: 'Developing responsive frontend features and building robust backend APIs. Focused on merging Clean Architecture with modern frontend patterns in an Agile environment.',
            responsibilities: [
                'Developed responsive frontend features using React, Redux Toolkit, and Tailwind CSS.',
                'Built and integrated RESTful APIs using ASP.NET Core following clean architecture principles.',
                'Implemented JWT-based authentication and role-based access control.',
                'Designed efficient data access layers using Entity Framework Core and Dapper.',
                'Participated in Agile Scrum workflows including sprint planning and code reviews.'
            ],
            stack: ['ASP.NET Core', 'React', 'Redux', 'Entity Framework', 'Dapper'],
        },
    ];

    return (
        <Section id="work" className="bg-dark-bg">
            <div className="mb-16">
                <TextReveal>
                    <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">03. EXPERIENCE</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Work <span className="text-neon-purple">History</span>
                    </h3>
                </TextReveal>
            </div>

            <div className="relative border-l border-white/10 ml-6 md:ml-12 pl-8 md:pl-12 space-y-12">
                {jobs.map((job, index) => (
                    <div key={index} className="relative">
                        {/* Dot */}
                        <div className="absolute -left-[41px] md:-left-[57px] top-6 w-5 h-5 rounded-full bg-dark-bg border-4 border-neon-blue shadow-[0_0_10px_rgba(0,243,255,0.5)]"></div>

                        <Card className="hover:border-neon-blue/40">
                            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                <div>
                                    <h4 className="text-xl font-bold text-white">{job.role}</h4>
                                    <p className="text-neon-blue font-medium">{job.company}</p>
                                </div>
                                <span className="text-sm font-mono text-gray-400 mt-2 md:mt-0">{job.period}</span>
                            </div>

                            <ul className="list-disc list-outside ml-4 mb-6 text-gray-400 space-y-2">
                                {job.responsibilities.map((resp, i) => (
                                    <li key={i} className="pl-2">{resp}</li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {job.stack.map((tech, i) => (
                                    <Badge key={i} variant="neon">{tech}</Badge>
                                ))}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
