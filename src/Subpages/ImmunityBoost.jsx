import React from "react";
import Img1 from '../assets/spinach-redmeat.jpg'
import Img2 from '../assets/NutsandSeeds.jpg'
import Img3 from '../assets/HerbalTea.jpg'
import Img4 from '../assets/golden-milk.jpg'
import Img5 from '../assets/healthyMeal.jpg'
const ImmunityBoost = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 mt-[60px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-600 mb-6 text-center">
          Immunity Boost: Strengthen Your Natural Defenses
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          A strong immune system is your body’s first line of defense against illness and infection.
          Enhancing your immunity means building resilience, recovering faster, and maintaining
          overall well-being. Discover how nutrition, lifestyle, and mindfulness can help you
          strengthen your natural defenses.
        </p>

        {/* Key Components Section */}
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Key Components of Immunity Boosting</h2>
        <div className="mb-12 md:flex flex-row-reverse">
          
          <div className="md:w-[50%] flex flex-col">
             <img src={Img1} className="hidden md:block object-cover w-[50%] ml-[10%]" alt="" /> <br />
             <img src={Img2} className="object-cover md:w-[50%] md:ml-[50%]" alt="" /> <br />
             <img src={Img3} className="hidden md:block object-cover w-[50%] ml-[8%]" alt="" />
          </div>
          <div className="space-y-6 md:w-[50%]">
            <div>
              <h3 className="text-xl font-bold text-gray-800">1. Nutrition for Immune Health</h3>
              <p className="text-gray-700 leading-relaxed">
                Proper nutrition provides essential vitamins and minerals to boost immunity:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li><strong>Vitamin C:</strong> Boosts white blood cell production (found in citrus fruits).</li>
                <li><strong>Vitamin D:</strong> Supports immune responses (sunlight, fatty fish).</li>
                <li><strong>Zinc:</strong> Enhances immune cell function (nuts, seeds).</li>
                <li><strong>Iron:</strong> Vital for oxygen transport (spinach, red meat).</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">2. Lifestyle Practices</h3>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li><strong>Sleep:</strong> Aim for 7-9 hours to allow for recovery.</li>
                <li><strong>Exercise:</strong> Moderate physical activity boosts immunity.</li>
                <li><strong>Stress Management:</strong> Practice mindfulness and meditation.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">3. Gut Health</h3>
              <p className="text-gray-700 leading-relaxed">
                Probiotics from foods like yogurt and fermented vegetables support immunity by improving gut bacteria.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">4. Hydration</h3>
              <p className="text-gray-700 leading-relaxed">
                Staying hydrated helps cells function optimally. Herbal teas like ginger tea add extra benefits.
              </p>
            </div>
          </div>
        </div>

        {/* Daily Routine Section */}
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Immunity-Boosting Daily Practices</h2>
        <div className="mb-12 md:flex  md:gap-[150px]">
          <div className="md:w-[40%]">
            <img src={Img5} alt="" /> <br />
          </div>
          <div className="md:w-[60%] md:text-[24px]">
          <p className="text-gray-700 leading-relaxed mb-4">
            Incorporate these simple practices into your day:
          </p>
          <ul className="list-disc list-inside ml-4 text-gray-700">
            <li><strong>Morning:</strong> Warm water with lemon and honey.</li>
            <li><strong>Midday:</strong> Nutrient-rich lunch with vegetables, protein, and grains.</li>
            <li><strong>Evening:</strong> Light yoga or meditation.</li>
            <li><strong>Night:</strong> Turmeric milk or chamomile tea for restful sleep.</li>
          </ul>
          </div>
        </div>

        {/* Recipes Section */}
        <h2 className="text-2xl font-semibold text-teal-500 mb-4">Immunity-Boosting Recipes</h2>
        <div className="mb-12 md:flex flex-row-reverse gap-[110px]">
          <div className="md:w-[40%]">
             <img src={Img4} alt="" /> <br />
          </div>
          <div className="space-y-4 md:w-[50%]">
            <div>
              <h3 className="text-xl font-bold text-gray-800">Golden Milk</h3>
              <p className="text-gray-700">
                A warm drink with turmeric, milk, black pepper, and honey to reduce inflammation.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Immunity Smoothie</h3>
              <p className="text-gray-700">
                Blend spinach, orange, ginger, yogurt, and cinnamon for a nutrient-packed drink.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">Garlic Soup</h3>
              <p className="text-gray-700">
                A comforting soup made with roasted garlic, onions, and chicken stock.
              </p>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default ImmunityBoost;

