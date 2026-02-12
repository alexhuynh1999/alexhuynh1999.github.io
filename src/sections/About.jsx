import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 px-6 bg-bg-secondary">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="w-full md:w-1/2">
                        <div className="relative">
                            <div className="absolute inset-0 bg-sage/20 rounded-lg transform translate-x-4 translate-y-4"></div>
                            {/* Using a placeholder or the existing image if available */}
                            <img
                                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=755&q=80"
                                alt="Alex Huynh"
                                className="relative rounded-lg shadow-xl w-full h-auto object-cover aspect-[4/5]"
                            />
                        </div>
                    </div>

                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-display font-bold text-text-primary mb-6">
                            About Me
                        </h2>

                        <div className="space-y-4 text-text-secondary">
                            <p>
                                Hello! My name is Alex and I enjoy creating things that live on the internet.
                                My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes —
                                turns out hacking together HTML & CSS was pretty fun!
                            </p>
                            <p>
                                Fast-forward to today, and I've had the privilege of working at an advertising agency, a start-up,
                                and a huge corporation. My main focus these days is building accessible, inclusive products
                                and digital experiences.
                            </p>
                            <p>
                                Here are a few technologies I've been working with recently:
                            </p>
                        </div>

                        <div className="mt-8 grid grid-cols-2 gap-4">
                            {['JavaScript (ES6+)', 'React', 'Node.js', 'TypeScript', 'Tailwind CSS', 'Next.js'].map((tech) => (
                                <div key={tech} className="flex items-center space-x-2">
                                    <span className="text-sage">▹</span>
                                    <span className="text-text-primary font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
