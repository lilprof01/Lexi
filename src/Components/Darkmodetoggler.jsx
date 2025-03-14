import React from 'react';
import { useDarkmode } from '../Context/Themecontext';

const Darkmodetoggler = () => {
  const { darkmode, setDarkmode } = useDarkmode();

  return (
    <button onClick={() => setDarkmode(!darkmode)} className='p-4 bg-[#121212] dark:bg-[#f6f4ef] text-white dark:text-black hover:cursor-pointer hover:scale-105 fixed bottom-1.5 right-1.5 rounded-full shadow-md shadow-black dark:shadow-cyan-50 z-50'>
      {darkmode ? '☀️' : '🌑'}
    </button>
  )
}

export default Darkmodetoggler