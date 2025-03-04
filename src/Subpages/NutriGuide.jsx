import React from "react";

const NutriGuide = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 mt-[50px]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-green-600 mb-6 text-center">
          NutriGuide: Your Path to Balanced Nutrition
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-8">
          Achieving optimal health begins with balanced nutrition. NutriGuide is your comprehensive
          resource for understanding your dietary needs, creating personalized meal plans, and
          embracing a healthier lifestyle. Whether your goal is to boost energy, manage weight, or
          support overall wellness, NutriGuide provides the tools and insights to help you succeed.
        </p>

        {/* What NutriGuide Offers */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            What NutriGuide Offers
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                1. Personalized Meal Plans
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tailored meal plans designed to meet your specific health goals and preferences:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>
                  <strong>Weight Management:</strong> Balanced meals for healthy weight loss or maintenance.
                </li>
                <li>
                  <strong>Energy Boost:</strong> Foods that provide sustained energy throughout the day.
                </li>
                <li>
                  <strong>Immune Support:</strong> Nutrition focused on strengthening your body's defenses.
                </li>
                <li>
                  <strong>Special Diets:</strong> Guidance for vegetarian, vegan, gluten-free, or other dietary needs.
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                2. Expert Tips for Balanced Eating
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Learn how to create nutritious meals and snacks with expert advice on:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li>The importance of macronutrients (carbohydrates, proteins, and fats).</li>
                <li>Selecting nutrient-dense foods over empty calories.</li>
                <li>Meal prepping and portion control for busy lifestyles.</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                3. Dietary Guidance for Unique Needs
              </h3>
              <p className="text-gray-700 leading-relaxed">
                NutriGuide understands that everyone’s body is different. Get tailored guidance for:
              </p>
              <ul className="list-disc list-inside ml-4 text-gray-700">
                <li><strong>Age-Specific Nutrition:</strong> Plans for children, adults, and seniors.</li>
                <li><strong>Lifestyle-Based Nutrition:</strong> Active individuals, desk workers, and students.</li>
                <li><strong>Medical Nutrition Therapy:</strong> Support for managing diabetes, hypertension, or other conditions.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Key Features of NutriGuide
          </h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-3">
            <li>
              <strong>Interactive Nutrition Tracker:</strong> Monitor your daily nutrient intake and track progress.
            </li>
            <li>
              <strong>Food Suggestions and Recipes:</strong> Wholesome recipes to incorporate a variety of flavors and nutrients.
            </li>
            <li>
              <strong>Meal Prep and Grocery Lists:</strong> Simplify meal prep with curated grocery lists.
            </li>
            <li>
              <strong>Health Goals Integration:</strong> Sync NutriGuide with your fitness goals for real-time feedback.
            </li>
          </ul>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-green-500 mb-4">
            Benefits of Using NutriGuide
          </h2>
          <ul className="list-disc list-inside ml-4 text-gray-700 space-y-3">
            <li>Enhanced understanding of nutrition and its impact on health.</li>
            <li>Improved energy levels and mood through balanced eating.</li>
            <li>Support for achieving and maintaining a healthy weight.</li>
            <li>Guidance for developing long-lasting healthy eating habits.</li>
          </ul>
        </section>

        {/* Call to Action */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold text-green-700 mb-4">
            Take Charge of Your Nutrition Today
          </h2>
          <p className="text-gray-700 mb-4">
            Start your journey towards balanced nutrition with NutriGuide! Discover personalized
            meal plans, expert tips, and tools to support your health goals.
          </p>
          <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700">
            Start Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NutriGuide;
