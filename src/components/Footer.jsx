import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-wood-pattern pt-16 pb-12 border-t border-wood-dark/20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center">
                <div className="mb-8 md:mb-0">
                    <p className="text-2xl font-display font-bold text-olive mb-2">Alex Huynh</p>
                    <p className="text-text-secondary text-sm max-w-xs">
                        Crafting digital experiences with minimalist aesthetics and robust engineering.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-text-secondary hover:text-sage transition-colors duration-300">
                        <Github size={20} />
                    </a>
                    <a href="#" className="text-text-secondary hover:text-sage transition-colors duration-300">
                        <Linkedin size={20} />
                    </a>
                    <a href="mailto:hello@example.com" className="text-text-secondary hover:text-sage transition-colors duration-300">
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-wood-dark/10 text-center md:text-left">
                <p className="text-text-secondary text-xs font-medium opacity-70">
                    © {new Date().getFullYear()} Alex Huynh. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
