import React from 'react'
import Img from '../assets/pexels-natalie-bond-320378-3759657.webp'
const About = () => {
  return (
    <div className=' w-full px-[30px] py-[40px] mt-[50px]'> 
        <div className='w-full relative flex flex-col md:flex-row gap-[50px] md:flex items-center'>
            <div className='w-[100%] md:w-[40%] flex justify-center'>
                <img src={Img} className='w-[100%] h-[50vh] xl:h-[70vh] sm:h-[55vh] object-cover' alt="" />
            </div>
            <div className='w-[100%] md:w-[60%]'>
                <p>
                    Hi, I’m Dabopria Nath <br /> <br />This platform is my personal initiative to make health and wellness accessible to everyone. With a passion for empowering individuals to lead healthier lives, I’ve worked tirelessly to build this space where you can find reliable information, practical tools, and personalized support for your well-being. <br /> <br />
                    <span className='font-bold'>Why Health Hive?</span> <br />
                    As someone who values the importance of holistic health, I created Health Hive to provide: <br /> <br />
                    <span className='font-bold'>~Accurate Information:</span> Every resource here is carefully curated to ensure trustworthiness. <br /> <br />
                    <span className='font-bold'>~Personalized Tools:</span> Helping you track, plan, and improve your health journey. <br /> <br />
                    <span className='font-bold'>~A Community Feel:</span> Though I’m working solo, this platform is built with a focus on connecting people to wellness. <br /><br />
                    Health Hive is more than a website — it’s a reflection of my commitment to making good health simple and achievable. Thank you for trusting me with your wellness journey. Together, let’s create a healthier, happier future.
                </p>
            </div>
        </div>
    </div>
  )
}

export default About
