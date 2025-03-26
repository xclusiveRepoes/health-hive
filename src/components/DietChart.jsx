import React from "react";
import { useSelector } from "react-redux";
import {
  extraOverWeight,
  lowWeight,
  overWeight,
  properWeight,
  lowSugar,
  normalSugar,
  highSugar,
} from "../dietChart";

const DietChart = () => {
  const userDetails = useSelector((state) => state.userSlice.user);

  const bmi = (
    Number(userDetails.weight) /
    (Number(userDetails.height) * 0.3048) ** 2
  ).toFixed(2);

  const getWeightDiet = () => {
    if (bmi < 18.9) return lowWeight;
    if (bmi >= 18.9 && bmi < 24.9) return properWeight;
    if (bmi >= 24.9 && bmi < 30) return overWeight;
    return extraOverWeight;
  };

  const getSugarDiet = () => {
    if (userDetails.beforeOrAfter === "before-meal") {
      const sugar = Number(userDetails.sugarLevel);
      if (sugar < 3.9) return lowSugar;
      if (sugar >= 3.9 && sugar <= 5.5) return normalSugar;
      return highSugar;
    } else if (userDetails.beforeOrAfter === "after-meal") {
      const sugar = Number(userDetails.sugarLevel);
      if (sugar < 5) return lowSugar;
      if (sugar >= 5 && sugar <= 7.8) return normalSugar;
      return highSugar;
    }
  };

  return (
    <div className="w-full">
      <h1 className="py-5 text-xl font-semibold text-center">Diet Chart</h1>
      <div className="border-2 border-gray-600 p-5 mb-5">
        <h2 className="text-lg font-medium mb-3">🍳 Breakfast</h2>
        <table className="w-full border-2 border-gray-600 text-center">
          <tbody>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600 w-1/3">Weight-Based</td>
              <td>{userDetails.weight ? getWeightDiet().breakfast : "----"}</td>
            </tr>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600">Sugar Level-Based</td>
              <td>
                {userDetails.sugarLevel ? getSugarDiet().breakfast : "----"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-2 border-gray-600 p-5 mb-5">
        <h2 className="text-lg font-medium mb-3">🍛 Lunch</h2>
        <table className="w-full border-2 border-gray-600 text-center">
          <tbody>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600 w-1/3">Weight-Based</td>
              <td>{userDetails.weight ? getWeightDiet().lunch : "----"}</td>
            </tr>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600">Sugar Level-Based</td>
              <td>{userDetails.sugarLevel ? getSugarDiet().lunch : "----"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-2 border-gray-600 p-5 mb-5">
        <h2 className="text-lg font-medium mb-3">🍛 Snacks</h2>
        <table className="w-full border-2 border-gray-600 text-center">
          <tbody>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600 w-1/3">Weight-Based</td>
              <td>{userDetails.weight ? getWeightDiet().snacks : "----"}</td>
            </tr>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600">Sugar Level-Based</td>
              <td>{userDetails.sugarLevel ? getSugarDiet().snacks : "----"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="border-2 border-gray-600 p-5">
        <h2 className="text-lg font-medium mb-3">🍽️ Dinner</h2>
        <table className="w-full border-2 border-gray-600 text-center">
          <tbody>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600 w-1/3">Weight-Based</td>
              <td>{userDetails.weight ? getWeightDiet().dinner : "----"}</td>
            </tr>
            <tr className="border-2 border-gray-600">
              <td className="border-r-2 border-gray-600">Sugar Level-Based</td>
              <td>{userDetails.sugarLevel ? getSugarDiet().dinner : "----"}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DietChart;
