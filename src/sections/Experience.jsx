import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
    const experiences = [
        {
            company: "Tech Corp",
            role: "Senior Frontend Engineer",
            period: "2023 - Present",
            description: "Leading the frontend team in building scalable React applications. Improved performance by 40% and implemented a new design system."
        },
        {
            company: "Startup Inc",
            role: "Full Stack Developer",
            period: "2021 - 2023",
            description: "Developed and maintained multiple client projects using MERN stack. Collaborated closely with designers to implement pixel-perfect UIs."
        },
        {
            company: "Digital Agency",
            role: "Junior Web Developer",
            period: "2019 - 2021",
            description: "Built responsive websites for various clients. Gained expertise in HTML, CSS, JavaScript, and WordPress development."
        }
    ];

    return (
        <section id="experience" className="py-20 px-6 bg-bg-secondary">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-12 text-center">
                    Work Experience
                </h2>

                <div className="space-y-10 relative border-l-2 border-sage/30 ml-3 md:ml-6 pl-8 md:pl-12 py-2">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="relative"
                        >
                            <span className="absolute -left-[41px] md:-left-[59px] top-2 h-5 w-5 rounded-full border-4 border-bg-secondary bg-sage"></span>

                            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                                <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                                    <Briefcase size={18} className="text-sage" />
                                    {exp.role}
                                </h3>
                                <span className="text-sm font-medium text-text-secondary flex items-center gap-1 mt-1 sm:mt-0">
                                    <Calendar size={14} />
                                    {exp.period}
                                </span>
                            </div>

                            <h4 className="text-lg font-display text-olive mb-3">{exp.company}</h4>
                            <p className="text-text-secondary leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
