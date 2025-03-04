import React from "react";

const SleepAndRelaxation = () => {
  const tips = [
    {
      title: "Stick to a Routine",
      description: "Go to bed and wake up at the same time every day, even on weekends. This helps regulate your body's internal clock.",
      icon: "🕒",
    },
    {
      title: "Create a Cozy Bedroom",
      description: "Keep your room cool, dark, and quiet. Use comfortable pillows and blackout curtains for better sleep.",
      icon: "🛏️",
    },
    {
      title: "Avoid Screens Before Bed",
      description: "Stop using phones, TVs, or laptops at least 1 hour before bedtime. Blue light can interfere with sleep.",
      icon: "📵",
    },
    {
      title: "Relax Before Sleeping",
      description: "Try deep breathing, meditation, or listening to calming music to relax your mind.",
      icon: "🎵",
    },
    {
      title: "Watch Your Diet",
      description: "Avoid caffeine, heavy meals close to bedtime. Opt for a light snack if needed.",
      icon: "🍎",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-6 flex flex-col items-center mt-[70px]">
      <h1 className="text-4xl font-bold  mb-6">
        Sleep and Relaxation Tips
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tips.map((tip, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
          >
            <div className="text-5xl mb-4">{tip.icon}</div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {tip.title}
            </h2>
            <p className="text-gray-600 text-center">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SleepAndRelaxation;
