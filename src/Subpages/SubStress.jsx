import React from 'react';
import Img1 from '../assets/streching-3822450.jpg';
import Img3 from '../assets/Walking.jpg';
import Img4 from '../assets/grounding-355952.jpg';
import Img5 from '../assets/breathing.jpg';
import Img7 from '../assets/music.jpg';
import Img8 from '../assets/journaling.jpg';
import Img9 from '../assets/snacks.jpg';
import Img10 from '../assets/destruction.jpg';

const tips = [
  {
    id: 1,
    title: 'Stretching',
    description: [
      "~ Why It Helps: Stretching reduces muscle tension and increases blood flow, helping to relax the body and mind.",
      "~ How to Do It:",
      "Neck Roll: Gently roll your neck clockwise and counterclockwise.",
      "Shoulder Shrugs: Lift your shoulders to your ears, hold for a few seconds, then release.",
      "Forward Fold: Stand up, bend forward, and let your arms hang towards the ground.",
      "~ When to Use: During work breaks, after waking up, or before bedtime.",
    ],
    img: Img1,
    reverse: false,
  },
  {
    id: 2,
    title: 'Walking',
    description: [
      "~ Why It Helps: Walking, especially in nature, releases endorphins (feel-good hormones) and distracts your mind from stressors.",
      "~ How to Do It:",
      "Take a 10-15 minute walk in a quiet park or your neighborhood.",
      "Focus on your surroundings: the trees, the sound of birds, or the breeze on your skin.",
      "Practice mindful walking by syncing your breath with your steps.",
      "~ When to Use: Anytime you feel overwhelmed or need a mental reset.",
    ],
    img: Img3,
    reverse: true,
  },
  {
    id: 3,
    title: 'Grounding Exercises',
    description: [
      "~ Why It Helps: Grounding techniques bring your focus to the present moment, reducing feelings of anxiety or stress.",
      "~ How to Do It:",
      "5-4-3-2-1 Method: Name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste.",
      "Cold Water Reset: Hold a piece of ice or splash cold water on your face to redirect your thoughts.",
      "~ When to Use: During moments of acute stress or panic.",
    ],
    img: Img4,
    reverse: false,
  },
  {
    id: 4,
    title: 'Breathing Exercises',
    description: [
      "~ Why It Helps: Deep breathing calms the nervous system and reduces the stress response.",
      "~ How to Do It:",
      "4-7-8 Breathing: Inhale for 4 seconds, hold for 7 seconds, exhale for 8 seconds.",
      "Box Breathing: Inhale for 4 seconds, hold for 4 seconds, exhale for 4 seconds, hold for 4 seconds.",
      "~ When to Use: Anytime, especially in high-stress situations.",
    ],
    img: Img5,
    reverse: true,
  },
  {
    id: 6,
    title: 'Listening to Music',
    description: [
      "~ Why It Helps: Calming music can lower your heart rate and cortisol levels.",
      "~ How to Do It:",
      "Choose soft instrumental music, nature sounds, or your favorite relaxing playlist.",
      "Close your eyes and let the rhythm guide your breathing.",
      "~ When to Use: While working, commuting, or before sleep.",
    ],
    img: Img7,
    reverse: false,
  },
  {
    id: 7,
    title: 'Journaling',
    description: [
      "~ Why It Helps: Writing down your thoughts can help you process emotions and release stress.",
      "~ How to Do It:",
      "Spend 5-10 minutes jotting down your worries, feelings, or things you’re grateful for.",
      "Use prompts like, 'What made me smile today?' or 'What’s currently weighing on my mind?'",
      "~ When to Use: At the end of the day or during stressful periods.",
    ],
    img: Img8,
    reverse: true,
  },
  {
    id: 8,
    title: 'Hydration and Light Snacks',
    description: [
      "~ Why It Helps: Dehydration and hunger can amplify stress levels.",
      "~ How to Do It:",
      "Drink a glass of water or herbal tea.",
      "Snack on nuts, fruits, or dark chocolate for a quick energy boost.",
      "~ When to Use: When you feel fatigued or irritable.",
    ],
    img: Img9,
    reverse: false,
  },
  {
    id: 9,
    title: 'Quick Distractions',
    description: [
      "~ Why It Helps: Short distractions can interrupt negative thought spirals.",
      "~ How to Do It:",
      "Solve a puzzle, doodle, or watch a funny video.",
      "Spend 5 minutes playing with a pet or engaging in a hobby.",
      "~ When to Use: When overthinking or feeling overwhelmed.",
    ],
    img: Img10,
    reverse: true,
  },
];

const SubStress = () => {
  return (
    <div className='w-full px-[50px] py-[100px] flex flex-col gap-[60px]'>
      <h1 className='text-[40px] text-center'>Quick Ways to Calm the Mind</h1>
      {tips.map(({ id, title, description, img, reverse }) => (
        <div
          key={id}
          className={`w-full flex flex-col gap-[20px] md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} md:gap-[100px]`}
        >
          <div className='md:w-[50%]'>
            <img src={img} className='stressImg md:w-[450px] mt-[20px]' alt={title} />
          </div>
          <div className='md:w-[50%]'>
            <h1 className='text-[25px]'>{id}. {title}</h1>
            {description.map((desc, idx) => (
              <p key={idx} className={`mt-2 ${idx === 0 ? 'italic' : ''}`}>{desc}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubStress;
