import React, { useState } from 'react'

import gsap from 'gsap'
import { Link } from 'react-router-dom'

const NavBar = () => {
  const [isClick, setIsClick] = useState(false)
  const data = [
    {title: 'home', path: '/'},
    {title: 'about', path: '/about'},
    {title: 'tips', path: '/blog'},
    {title: 'contact', path: '/contact'},
  ]
  const handleClick = () => {
    setIsClick(!isClick)
    if(isClick){
      gsap.to('.sideNav', {
        left: 0
      })
    }
    else{
      gsap.to('.sideNav', {
        left: '100%'
      })
    }
  }
  return (
    <div className='text-white w-full fixed top-0 left-0 z-50 py-[20px] backdrop-blur-[10px] bg-[#0000003d] px-[30px] flex items-center justify-between'>
      <h1 className='font-bold text-[20px]'><Link to={'/'}>HealthHive</Link></h1>
      <h1 onClick={handleClick} className='sm:hidden cursor-pointer'>Menu</h1>
      <div className='hidden sm:flex gap-[15px] lg:gap-[25px] capitalize'>
        {
          data.map((elem, indexa) => {
            return(
              <Link key={indexa} to={elem.path}>
                <h1 className='cursor-pointer'>{elem.title}</h1>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default NavBar
