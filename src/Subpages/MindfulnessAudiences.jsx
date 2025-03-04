import React, { useState } from "react";

const MindfulnessAudiences = () => {
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const audiences = [
    {
      title: "Mindfulness for Students",
      description: `
        Students often face academic pressure, social challenges, and the need to balance multiple responsibilities. Mindfulness helps them stay focused, manage stress, and improve their overall mental well-being.
      `,
      benefits: [
        "Enhances focus and memory for better learning.",
        "Reduces exam stress and anxiety.",
        "Improves emotional regulation and resilience.",
      ],
      practices: [
        "Short meditation sessions to calm the mind before studying.",
        "Mindful breathing exercises during breaks.",
        "Journaling to reflect on daily achievements and emotions.",
      ],
    },
    {
      title: "Mindfulness for Professionals",
      description: `
        In fast-paced work environments, mindfulness can improve productivity, creativity, and job satisfaction. It's an effective way to combat burnout and maintain work-life balance.
      `,
      benefits: [
        "Boosts concentration and decision-making skills.",
        "Reduces workplace stress and increases resilience.",
        "Fosters better communication and teamwork.",
      ],
      practices: [
        "5-minute mindfulness pauses during work hours.",
        "Guided meditation to start or end the day.",
        "Gratitude journaling to shift focus to positive experiences.",
      ],
    },
    {
      title: "Mindfulness for Parents and Caregivers",
      description: `
        Parents and caregivers often juggle multiple roles, leading to stress and emotional exhaustion. Mindfulness helps them stay present, patient, and emotionally available for their loved ones.
      `,
      benefits: [
        "Strengthens parent-child connections.",
        "Improves patience and empathy.",
        "Reduces feelings of overwhelm and fatigue.",
      ],
      practices: [
        "Mindful listening during interactions with children.",
        "Relaxation techniques to unwind after a busy day.",
        "Family mindfulness exercises like guided breathing or body scans.",
      ],
    },
    {
      title: "Mindfulness for Seniors",
      description: `
        Mindfulness is especially beneficial for seniors, offering physical, emotional, and cognitive support as they age. It promotes a sense of purpose, reduces loneliness, and helps manage health conditions.
      `,
      benefits: [
        "Enhances memory and mental clarity.",
        "Reduces stress and promotes relaxation.",
        "Supports overall well-being and pain management.",
      ],
      practices: [
        "Gentle yoga or chair meditation.",
        "Nature walks with mindful awareness of surroundings.",
        "Reflective journaling to celebrate life experiences.",
      ],
    },
    {
      title: "Mindfulness for People with Chronic Conditions",
      description: `
        For individuals managing chronic illnesses or pain, mindfulness can offer relief by improving emotional well-being and helping them cope with physical discomfort.
      `,
      benefits: [
        "Reduces feelings of frustration and isolation.",
        "Helps manage pain and improve sleep quality.",
        "Encourages self-compassion and acceptance.",
      ],
      practices: [
        "Body scan meditations to connect with the body.",
        "Breathing exercises to calm the nervous system.",
        "Visualization techniques to focus on positive imagery.",
      ],
    },
  ];

  return (
    <div className="bg-gray-50 py-10 px-5 mt-[50px]">
      <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
        Mindfulness for Specific Audiences
      </h2>
      <p className="text-gray-600 text-lg mb-10 text-center">
        Discover mindfulness practices tailored to your unique needs. Whether
        you're a student, professional, parent, senior, or managing a chronic
        condition, find a mindful path that resonates with you.
      </p>
      <div className="space-y-6">
        {audiences.map((audience, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-5 border"
          >
            <button
              className="flex justify-between items-center w-full text-left text-xl font-semibold text-gray-700 focus:outline-none"
              onClick={() => toggleSection(index)}
            >
              {audience.title}
              <span>
                {activeSection === index ? "▲" : "▼"}
              </span>
            </button>
            {activeSection === index && (
              <div className="mt-4">
                <p className="text-gray-600 mb-4">{audience.description}</p>
                <h4 className="text-lg font-medium text-gray-700">
                  Benefits:
                </h4>
                <ul className="list-disc pl-5 text-gray-600 mb-4">
                  {audience.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
                <h4 className="text-lg font-medium text-gray-700">
                  Suggested Practices:
                </h4>
                <ul className="list-disc pl-5 text-gray-600">
                  {audience.practices.map((practice, i) => (
                    <li key={i}>{practice}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindfulnessAudiences;
