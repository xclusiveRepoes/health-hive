import React from 'react'
import Img from '../assets/Contact.jpg'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Contact = () => {
  return (
    <div className='w-full min-h-screen flex items-center justify-center flex-col md:flex-row'>
      <div className='w-full flex flex-col items-center justify-center h-[100vh] px-[30px] py-[20px]'>
        <div>
          <div className='leading-[1.3]'>
            <h1 className='uppercase font-medium text-[#3C279C]'>contact me</h1>
            <h1 className='text-[45px] tracking-tighter font-semibold'>Get in touch today</h1>
          </div>
          <a className='flex cursor-pointer items-center gap-[20px] bg-[#cacacabf] rounded-[10px] w-[250px] px-[25px] py-[10px] mt-[30px] font-medium'>
            <CiMail className='text-[25px]' />
            <div>
              <h1 className='text-[#848484]'>E-mail</h1>
              <h1>Contact@gmail.com</h1>
            </div>
          </a>
          <a className='flex cursor-pointer items-center gap-[20px] bg-[#cacacabf] rounded-[10px] w-[250px] px-[25px] py-[10px] mt-[10px] font-medium'>
            <FaPhoneAlt className='text-[25px]' />
            <div>
              <h1 className='text-[#848484]'>Phone</h1>
              <h1>+88 01307874914</h1>
            </div>
          </a>
          <div className='flex w-full items-center py-[20px]'>
            <h1>Reach out to me: </h1>
          </div>
        </div>
      </div>
      <div className='w-full h-[100vh]'>

      </div>
    </div>
  )
}

export default Contact
