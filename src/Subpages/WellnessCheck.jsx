import React from "react";
import { Link } from "react-router-dom";

const WellnessCheck = () => {
  return (
    <div className="bg-gray-50 py-10 px-6 md:px-20 mt-[50px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">
          Wellness Check: Your Personalized Health Assessment
        </h1>
        <p className="text-gray-700 mb-8">
          Understanding your health is the first step toward achieving your
          wellness goals. The <strong>Wellness Check</strong> feature offers a
          quick and reliable way to evaluate your overall well-being. This tool
          provides personalized insights, helping you identify areas of strength
          and opportunities for improvement in your physical, mental, and
          emotional health.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Comprehensive Health Assessment
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Evaluate energy levels, sleep quality, and stress management.
            </li>
            <li>
              Measure vital indicators like:
              <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
                <li>
                  <strong>Body Mass Index (BMI):</strong> Determine if your
                  weight is in a healthy range.
                </li>
                <li>
                  <strong>Diabetes Risk:</strong> Assess potential risks based
                  on blood sugar levels and lifestyle.
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Personalized Recommendations
          </h2>
          <p className="text-gray-700">
            Receive tailored suggestions to enhance your lifestyle and health.
            Get actionable advice based on your BMI, blood pressure, and
            diabetes risk.
          </p>
        </div>

        {/* Progress Tracking */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Progress Tracking
          </h2>
          <p className="text-gray-700">
            Regularly update your assessments to monitor changes in your health
            over time. Visual progress charts help you stay on track with your
            goals and celebrate milestones.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4">
            Benefits of Wellness Check
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>
              Understand your current health status and its impact on your life.
            </li>
            <li>Get expert-backed recommendations to enhance well-being.</li>
            <li>
              Stay motivated by tracking progress and celebrating milestones.
            </li>
            <li>Convenient and quick assessments anytime, anywhere.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="bg-green-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-blue-600 mb-4">
            Take Charge of Your Health Today!
          </h2>
          <p className="text-gray-700 mb-4">
            Start your Wellness Check and gain personalized insights into your
            BMI, and diabetes risk. Empower yourself with the
            knowledge to lead a healthier, happier life.
          </p>
          <Link to={'/personalAssitant'}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-green-500">
              Start Your Assessment
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WellnessCheck;
