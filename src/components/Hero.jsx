import { curve } from "../assets";
import Button from "./Button";
import CompanyLogos from "./CompanyLogos";
import Section from "./Section";
import { BackgroundCircles, BottomLine } from "./design/Hero";
import { useRef } from "react";

const Hero = () => {
  const parallaxRef = useRef(null);

  return (
    <Section
    className="pt-[12rem] -mt-[5.25]"
    crosses
    crossesOffset="lg:translate-y-[5.25rem]"
    customPaddings
    id="hero"
    >  
    <div className="container relative" ref={parallaxRef}>
        <div className="relative z-1 max-w-[62rem]
        mx-auto text-center mb-[4rem] md:mb-20 lg:mb:[6rem]">
            <h1 className="h1 mb-6">
               Hello, I'm
               <br />
               <span className="inline-block relative">Bharti Kumari{" "}
               <img src={curve} 
               className="absolute top-full left-0 w-full xl:-mt-2"
               width={624}
               height={28}
               alt="Curve"
               />
               </span>
            </h1>
            <p className="body-1 max-w-3xl mx-auto mb-6
            text-n-2 lg:mb-8">
            Amazon ML Summer'23 | SIH'23 Finalist | Samsung SFT - Top 50 | Mentor at GSSoC'23 | Technical Writer
            </p>
            <Button target="_blank" href="https://calendly.com/bhartik021" white>
                Book a Meeting
            </Button>
            <Button target="_blank" href="https://www.linkedin.com/in/bhartik021/" white className="ml-4">
                Let's Connect
            </Button>
            
            <BackgroundCircles />
            
        </div>

        <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
    </div>

    {/* <BottomLine/> */}
    </Section>
  );
};

export default Hero;
