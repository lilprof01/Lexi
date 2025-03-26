import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MobileNav = ({ openNav }) => {
  return (
    <nav className={`sm:hidden fixed flex flex-col align-middle p-8 gap-8 h-screen w-screen bg-white dark:bg-black z-50 ${openNav ? 'open-nav' : 'close-nav'}`}>
      <Link to="/login" className="flex justify-center items-center align-middle px-8 py-3 border border-[#6C3BAA] text-[#6c3baa] font-semibold rounded-full hover:cursor-pointer hover:bg-[#6c3baa] hover:text-white dark:text-white">Log In</Link>
      <Link to="/languageselection" className="flex justify-center items-center align-middle px-8 py-3 bg-[#6C3BAA] text-white font-semibold rounded-full hover:cursor-pointer hover:opacity-85">Sign Up</Link>
    </nav>
  )
}

export default MobileNav;