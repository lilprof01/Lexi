import React from 'react'

const Testimonials = () => {
  return (
    <section role='testimonials' className='testimonials-section h-screen flex flex-col justify-center items-center bg-[#fe4d01] py-8'>
      <h2 className='text-[#ffd966] font-bold text-3xl'>Testimonials</h2>
      <div className='flex justify-between py-8 h-full w-[90%] gap-8 overflow-x-scroll'>
        <div className='h-full min-w-[90vw] lg:min-w-[40vw] bg-amber-300'></div>
        <div className='h-full min-w-[90vw] lg:min-w-[40vw] bg-amber-300'></div>
      </div>
      <div className='text-5xl text-amber-200 absolute right-5 hover:cursor-pointer'>&gt;</div>
      <div className='text-5xl text-amber-200 absolute left-5 hover:cursor-pointer'>&lt;</div>
    </section>
  )
}

export default Testimonials;