import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Banner from './components/Banner'
import Doctors from './components/Doctors'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Banner />
      <Doctors />
      <Footer />
    </>
  )
}
