import React, { useState } from 'react'
import Header from '../Components/LandingComponents/Header'
import Hero from '../Components/LandingComponents/Hero'
import Howitworks from '../Components/LandingComponents/Howitworks'
import Achievements from '../Components/LandingComponents/Achievements'
import Carousel from '../Components/LandingComponents/Carousel'
import Testimonials from '../Components/LandingComponents/Testimonials'
import Footer from '../Components/LandingComponents/Footer'
import MobileNav from '../Components/LandingComponents/MobileNav'

const Landing = () => {
  const [openNav, setOpenNav] = useState(false);

  const handleOpenNav = () => {
    setOpenNav(!openNav);
  }

  return (
    <main role='main' className='bg-[#f6f4ef] dark:bg-[#121212] dark:text-white'>
      <Header handleOpenNav={handleOpenNav} openNav={openNav} />
      {openNav && <MobileNav openNav={openNav} />}
      <Hero />
      <Howitworks />
      <Achievements />
      <Carousel />
      <Testimonials />
      <Footer />
    </main>
  )
}

export default Landing