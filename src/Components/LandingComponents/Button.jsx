import React from 'react'
import { Link } from 'react-router-dom';

const Button = () => {
  return (
    <Link to="/signup" className='px-6 py-3 bg-[#121212] dark:bg-[#f6f4ef] text-white dark:text-black rounded-full w-[40%] hover:cursor-pointer hover:opacity-85 flex justify-center items-center align-middle get-started'>
      Get started now
    </Link>
  )
}

export default Button;