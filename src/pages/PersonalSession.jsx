import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const PersonalSession = () => {
  return (
    <div className='w-full flex items-center justify-center px-4 py-[40px] bg-gradient-to-br from-blue-100 via-white to-white'>
      <div className='max-w-md text-center'>
        <h1 className='capitalize text-[40px] font-semibold tracking-tight leading-[1.2] text-gray-800'>
          Get the best guidance <br />
          <span className='italic'>for</span> you!
        </h1>
        <Link to={'/personalAssitant'}>
          <button className='mt-6 bg-blue-600 text-white w-full py-[12px] rounded-lg text-[18px] font-medium hover:bg-blue-700 transition-all duration-300 shadow-md flex items-center justify-center gap-2'>
            Click Here <FaArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default PersonalSession;
