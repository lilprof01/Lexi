import React from 'react'

const Header = ({ openNav, setOpenNav }) => {
  const handleOpenNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className='p-8 bg-[#6c3baa] col-start-2 transition-all duration-300 flex justify-between sm:justify-end items-center align-middle'>
      <div
        onClick={handleOpenNav}
        className={`hamburger h-10 w-10 flex flex-col justify-center items-end align-middle z-[100] hover:cursor-pointer sm:hidden`}
      >
        <div
          className={`h-1 w-12 bg-[#121212] dark:bg-[#f6f4ef] burger-1`}
        ></div>
        <div
          className={`h-1 w-8 bg-[#121212] dark:bg-[#f6f4ef]`}
        ></div>
        <div
          className={`h-1 w-6 bg-[#121212] dark:bg-[#f6f4ef] burger-2`}
        ></div>
      </div>

      <p className='text-lg text-white'>Highest Score: 100</p>
    </header>
  )
}

export default Header