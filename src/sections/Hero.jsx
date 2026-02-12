import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center items-center relative px-6">
            <div className="max-w-4xl w-full text-center z-10">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-sage font-medium tracking-wide mb-4"
                >
                    FULL STACK DEVELOPER
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl font-display font-bold text-text-primary mb-6 leading-tight"
                >
                    Crafting digital experiences with <span className="italic text-olive">purpose</span> and <span className="italic text-olive">precision</span>.
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-8"
                >
                    I'm Alex, a software engineer specializing in building exceptional digital products.
                    Currently focused on React and modern web technologies.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="px-8 py-3 bg-sage text-white rounded-lg font-medium hover:bg-olive transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                        View Work
                    </a>
                    <a
                        href="#contact"
                        className="px-8 py-3 border border-text-secondary text-text-primary rounded-lg font-medium hover:border-sage hover:text-sage transition-all duration-300"
                    >
                        Contact Me
                    </a>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce"
            >
                <ArrowDown className="text-text-secondary" size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
