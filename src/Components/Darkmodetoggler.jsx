import React from 'react'
import { useDarkmode } from '../Context/Themecontext'

const Darkmodetoggler = () => {
  const { darkmode, setDarkmode } = useDarkmode()

  return (
    <button onClick={() => setDarkmode(!darkmode)} className='px-6 py-3 bg-purple-800 text-white hover:cursor-pointer fixed bottom-1.5 right-1.5 rounded-full'>
      {darkmode ? 'light mode' : 'dark mode'}
    </button>
  )
}

export default Darkmodetoggler