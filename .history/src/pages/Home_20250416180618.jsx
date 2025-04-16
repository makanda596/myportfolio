import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
    </div>
  )
}

export default Home