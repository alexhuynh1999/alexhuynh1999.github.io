import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import About from './sections/About';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-body selection:bg-sage/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
