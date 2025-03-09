import React from 'react'

const Achievements = () => {
  return (
    <section role='achievements' className='achievements-section h-screen flex flex-col justify-center items-center gap-4 bg-[#fe4d01] text-[#f6f4ef] py-8'>
      <div className='h-full w-[50%] m-auto p-8 flex flex-col justify-center items-center gap-8'>
        <h2 className='text-7xl text-center'>The Proven Lexi Method</h2>
        <p className='text-xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero aliquam optio, dolores, aliquid ut culpa maiores aspernatur nesciunt ea quidem earum consequuntur tempora est animi iure, adipisci suscipit magni accusantium.</p>
      </div>
      <div className='w-[75%] h-full flex justify-around items-center gap-8 relative'>
        <div className='h-full w-full  relative'>
          <div className='h-full w-full bg-amber-600 absolute -top-8'></div>
        </div>
        <div className='h-full w-full '>
        <div className='h-full w-full bg-amber-600'></div>
        </div>
        <div className='h-full w-full  relative'>
          <div className='h-full w-full bg-amber-600 absolute -top-8'></div>
        </div>
      </div>
    </section>
  )
}

export default Achievements