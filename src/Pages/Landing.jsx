import React from 'react'
import Header from '../Components/Header'
import Hero from '../Components/Hero'
import Howitworks from '../Components/Howitworks'
import Achievements from '../Components/Achievements'
import Carousel from '../Components/Carousel'
import Testimonials from '../Components/Testimonials'

const Landing = () => {
  return (
    <main role='main' className='bg-[#f6f4ef] dark:bg-[#121212] dark:text-white'>
      <Header />
      <Hero />
      <Howitworks />
      <Achievements />
      <Carousel />
      <Testimonials />
    </main>
  )
}

export default Landing