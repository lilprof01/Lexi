import React, { useState } from 'react'
import Header from '../Components/LandingComponents/Header'
import Hero from '../Components/LandingComponents/Hero'
import Howitworks from '../Components/LandingComponents/Howitworks'
import Achievements from '../Components/LandingComponents/Achievements'
import Testimonials from '../Components/LandingComponents/Testimonials'
import Footer from '../Components/LandingComponents/Footer'
import MobileNav from '../Components/LandingComponents/MobileNav'
import About from '../Components/LandingComponents/About'
import Contact from '../Components/LandingComponents/Contact'
import Copyright from '../Components/LandingComponents/Copyright'
import Feature from '../Components/LandingComponents/Feature'
import Language from '../Components/LandingComponents/Language'

const Landing = () => {
  const [openNav, setOpenNav] = useState(false);

  // function to open and close mobile navigation
  // function and state is passed down to children
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <main role='main' className='bg-[#f6f4ef] dark:bg-[#121212] dark:text-white'>
      <Header handleOpenNav={handleOpenNav} openNav={openNav} />
      {openNav && <MobileNav openNav={openNav} />}
      <Hero />
      <Language />
      <Howitworks />
      <Achievements />
      <Feature />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Copyright />
    </main>
  )
}

export default Landing