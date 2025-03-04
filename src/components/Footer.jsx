import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
const Footer = () => {
    const [message, setMessage] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const contact1 = [
        {Icon: <FaPhoneAlt />, desc: '+880 1868742955'},
        {Icon: <IoMdMail />, desc: 'pria01307@gmail.com'}
    ]
    const contact2 = [
        {Icon: <FaFacebook />, desc: 'Facebook', link: 'https://www.facebook.com/debopria.nath?mibextid=ZbWKwL'},
        {Icon: <FaInstagramSquare/>, desc: 'Instagram', link: 'https://www.instagram.com/deboprianath/profilecard/?igsh=eWk2c2VhcTdtb2M5'},
        {Icon: <FaLinkedin/>, desc: 'Linkedin', link: ''},
        {Icon: <FaTwitterSquare/>, desc: 'Twitter', link: ''},
        
    ]
  return (
    <div className='w-full py-[30px] px-[30px] gap-[20px] bg-[#171717] text-[#cccccc] flex flex-col md:flex-row items-start md:items-center md:justify-around justify-center md:gap-0'>
        <div className='flex'>
            <h1 className='text-[50px] text-white'>Contact <span className='italic'>Me</span></h1>
        </div>
        <div className='flex flex-col gap-[5px] '>
                {
                    contact1.map((elem, index) => {
                        return(
                            <div key={index} className=''><a href="" className='flex gap-[10px] items-center'>{elem.Icon} {elem.desc}</a></div>
                        )
                    })
                }
            </div>
            <div className='flex flex-col py-[10px] gap-[5px]'>
                {
                    contact2.map((elem, indexa) => {
                        return(
                            <div key={indexa+10}>
                                <a target='_blank' href={elem.link} className='flex gap-[10px] items-center text-[17.5px]'>{elem.Icon} {elem.desc}</a>
                            </div>
                        )
                    })
                }
                
                <form onSubmit={(e) => {handleSubmit(e)}} action="" className=''>
                    <div className='relative flex items-center'>
                        <input
                        onChange={(e) => {
                            setMessage(e.target.value)
                        }}
                        value={message}
                        className="placeholder:italic placeholder:text-[#ffffffa8] bg-[#ffffff] w-full border border-[#ffffff87] rounded-l-md py-2 outline-none pl-9 bg-transparent sm:text-sm" placeholder='Send me Email' type="text" name='search' />
                        <button type='submit' className='bg-gray-800 rounded-r-md h-full p-[11px]'><FaArrowRight /></button>
                    </div>
                </form>                
            </div>
    </div>
  )
}

export default Footer
