import React from 'react'
import { Link } from 'react-router-dom'

const PersonalSession = () => {
  return (
    <div className='w-full flex items-center flex-col justify-center py-[40px]'>
        <div>
        <h1 className='capitalize text-[40px] font-medium text-center tracking-tight leading-[1.1]'>
            Get the best guidance <br /> <span className='italic'>for</span> you!
        </h1>
        <Link to={'/personalAssitant'}><button className='mt-[20px] bg-gray-700 text-white w-full py-[8px] rounded-md text-[18px] font-medium'>Click Here</button></Link>
        </div>
    </div>
  )
}

export default PersonalSession