import React from 'react';
import Img1 from '../assets/pexels-belle-co-99483-1000445.webp';
import Img2 from '../assets/pexels-mastercowley-1089168.webp';
import Img3 from '../assets/pexels-punttim-700535.webp';

const topics = [
  {
    img: Img1,
    title: 'Holiday:',
    content:
      "The holiday season is a time for joy and celebration, but it doesn’t have to derail your health goals. Enjoy festive meals in moderation, opt for healthier alternatives, and stay active with activities like walking or dancing. Manage stress with relaxation techniques such as deep breathing or meditation.",
  },
  {
    img: Img2,
    title: 'Stay Cool with Summer Workouts:',
    content:
      "Summer workouts can be refreshing, but it's important to stay cool and hydrated. Exercise in cooler parts of the day, try water-based activities like swimming, and wear moisture-wicking clothing to stay comfortable.",
  },
  {
    img: Img3,
    title: 'Boost Your Immunity This Winter:',
    content:
      "To boost your immunity, eat nutrient-rich foods, exercise regularly, and prioritize sleep. Stay hydrated with water and herbal teas, manage stress with meditation, and dress warmly to maintain overall well-being.",
  },
];

const Seasonal = () => {
  return (
    <div className="w-full py-12 px-4 flex flex-col gap-12 bg-gray-100">
      <div className="text-center">
        <h1 className="text-4xl font-semibold">
          <span className="text-blue-600">Seasonal</span>{' '}
          <span className="italic text-gray-700 font-light">Topics</span>
        </h1>
      </div>
      <div className="flex flex-col gap-12">
        {topics.map((topic, index) => (
          <div
            key={index}
            className={`w-full flex flex-col md:flex-row items-center gap-6 p-6 rounded-lg shadow-lg bg-white ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
          >
            <img
              src={topic.img}
              alt={topic.title}
              className="w-full md:w-[350px] h-[250px] object-cover rounded-lg shadow-md"
            />
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-2xl font-semibold italic text-blue-600">{topic.title}</h2>
              <p className="text-gray-700 mt-3 leading-relaxed">{topic.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Seasonal;
