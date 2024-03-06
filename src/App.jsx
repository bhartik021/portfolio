import ButtonGradient from './assets/svg/ButtonGradient'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';

const App = () => {

  return (
    <>

    <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">

     <Header />
     <Hero />
     <About />
     <Services />
     <Projects />

    </div>

    <ButtonGradient />
    </>
  );
};

export default App
