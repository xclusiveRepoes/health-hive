import React, { useState } from "react";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const PersonalDetsShowcase = ({handleEdit}) => {
  const userDetails = useSelector((state) => state.userSlice.user);
  const isLoading = useSelector((state) => state.userSlice.isLoading);
  const handleClick = () => {
    handleEdit(true);
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="">
          <h1 className="py-[20px]">Your Health Metrics</h1>
          <table className="w-full border-gray-600 border-[2px] text-center">
            <tbody>
              <tr className="border-gray-600 border-[2px]">
                <td className="border-r-[2px] border-gray-600 w-1/2">Weight</td>
                <td>
                  {userDetails.weight ? `${userDetails.weight} kg` : "----"}
                </td>
              </tr>
              <tr className="border-gray-600 border-[2px]">
                <td className="border-r-[2px] border-gray-600 w-1/2">Height</td>
                <td>
                  {userDetails?.height ? `${userDetails.height} meter` : "----"}
                </td>
              </tr>
              <tr className="border-gray-600 border-[2px]">
                <td className="border-r-[2px] border-gray-600 w-1/2">BMI</td>
                <td>
                  {userDetails?.weight && userDetails?.height ? (
                    <span>
                      {(
                        Number(userDetails.weight) /
                        Number(userDetails.height) ** 2
                      ).toFixed(2)}{" "}
                      kg/m<sup>2</sup>
                    </span>
                  ) : (
                    "----"
                  )}{" "}
                </td>
              </tr>
              <tr className="border-gray-600 border-[2px]">
                <td className="border-r-[2px] border-gray-600 w-1/2">
                  Sugar Level
                </td>
                <td>
                  {userDetails.sugarLevel ? userDetails.sugarLevel : "----"}
                </td>
              </tr>
              <tr className="border-gray-600 border-[2px] capitalize">
                <td className="border-r-[2px] border-gray-600 w-1/2">
                  Family Diabetic History
                </td>
                <td>
                  {userDetails.diabeticHistory
                    ? userDetails.diabeticHistory
                    : "----"}
                </td>
              </tr>
            </tbody>
          </table>
          <button onClick={handleClick} className="w-full bg-gray-500 mt-[20px] py-[6px] font-medium text-white rounded-md">Edit</button>
        </div>
      )}
    </>
  );
};

export default PersonalDetsShowcase;
