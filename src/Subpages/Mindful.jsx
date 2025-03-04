import React from 'react'
import Img1 from '../assets/relax.jpg'
import Img2 from '../assets/stress-1583582.jpg'
import Img3 from '../assets/positive-psychology-2055469670-29205873.jpg'
import Img4 from '../assets/sleep-1028741.jpg'
import Img5 from '../assets/mindful-7078085.jpg'
import Img6 from '../assets/mindful-activities-9412436.jpg'
import Img7 from '../assets/mindfulness-Audience.jpg'
import { Link } from 'react-router-dom'

const Mindful = () => {
    const data = [
        {title: ['Breathing Exercises', 'Progressive Muscle Relaxation'], src: Img1, heading: 'Guided Meditation and Relaxation Tools', path: '/submindful'},
        {title: ['Stress Relief Tips'], src: Img2, heading: 'Stress and Anxiety Management', path: '/sub-stress'},
        {title: ['Gratitude Journal', 'Daily Affirmations','Kindness Challenges'], src: Img3, heading: 'Positive Psychology Practices', path: '/subpositive'},
        {title: ['Sleep Hygiene Tips'], src: Img4, heading: 'Sleep and Relaxation', path: '/sleep-and-relaxation'},
        {title: ['Art Therapy', 'Movement Practices'], src: Img6, heading: 'Mindful Activities', path: '/mindful-activities'},
        {title: ['Content'], src: Img7, heading: ' Mindfulness for Specific Audiences', path: '/mindfullness-audience'},



    ]
  return (
    <div className='w-full min-h-screen flex flex-wrap gap-[40px] items-center justify-around py-[50px] px-[50px] mt-[50px]'>
      {
        data.map((elem, index) => {
            return (
                <Link to={elem.path}>
                    <div key={index} className='w-[300px]'>
                        <h1 className='text-[30px]'>{elem.heading}</h1>
                        <div className='w-[300px] h-[300px] border rounded-md overflow-hidden cursor-pointer'>
                            <div className='w-full h-[70%] object-cover'>
                                <img src={elem.src} className='w-full h-full' alt="" />
                            </div>
                            <div className='w-full px-[10px] py-[10px]'>
                                {
                                    elem.title.map((element, indexa) => {
                                        return (
                                            <li key={indexa+10} className='font-[500] text-[18px]'>{element}</li>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Link>
            )
        })
      }
      <div className='w-full'>
      </div>
    </div>
  )
}

export default Mindful
