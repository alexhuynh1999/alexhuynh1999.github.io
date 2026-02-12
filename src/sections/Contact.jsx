import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-20 px-6 bg-bg-primary text-center">
            <div className="max-w-3xl mx-auto">
                <p className="text-sage font-medium tracking-wide mb-4">04. What's Next?</p>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-text-primary mb-6">
                    Get In Touch
                </h2>
                <p className="text-lg text-text-secondary mb-8 max-w-xl mx-auto">
                    Although I'm not currently looking for any new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>
                <a
                    href="mailto:hello@example.com"
                    className="inline-block px-10 py-4 bg-transparent border-2 border-sage text-sage rounded-lg font-medium hover:bg-sage/10 transition-colors duration-300"
                >
                    Say Hello
                </a>
            </div>
        </section>
    );
};

export default Contact;
