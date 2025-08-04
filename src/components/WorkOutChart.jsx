import React from "react";
import {
  Cell,
  Pie,
  PieChart,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Exercises } from "../Exercises";

const WorkOutChart = () => {
  return (
    <div className="w-full px-4 md:px-[60px] py-[20px]">
      <div className="w-full text-black py-[20px] rounded-md flex flex-col items-center justify-center">
        {/* ✅ Responsive Pie Chart */}
        <div className="w-full max-w-[500px] aspect-square">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={Exercises}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius="80%"
                label
              >
                {Exercises.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* 🧾 Custom responsive legend */}
        <div className="flex flex-wrap justify-center gap-4 mt-4 px-2 text-sm text-gray-800">
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
