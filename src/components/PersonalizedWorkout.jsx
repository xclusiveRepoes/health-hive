import React, { useState } from "react";
import WorkOutChart from "./WorkOutChart";
import { Exercises } from "../Exercises";
import { useDispatch, useSelector } from "react-redux";
import { exerciseImageHandle } from "../user/userSlice";

const PersonalizedWorkout = () => {
  const dispatch = useDispatch();
  const { isShowExersiseImg, imgLink } = useSelector(
    (state) => state.userSlice
  );
  return (
    <div className="w-full min-h-screen bg-[#F3F4F6] relative flex flex-col items-center justify-center pt-[100px] px-[10px] md:px-[40px]">
      <h1 className="text-[26px] text-gray-600 font-semibold text-center mb-8">
        Your Personalized <span className="italic text-blue-900">Workout Plan</span>
      </h1>
      {isShowExersiseImg && (
        <img
          src={imgLink}
          className="absolute hidden xl:block w-[350px] top-[40%] right-[30%] -translate-y-1/2 z-50"
          alt=""
        />
      )}
      <div className="w-full flex flex-col lg:flex-row items-center  justify-center gap-8">
        {/* Table */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <table className="w-full max-w-md table-auto border-collapse shadow-lg rounded-lg overflow-hidden text-center">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="px-4 py-3 text-[16px] font-semibold">
                  Exercise
                </th>
                <th className="px-4 py-3 text-[16px] font-semibold">
                  Duration (hr)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white text-gray-700">
              {Exercises.map((elem, index) => (
                <tr
                  onMouseEnter={() => {
                    dispatch(
                      exerciseImageHandle({
                        isEnter: true,
                        img: elem.gif,
                      })
                    );
                  }}
                  onMouseLeave={() => {
                    dispatch(
                      exerciseImageHandle({
                        isEnter: false,
                        img: "",
                      })
                    );
                  }}
                  key={index}
                  className="hover:bg-blue-50 transition-all duration-200 border-b text-gray-100 opacity-[.85] hover:opacity-[.7] "
                >
                  <td
                    className="px-4 py-2"
                    style={{ backgroundColor: elem.color }}
                  >
                    {elem.name}
                  </td>
                  <td
                    className="px-4 py-2"
                    style={{ backgroundColor: elem.color }}
                  >
                    {elem.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pie Chart */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <WorkOutChart />
        </div>
      </div>
    </div>
  );
};

export default PersonalizedWorkout;
