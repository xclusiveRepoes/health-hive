import React from 'react'
import Img1 from '../assets/pexels-belle-co-99483-1000445.webp'
import Img2 from '../assets/pexels-mastercowley-1089168.webp'
import Img3 from '../assets/pexels-punttim-700535.webp'
const Seasonal = () => {
  return (
    
    <div className='w-full py-[40px] flex flex-col gap-[50px] px-2 bg-[#0000ff16] backdrop-blur-md rounded-t-[30px] mt-[40px]'>
        <div className='flex justify-center '><h1 className='text-[40px] font-[500]'>Seasonal <span className='font-[200] italic'>Topics</span></h1></div>
        <div className='w-full flex items-center justify-center sm:justify-start'>
            <div className='w-[80%] flex flex-col sm:flex-row items-center justify-between'>
                <div className='flex items-center justify-center w-full overflow-hidden'>
                    <img src={Img1} className='w-full sm:w-[85%] md:w-[320px] rounded-t-lg sm:rounded-md'/>
                </div>
                <div className='w-full sm:w-[650px] p-2 rounded-b-md sm:rounded-md shadow-md bg-[#d2d2d24b] backdrop-blur-[10px]'>
                    <h1><span className='font-bold italic text-[25px]'>Holiday:</span> The holiday season is a time for joy and celebration, but it doesn’t have to derail your health goals. To stay on track, focus on balancing indulgence with mindful eating. Enjoy festive meals in moderation and opt for healthier alternatives where possible, such as roasted vegetables instead of creamy casseroles. Staying active is key—try walking after meals, dancing at holiday parties, or incorporating fun outdoor activities with family. Stress management is also essential during this busy season; make time for relaxation through deep breathing or meditation. With these simple strategies, you can enjoy the holidays while maintaining a healthy lifestyle.</h1>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center sm:justify-end'>
            <div className='w-[80%] flex flex-col sm:flex-row items-center justify-between'>
            <div className='flex sm:hidden items-center justify-center w-full overflow-hidden'>
                    <img src={Img2} className='w-full sm:w-[85%] md:w-[320px] rounded-t-lg sm:rounded-md'/>
                </div>
                <div className='w-full sm:w-[650px] p-2 rounded-b-md sm:rounded-md shadow-md bg-[#d2d2d24b] backdrop-blur-[10px]'>
                    <h1><span className='font-bold italic text-[25px]'>Stay Cool with Summer Workouts:</span> Summer workouts can be refreshing, but it's important to stay cool and hydrated to maintain energy and avoid heat-related issues. To beat the heat, exercise during the cooler parts of the day, such as early mornings or evenings. Incorporating water-based activities like swimming or water aerobics is a great way to stay cool while getting a full-body workout. Outdoor activities like hiking or cycling in shaded areas also help you stay active without overheating. Be sure to drink plenty of water before, during, and after your workout to stay hydrated, and consider wearing lightweight, moisture-wicking clothing to keep comfortable. </h1>
                </div>
                <div className='sm:flex items-center justify-center w-full overflow-hidden hidden'>
                    <img src={Img2} className='w-full sm:w-[85%] md:w-[320px] rounded-t-lg sm:rounded-md'/>
                </div>
            </div>
        </div>
        <div className='w-full flex items-center justify-center sm:justify-start'>
            <div className='w-[80%] flex flex-col sm:flex-row items-center justify-between'>
                <div className='flex items-center justify-center w-full overflow-hidden'>
                    <img src={Img3} className='w-full sm:w-[85%] md:w-[320px] rounded-t-lg sm:rounded-md'/>
                </div>
                <div className='w-full sm:w-[650px] p-2 rounded-b-md sm:rounded-md shadow-md bg-[#d2d2d24b] backdrop-blur-[10px]'>
                    <h1><span className='font-bold italic text-[25px]'>Boost Your Immunity This Winter:</span> To boost your immunity, focus on eating nutrient-rich foods like fruits, leafy greens, and nuts that are high in vitamins C, E, and zinc. Regular moderate exercise helps improve circulation and manage stress, which is key for immune health. Ensure you get 7-9 hours of sleep each night to allow your body to repair and strengthen. Staying hydrated by drinking water and herbal teas is essential, and managing stress through relaxation techniques like meditation can also support your immunity. Lastly, dressing warmly and staying cozy during colder months helps keep your body functioning optimally.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Seasonal
