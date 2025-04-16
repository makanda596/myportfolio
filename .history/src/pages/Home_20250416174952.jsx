import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Hero'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <About/>
    </div>
  )
}

export default Home