import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
    const projects = [
        {
            title: "Camera Scheduler",
            description: "A scheduler application for cameras. Use this space to describe the problem you solved and the tech used.",
            tech: ["React", "HTML", "CSS"],
            github: "https://github.com/alexhuynh1999/camera-scheduler",
            external: "https://alexhuynh1999.github.io/camera-scheduler/",
            image: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        },
        {
            title: "Project Two",
            description: "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace.",
            tech: ["VS Code", "Sublime Text", "Atom", "Hyper"],
            github: "#",
            external: "#",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        },
        {
            title: "Project Three",
            description: "A web app for visualizing personalized Spotify data. View your top artists, top tracks, and recently played tracks.",
            tech: ["React", "Express", "Spotify API", "Tailwind"],
            github: "#",
            external: "#",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
        }
    ];

    return (
        <section id="projects" className="py-20 px-6 bg-bg-primary">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-12 text-center">
                    Some Things I've Built
                </h2>

                <div className="space-y-24 md:space-y-32">
                    {projects.map((project, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}>
                            <div className="w-full md:w-3/5 group relative overflow-hidden rounded-xl shadow-lg transition-transform duration-500 hover:-translate-y-2">
                                <div className="absolute inset-0 bg-sage/10 mix-blend-multiply group-hover:bg-transparent transition-all duration-300"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover aspect-video"
                                />
                            </div>

                            <div className="w-full md:w-2/5 flex flex-col justify-center">
                                <p className="text-sage font-medium tracking-wide text-sm mb-2">Featured Project</p>
                                <h3 className="text-2xl font-display font-bold text-text-primary mb-4">{project.title}</h3>

                                <div className="bg-bg-secondary p-6 rounded-lg shadow-sm mb-6 border border-wood-light/10">
                                    <p className="text-text-secondary leading-relaxed">{project.description}</p>
                                </div>

                                <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs font-semibold uppercase tracking-wider text-text-secondary mb-8">
                                    {project.tech.map((t) => (
                                        <li key={t} className="bg-wood-light/20 px-2 py-1 rounded">{t}</li>
                                    ))}
                                </ul>

                                <div className="flex space-x-6">
                                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-sage transition-colors">
                                        <Github size={22} />
                                    </a>
                                    <a href={project.external} target="_blank" rel="noopener noreferrer" className="text-text-primary hover:text-sage transition-colors">
                                        <ExternalLink size={22} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
