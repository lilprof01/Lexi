import React from 'react'

const Testimonials = () => {
  return (
    <section role='testimonials' className='testimonials-section h-screen flex flex-col justify-center items-center bg-[#fe4d01] py-8'>
      <h2 className='text-[#ffd966] font-bold text-3xl'>Testimonials</h2>
      <div className='flex justify-between items-center p-8 h-full w-[90%] gap-8'>
        <div className='h-full w-full bg-amber-300'></div>
        <div className='h-full w-full bg-amber-300'></div>
      </div>
      <div className='text-5xl text-amber-200 absolute right-10 hover:cursor-pointer'>&gt;</div>
      <div className='text-5xl text-amber-200 absolute left-10 hover:cursor-pointer'>&lt;</div>
    </section>
  )
}

export default Testimonials;