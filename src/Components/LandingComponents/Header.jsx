import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header role='banner' className='flex justify-between items-center align-middle py-4 px-8 bg-white dark:bg-black w-full z-10 top-0 left-0'>
      <h1 className='text-[#6C3BAA] font-bold text-2xl hover:cursor-pointer select-none'>LEXI</h1>
      <div className='sm:flex gap-4 hidden'>
        <Link to="/login" className='px-8 py-3 border border-[#6C3BAA] text-[#6c3baa] font-semibold rounded-full hover:cursor-pointer hover:bg-[#6c3baa] hover:text-white'>Log In</Link>
        <Link to="/signup" className='px-8 py-3 bg-[#6C3BAA] text-white font-semibold rounded-full hover:cursor-pointer hover:opacity-85'>Sign Up</Link>
      </div>
    </header>
  )
}

export default Header