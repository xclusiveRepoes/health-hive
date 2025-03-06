import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const HealthAnalysis = () => {
  const userDetails = useSelector((state) => state.userSlice.user);
  const [condition, setCondition] = useState({
    weightC: "",
    bg: "",
    haveTo: "",
    sugar: "",
    sugarColor: "",
    bp: '',
    bpColor: ''
  });

  let bmi =
    Number(userDetails.weight) / (Number(userDetails.height) * 0.3048) ** 2;

  const heightInMeters = Number(userDetails.height) * 0.3048; // Convert feet to meters
  const currentWeight = Number(bmi) * heightInMeters ** 2;
  const idealWeight = 24.9 * heightInMeters ** 2;
  const weightToLoseOrGain = currentWeight - idealWeight;

  const analysis = () => {
    if (bmi < 18.5) {
      setCondition((prev) => ({
        ...prev,
        weightC: "Low weight",
        bg: "bg-[#87CEEB]",
        haveTo: "To Gain",
        acieve: Math.abs(weightToLoseOrGain).toFixed(2),
      }));
    } else if (bmi > 18.5 && bmi < 24.9) {
      setCondition((prev) => ({
        ...prev,
        weightC: "Perfect Weight",
        bg: "bg-[#32CD32]",
        haveTo: "Nothing",
        acieve: Math.abs(weightToLoseOrGain).toFixed(2),
      }));
    } else if (bmi > 24.5 && bmi < 29.5) {
      setCondition((prev) => ({
        ...prev,
        weightC: "Over Weight",
        bg: "bg-[#FFA500]",
        haveTo: "To Loss",
        acieve: Math.abs(weightToLoseOrGain).toFixed(2),
      }));
    } else if (bmi > 29.5) {
      setCondition((prev) => ({
        ...prev,
        weightC: "Extra Over Weight",
        bg: "bg-[#FF4500]",
        haveTo: "To Loss",
        acieve: Math.abs(weightToLoseOrGain).toFixed(2),
      }));
    }

    if (Number(userDetails.sugarLevel) < 4.4) {
      setCondition((prev) => ({
        ...prev,
        sugar: "Low",
        sugarColor: "bg-[#87CEEB]",
      }));
    } else if (
      Number(userDetails.sugarLevel) > 4.4 &&
      Number(userDetails.sugarLevel) < 7.8
    ) {
      setCondition((prev) => ({
        ...prev,
        sugar: "Normal",
        sugarColor: "bg-[#32CD32]",
      }));
    } else if (
      Number(userDetails.sugarLevel) > 7.8 &&
      Number(userDetails.sugarLevel) < 11
    ) {
      setCondition((prev) => ({
        ...prev,
        sugar: "High",
        sugarColor: "bg-[#FFA500]",
      }));
    }else if (
      Number(userDetails.sugarLevel) > 11
    ) {
      setCondition((prev) => ({
        ...prev,
        sugar: "High",
        sugarColor: "bg-[#FF4500]",
      }));
    }

    if (Number(userDetails.bloodPressure) < 90) {
      setCondition((prev) => ({
        ...prev,
        bp: "Low",
        bpColor: "bg-[#87CEEB]",
      }));
    } else if (
      Number(userDetails.bloodPressure) >= 90 &&
      Number(userDetails.bloodPressure) < 120
    ) {
      setCondition((prev) => ({
        ...prev,
        bp: "Normal",
        bpColor: "bg-[#32CD32]",
      }));
    } else if (
      Number(userDetails.bloodPressure) >= 120 &&
      Number(userDetails.bloodPressure) < 130
    ) {
      setCondition((prev) => ({
        ...prev,
        bp: "Elevated",
        bpColor: "bg-[#FFA500]",
      }));
    } else if (
      Number(userDetails.bloodPressure) >= 130 &&
      Number(userDetails.bloodPressure) < 140
    ) {
      setCondition((prev) => ({
        ...prev,
        bp: "High",
        bpColor: "bg-[#FF4500]",
      }));
    } else if (Number(userDetails.bloodPressure) >= 140) {
      setCondition((prev) => ({
        ...prev,
        bp: "Too High",
        bpColor: "bg-[#8B0000]",
      }));
    }
    
  };
  useEffect(() => {
    analysis();
  }, [userDetails]);
  return (
    <div className="w-full py-[20px]">
      <h1 className="text-[20px] py-[20px]">Health Analysis</h1>
      <table className="w-full border-gray-600 border-[2px] text-center">
        <tbody>
          <tr className="border-gray-600 border-[2px]">
            <td className="border-r-[2px] border-gray-600 w-1/2">Weight</td>
            <td className={`${condition.bg} text-white`}>
              {userDetails.weight ? `${condition.weightC}` : "----"}
            </td>
          </tr>
          <tr className="border-gray-600 border-[2px]">
            <td className="border-r-[2px] border-gray-600 w-1/2">
              {condition.haveTo}
            </td>
            <td>
              {userDetails?.weight && userDetails?.height
                ? `${condition.acieve}kg`
                : "----"}
            </td>
          </tr>
          <tr className="border-gray-600 border-[2px]">
            <td className="border-r-[2px] border-gray-600 w-1/2">
              Sugar Level
            </td>
            <td className={`${condition.sugarColor} text-white`}>{userDetails.sugarLevel ? condition.sugar : "----"}</td>
          </tr>
          <tr className="border-gray-600 border-[2px]">
            <td className="border-r-[2px] border-gray-600 w-1/2">
              Blood Pressure
            </td>
            <td className={`${condition.bpColor} text-white`}>
              {userDetails.bloodPressure ? condition.bp : "----"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HealthAnalysis;
