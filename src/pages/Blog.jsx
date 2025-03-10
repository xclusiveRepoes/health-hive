import React from 'react';

const Blog = () => {
    const data = [
        {title: '1. Stay Hydrated', Desc: 'Start your day with a glass of water and aim to drink at least 8 glasses throughout the day. Staying hydrated boosts energy, supports digestion, and improves focus.'},
        {title: '2. Eat a Balanced Breakfast', Desc: 'Begin your day with a nutritious breakfast that includes protein, healthy fats, and whole grains. This fuels your body and helps maintain stable energy levels.'},
        {title: '3. Move Your Body', Desc: 'Incorporate at least 30 minutes of physical activity, whether it is a walk, yoga, or a quick home workout. Exercise improves mood, reduces stress, and supports overall health.'},
        {title: '4. Practice Mindfulness', Desc: 'Spend 5-10 minutes practicing mindfulness through meditation, deep breathing, or journaling. This helps reduce stress and keeps your mind clear and focused.'},
        {title: '5. Prioritize Quality Sleep', Desc: 'Aim for 7-9 hours of uninterrupted sleep. Create a bedtime routine, avoid screens before bed, and keep your sleeping environment calm and comfortable.'},
    ]
  return (
    <div className='w-full flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white py-16'>
        <div className='text-center mb-8'>
            <h1 className='text-4xl font-semibold text-gray-800'>Health Tips</h1>
            <h2 className='text-xl text-gray-600 mt-2'>Five Daily Habits for Better Health</h2>
        </div>
        <div className='w-full md:w-[80%] px-6 flex flex-wrap justify-center gap-8'>
            {data.map((elem, index) => (
                <div key={index} className='w-[320px] h-[210px] bg-white shadow-lg rounded-lg p-6 flex flex-col justify-between hover:scale-105 transition-all'>
                    <h3 className='text-xl font-semibold text-blue-600'>{elem.title}</h3>
                    <p className='text-gray-700 text-md mt-3'>{elem.Desc}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Blog;
