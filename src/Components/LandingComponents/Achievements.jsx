import React from 'react';

const Achievements = () => {
  return (
    <section role='achievements' className='achievements-section h-screen flex flex-col justify-center items-center gap-4 bg-[#fe4d01] text-[#f6f4ef] py-8'>
      <div className='h-full w-[50%] m-auto p-8 flex flex-col justify-center items-center gap-8'>
        <h2 className='text-7xl text-center'>The Proven Lexi Method</h2>
        <p className='text-xl text-center'>
          Our language learning app has helped thousands of users achieve fluency in their target languages. With our proven Lexi method, you can expect to see significant improvements in your language skills in just a few weeks. Join our community and start your language learning journey today!
        </p>
      </div>
      <div className='w-[75%] h-full flex justify-around items-center gap-8 relative'>
        <div className='h-full w-full relative'>
          <div className='h-full w-full bg-amber-600 lg:absolute -top-8'></div>
        </div>
        <div className='h-full w-full'>
          <div className='h-full w-full bg-amber-600'></div>
        </div>
        <div className='h-full w-full relative'>
          <div className='h-full w-full bg-amber-600 lg:absolute -top-8'></div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;