import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Quote from './components/Quote';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Quote />
      <Projects />
      <Skills />
      <Experience />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
