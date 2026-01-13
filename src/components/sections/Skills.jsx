import React, { useEffect, useRef } from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Badge from '../ui/Badge';
import gsap from 'gsap';

const SkillCategory = ({ title, skills, color = 'neon-blue' }) => {
    return (
        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all hover:bg-white/10">
            <h4 className={`text-xl font-bold mb-4 flex items-center gap-2 text-${color}`}>
                {title}
            </h4>
            <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                    <Badge key={index} variant="default" className="text-sm py-2 px-3 bg-dark-bg/50 hover:bg-white/10 hover:text-white transition-colors border-white/5">
                        {skill}
                    </Badge>
                ))}
            </div>
        </div>
    )
}

const Skills = () => {
    const backend = [
        'C#', 'ASP.NET Core Web API', 'RESTful API Design', 'JWT Auth',
        'Entity Framework Core', 'Dapper', 'LINQ', 'ADO.NET',
        'Middleware', 'Dependency Injection', 'Clean Architecture', 'MS SQL Server'
    ];

    const frontend = [
        'React.js', 'Redux Toolkit', 'JavaScript (ES6+)', 'HTML5 / CSS3',
        'Tailwind CSS', 'Responsive UI', 'Axios', 'State Management'
    ];

    const tools = [
        'Git & GitHub', 'GitHub Actions', 'Docker', 'Swagger',
        'Postman', 'Vercel', 'Visual Studio', 'VS Code'
    ];

    const practices = [
        'OOP', 'SOLID Principles', 'Clean Code', 'Layered Architecture',
        'Agile (Scrum)', 'Sprint Planning', 'Code Reviews'
    ];

    return (
        <Section id="skills" className="bg-dark-bg/50">
            <div className="text-center mb-16">
                <TextReveal>
                    <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">02. MY ARSENAL</h2>
                    <h3 className="text-3xl md:text-4xl font-display font-bold">
                        Technical <span className="text-neon-purple">Proficiency</span>
                    </h3>
                </TextReveal>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <TextReveal delay={0.1}>
                    <SkillCategory title="Backend Development" skills={backend} color="neon-blue" />
                </TextReveal>
                <TextReveal delay={0.2}>
                    <SkillCategory title="Frontend Development" skills={frontend} color="neon-purple" />
                </TextReveal>
                <TextReveal delay={0.3}>
                    <SkillCategory title="Cloud & Tools" skills={tools} color="neon-cyan" />
                </TextReveal>
                <TextReveal delay={0.4}>
                    <SkillCategory title="Engineering Practices" skills={practices} color="white" />
                </TextReveal>
            </div>
        </Section>
    );
};

export default Skills;
