import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Contact from '../components/contact'
import Services from '../components/Services'
import Reviews from '../components/Reviews'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Services/>
        <Skills/>
        <Projects/>
      <Reviews/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home