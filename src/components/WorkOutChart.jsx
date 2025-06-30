import React, { useState, useEffect } from "react";
import { Cell, Pie, PieChart, Tooltip } from "recharts";
import { Exercises } from "../Exercises";

const getChartSize = () => {
  const width = window.innerWidth;
  if (width < 640) return { width: 250, height: 250, radius: 80 }; // sm
  if (width < 768) return { width: 300, height: 300, radius: 100 }; // md
  if (width < 1024) return { width: 400, height: 400, radius: 120 }; // lg
  return { width: 500, height: 500, radius: 150 }; // xl
};

const WorkOutChart = () => {
  const [chartSize, setChartSize] = useState(getChartSize());
  useEffect(() => {
    const handleResize = () => setChartSize(getChartSize());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="w-full px-4 md:px-[60px] py-[20px]">
      <div className="w-full text-black py-[20px] rounded-md flex flex-col items-center justify-center overflow-x-auto">
        <PieChart width={chartSize.width} height={chartSize.height}>
          <Pie
            data={Exercises}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={chartSize.radius}
            label
          >
            {Exercises.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>

        {/* 🧾 Custom responsive legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-2 text-sm text-gray-800 ">
          {Exercises.map((entry, index) => (
            <div key={index} className="flex items-center gap-2">
              <div
                className="w-4 h-4 rounded-sm"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span>{entry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkOutChart;
