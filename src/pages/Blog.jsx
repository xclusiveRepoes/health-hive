import React from 'react'

const Blog = () => {
    const data = [
        {title: '1. Stay Hydrated', Desc: 'Start your day with a glass of water and aim to drink at least 8 glasses throughout the day. Staying hydrated boosts energy, supports digestion, and improves focus.'},
        {title: '2. Eat a Balanced Breakfast', Desc: 'Begin your day with a nutritious breakfast that includes protein, healthy fats, and whole grains. This fuels your body and helps maintain stable energy levels.'},
        {title: '3. Move Your Body', Desc: 'Incorporate at least 30 minutes of physical activity, whether it is a walk, yoga, or a quick home workout. Exercise improves mood, reduces stress, and supports overall health.'},
        {title: '4. Practice Mindfulness', Desc: 'Spend 5-10 minutes practicing mindfulness through meditation, deep breathing, or journaling. This helps reduce stress and keeps your mind clear and focused.'},
        {title: '5. Prioritize Quality Sleep', Desc: 'Aim for 7-9 hours of uninterrupted sleep. Create a bedtime routine, avoid screens before bed, and keep your sleeping environment calm and comfortable.'},
    ]
  return (
    <div className='w-full flex flex-col items-center justify-center mt-[50px]'>
        <div className='flex items-center justify-center flex-col'>
            <h1 className='text-[40px] font-[500] py-[30px]'>Health Tips</h1>
            <h1 className='text-[25px] px-[15px]'>Five Daily Habits for Better Health:</h1>
        </div>
        <div className='w-full md:w-[80%] px-[20px] py-[20px] flex gap-[20px] flex-wrap justify-center'>
            {
                data.map((elem, index) => {
                    return(
                        <div key={index} className='w-[300px] h-[280px] shadow-xl rounded-md bg-[#cecece59] backdrop-blur-[20px] py-[18px]'>
                            <h1 className='text-[22px] px-[20px]'>{elem.title}</h1>
                            <p className='text-[16px] mt-[15px] px-[40px]'>{elem.Desc}</p>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Blog
