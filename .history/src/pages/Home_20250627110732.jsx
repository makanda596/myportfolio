import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Navbar from '../components/Navbar';
import Projects from '../components/Projects';
import Contact from '../components/contact';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const Home = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Reviews />
      <Contact />
      <Footer />

      <div className="elfsight-app-7aed1c1d-f9cd-4d86-a53b-d5af9f3b6d4f" data-elfsight-app-lazy></div>
    </div>
  );
}

export default Home;
