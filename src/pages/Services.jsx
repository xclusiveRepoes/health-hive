import React from 'react'
import Img from '../assets/WellnessCheck.jpg'
import Img1 from '../assets/pexels-thepaintedsquare-992816.webp'
import Img2 from '../assets/pexels-yaroslav-shuraev-4937996.webp'
import Img3 from '../assets/pexels-visionsofasia-5648016.webp'
import BG from '../assets/debbie-ducic-5kmKb2Jql-U-unsplash.webp'
import { Link } from 'react-router-dom'
const Services = () => {
    const data = [
        {title: 'Wellness Check : Your Personalized Health Assessment', desc: 'Discover your health status with our Wellness Check. This feature provides a quick and reliable way to assess your overall well-being', src: Img, path: '/wellness-check'},
        {title: 'NutriGuide: Your Path to Balanced Nutrition', desc: 'Fuel your body with the right nutrition through NutriGuide. Get personalized meal plans, expert tips, and dietary guidance tailored to your unique needs and goals.', src: Img1, path: '/nutriguide'},
        {title: 'Mindful Living: Your Guide to Mental Wellness', desc: 'Prioritize your mental health with Mindful Living. Explore tools, tips, and expert-curated resources to support your mental health journey.', src: Img2, path: '/mindful'},
        {title: 'Immunity Boost: Strengthen Your Natural Defenses', desc: 'Build a resilient immune system with Immunity Boost. Discover expert tips, nutrition plans, and lifestyle programs designed to enhance your body’s natural defenses.', src: Img3, path: '/immunity-boost'},
    ]
  return (
    <div className='services relative flex flex-col items-center justify-center'>
        <img src={BG} className='absolute w-full h-full opacity-[.4] blur-[5px] top-0 left-0 object-cover -z-[1]' alt="" />
        <div className='py-[60px] w-full text-[50px] md:text-[60px] leading-[1.1] tracking-tighter flex flex-col items-center justify-center text-center uppercase'>
            <h1 className='font-medium'>Your Path</h1>
            <h1 className='font-medium'>to <span className='font-normal italic'>Wellness</span></h1>
        </div>
        <div className='w-full lg:w-[80%] py-[30px] px-[20px] flex flex-wrap gap-[40px] lg:gap-[60px] justify-center'>
            {
                data.map((elem, index) => {
                    return(
                        <Link key={index} to={elem.path} >
                            <div className='w-[330px] h-[370px] cursor-pointer border flex flex-col gap-[15px] shadow-md rounded-xl overflow-hidden'>
                                <div className='w-full h-[60%]'>
                                    <img src={elem.src} className='h-[100%] w-[100%]' alt="" />
                                </div>
                                <div className='w-full h-[40%] flex flex-col gap-[10px] px-[15px]'>
                                    <h1 className='text-[20px]  font-[600] leading-[1.1]'>{elem.title}</h1> 
                                    <p className=' text-[13px]'>{elem.desc}</p>
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Services
