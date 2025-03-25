import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FaGear } from 'react-icons/fa6';
import { MdDashboard } from 'react-icons/md';

const MobileNav = ({ openNav }) => {
  return (
    <nav className='sm:hidden fixed top-16 left-0 py-16 px-8 h-screen flex flex-col justify-between items-center align-middle gap-10 bg-[#6c3baa]'>
      <div className="flex flex-col justify-between align-middle gap-10">
        <div className='flex items-center align-middle gap-4 text-xl'>
            <MdDashboard />
            <p>Dashboard</p>
        </div>
        <div className='flex items-center align-middle gap-4 text-xl'>
            <FaUser />
            <p>select</p>
        </div>
        <div className='flex items-center align-middle gap-4 text-xl'>
            <FaUser />
            <p>select</p>
        </div>
        <div className='flex items-center align-middle gap-4 text-xl'>
            <FaUser />
            <p>select</p>
        </div>
        <div className='flex items-center align-middle gap-4 text-xl'>
            <FaUser />
            <p>select</p>
        </div>
        <div className='flex items-center align-middle gap-4 text-xl'>
            <FaGear />
            <p>Settings</p>
        </div>
      </div>

      <div className='flex items-center align-middle gap-4 text-xl py-6'>
        <FaUser />
        <p>Profile</p>
      </div>
    </nav>
  )
}

export default MobileNav
