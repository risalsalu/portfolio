import React, { useState } from 'react';
import Section from '../ui/Section';
import TextReveal from '../ui/TextReveal';
import Button from '../ui/Button';
import { Send, Mail, MapPin, Phone } from 'lucide-react';

const InputGroup = ({ label, name, type = 'text', textarea = false }) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');

    return (
        <div className="relative mb-8">
            {textarea ? (
                <textarea
                    name={name}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors resize-none h-32"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(value !== '')}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    className="w-full bg-transparent border-b border-gray-700 py-3 text-white focus:outline-none focus:border-neon-blue transition-colors"
                    onFocus={() => setFocused(true)}
                    onBlur={() => setFocused(value !== '')}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
            )}
            <label
                className={`absolute left-0 transition-all pointer-events-none ${focused || value ? '-top-5 text-sm text-neon-blue' : 'top-3 text-gray-500'
                    }`}
            >
                {label}
            </label>
        </div>
    );
};

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic
        alert("Thanks for reaching out! This is a demo form.");
    };

    return (
        <Section id="contact" className="bg-dark-bg relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl -z-10"></div>

            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <TextReveal>
                        <h2 className="text-neon-blue font-mono text-sm tracking-widest mb-2">06. WHAT'S NEXT?</h2>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">
                            Let's Work <span className="text-neon-purple">Together</span>
                        </h3>
                    </TextReveal>

                    <TextReveal delay={0.2}>
                        <p className="text-gray-400 mb-10 leading-relaxed max-w-md">
                            Currently seeking new opportunities to build high-impact applications.
                            Whether you have a question or just want to say hi, I'll try my best to get back to you!
                        </p>
                    </TextReveal>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-blue">
                                <Mail size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Email</p>
                                <p className="font-bold">mdrizalnp@gmail.com</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 text-gray-300">
                            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-neon-purple">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <p className="text-xs text-gray-500">Location</p>
                                <p className="font-bold">Kozhikode, Kerala</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
                    <form onSubmit={handleSubmit}>
                        <InputGroup label="Name" name="name" />
                        <InputGroup label="Email" name="email" type="email" />
                        <InputGroup label="Message" name="message" textarea />

                        <Button type="submit" size="lg" className="w-full group">
                            Send Message
                            <Send size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </form>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
