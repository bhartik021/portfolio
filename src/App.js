import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Achievements from './components/Achievements';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('is-visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const observe = () => document.querySelectorAll('.anim').forEach(el => observer.observe(el));
    observe();
    /* re-observe after a tick so late-rendering elements are caught */
    const t = setTimeout(observe, 300);
    return () => { observer.disconnect(); clearTimeout(t); };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Achievements />
      <About />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
