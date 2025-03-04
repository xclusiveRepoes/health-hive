import React from 'react'

const SideNav = () => {
  return (
    <div className='sideNav w-full fixed top-0 left-[100%] h-screen justify-center text-[black] backdrop-blur-[20px] font-[400] z-40 bg-[#d5d5d59e] text-[55px] sm:hidden flex flex-col px-[12px] pl-[70px] leading-[1.1]'>
      {
        ['home', 'about', 'social', 'tips', 'contact'].map((elem, index) => {
          return <h1 key={elem} className='capitalize cursor-pointer'>{elem}</h1>
        })
      }
    </div>
  )
}

export default SideNav
