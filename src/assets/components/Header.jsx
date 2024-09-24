import React from 'react'

const Header = () => {
  return (
    <nav className='w-full h-[70px] bg-white flex items-center justify-between px-4'>
      <button className='text-m'> <i className='fa-solid fa-arrow-left mr-2'></i> Go Back</button>
      <button className='text-m'>Exit <i className='fa-solid fa-arrow-right ml-2'></i> </button>
    </nav>
  )
}

export default Header