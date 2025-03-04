import React from "react";

const MindfulActivities = () => {
  return (
    <div className="bg-gray-50 py-10 px-5 mt-[60px]">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
        Mindful Activities: Art Therapy & Movement Practices
      </h1>

     
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Art Therapy</h2>
        <p className="text-gray-600 mb-4">
          Art therapy combines creativity with mindfulness, offering a therapeutic outlet to express thoughts and emotions non-verbally.
        </p>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Benefits of Art Therapy</h3>
        <ul className="list-disc pl-5 text-gray-600 mb-4">
          <li>Stress Relief</li>
          <li>Emotional Expression</li>
          <li>Enhanced Focus</li>
          <li>Improved Self-Esteem</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Simple Art Therapy Activity to Try</h3>
        <ul className="list-disc pl-5 text-gray-600">
          
          <div className="bg-gray-50 py-10 px-5">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">
                    Mandala Coloring
                </h2>

                
                <p className="text-gray-600 text-lg mb-6 text-center">
                    Mandala coloring is a creative and meditative activity that helps you focus, relieve stress, and express emotions. By coloring intricate patterns, you can connect with the present moment and cultivate a sense of calm.
                </p>

                
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">Benefits</h3>
                    <ul className="list-disc pl-5 text-gray-600">
                    <li>Relieves stress and anxiety by promoting focus.</li>
                    <li>Boosts creativity and self-expression.</li>
                    <li>Encourages mindfulness and emotional regulation.</li>
                    <li>Enhances patience and attention to detail.</li>
                    </ul>
                </div>

                
                <div className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                    Guided Instructions
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600">
                    <li>Find a quiet and comfortable space to color.</li>
                    <li>Focus on your breathing as you fill in each section.</li>
                    <li>Choose colors that reflect your current mood or emotions.</li>
                    <li>Start from the center of the mandala and work outward, symbolizing growth.</li>
                    </ul>
                </div>

                <div className="text-center">
                    <a
                    href="/path-to-mandala-template.pdf"
                    download
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
                    >
                    Download Mandala Template
                    </a>
                </div>
            </div>
        </ul>
      </section>

      
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-5">Movement Practices</h2>
        <p className="text-gray-600 mb-4">
          Movement-based mindfulness integrates the body and mind, promoting physical health while cultivating awareness.
        </p>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Benefits of Movement Practices</h3>
        <ul className="list-disc pl-5 text-gray-600 mb-4">
          <li>Enhanced Mind-Body Connection</li>
          <li>Stress Reduction</li>
          <li>Improved Flexibility and Strength</li>
          <li>Boosted Energy</li>
        </ul>
        <h3 className="text-xl font-medium text-gray-700 mb-3">Popular Movement Practices</h3>
        <ul className="list-disc pl-5 text-gray-600">
          <li>Yoga</li>
          <li>Tai Chi</li>
          <li>Walking Meditation</li>
          <li>Dance Therapy</li>
        </ul>
      </section>
    </div>
  );
};

export default MindfulActivities;
