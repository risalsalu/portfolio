import React from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import { cn } from '../../utils/cn';
import { Mail, Github, Linkedin, FileText, ArrowUpRight } from 'lucide-react';

const ContactItem = ({ icon: Icon, label, value, href, isPrimary = false }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
            "group flex items-center justify-between p-6 md:p-8 w-full border-b border-white/5 transition-all duration-300",
            "hover:bg-neon-green/5 hover:pl-10",
            isPrimary ? "border-t border-white/5" : ""
        )}
    >
        <div className="flex items-center gap-6">
            <div className={cn(
                "p-3 rounded-md transition-colors duration-300",
                "text-gray-500 group-hover:text-neon-green bg-white/5 group-hover:bg-neon-green/10"
            )}>
                <Icon size={24} />
            </div>
            <div className="flex flex-col">
                <span className="text-xs font-mono text-gray-600 uppercase tracking-widest mb-1 group-hover:text-neon-green/80 transition-colors">
                    {label}
                </span>
                <span className={cn(
                    "text-xl md:text-3xl font-display font-bold transition-colors duration-300",
                    "text-gray-400 group-hover:text-white"
                )}>
                    {value}
                </span>
            </div>
        </div>

        <div className="text-gray-700 group-hover:text-neon-green transition-transform duration-300 transform group-hover:-translate-y-1 group-hover:translate-x-1">
            <ArrowUpRight size={24} />
        </div>
    </a>
);

const Contact = () => {
    return (
        <Section id="contact" className="bg-dark-bg py-32 flex flex-col justify-center min-h-[50vh]">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header */}
                <div className="mb-20">
                    <TextReveal>
                        {/* No section number, consistent with user's cleanup */}
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
                            Let's Build <br />
                            <span className="text-neon-green">Scalable Systems</span>.
                        </h2>
                        <p className="text-gray-500 text-lg md:text-xl font-mono max-w-2xl leading-relaxed">
                            Open for senior engineering roles and technical consulting.
                            <br />
                            Direct channels only. No forms.
                        </p>
                    </TextReveal>
                </div>

                {/* Contact Interface */}
                <div className="flex flex-col border-t border-b border-white/5">

                    <ContactItem
                        icon={Mail}
                        label="Email Protocol"
                        value="mdrizalnp@gmail.com"
                        href="mailto:mdrizalnp@gmail.com"
                        isPrimary={true}
                    />

                    <ContactItem
                        icon={Linkedin}
                        label="Professional Network"
                        value="LinkedIn"
                        href="https://www.linkedin.com/in/muhammed-rizal/"
                    />

                    <ContactItem
                        icon={Github}
                        label="Code Repository"
                        value="Github"
                        href="https://github.com/risalsalu"
                    />

                    <ContactItem
                        icon={FileText}
                        label="Technical Profile"
                        value="Download Resume (PDF)"
                        href="/Muhammed_Rizal_NP.pdf"
                    />

                </div>

                {/* Footer Signature */}
                <div className="mt-20 flex justify-between items-end text-xs font-mono text-gray-700">

                </div>
            </div>
        </Section>
    );
};

export default Contact;
