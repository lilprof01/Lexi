import React from 'react';
import { useDarkmode } from '../Context/Themecontext';

const Darkmodetoggler = () => {
  const { darkmode, setDarkmode } = useDarkmode();

  return (
    <button onClick={() => setDarkmode(!darkmode)} className='px-6 py-3 bg-[#121212] dark:bg-[#f6f4ef] text-white dark:text-black hover:cursor-pointer hover:scale-105 fixed bottom-1.5 right-1.5 rounded-full'>
      {darkmode ? 'light ☀️' : 'dark 🌑'}
    </button>
  )
}

export default Darkmodetoggler