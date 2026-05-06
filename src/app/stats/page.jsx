"use client";

import { useEffect, useState } from "react";
import { PieChart } from "react-minimal-pie-chart";

const StatsPage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/friends.json");
      const friends = await res.json();

      const interactionCounts = {};

      friends.forEach((friend) => {
        if (friend.interactions) {
          friend.interactions.forEach((interaction) => {
            const type = interaction.type;
            interactionCounts[type] =
              (interactionCounts[type] || 0) + 1;
          });
        } else if (friend.interaction_type) {
          const type = friend.interaction_type;
          interactionCounts[type] =
            (interactionCounts[type] || 0) + 1;
        }
      });

      console.log("interactionCounts:", interactionCounts);

      const colors = {
        text: "#37a163",
        call: "#7f37f5",
        video: "#244d3f",
        meetup: "#f59e0b",
      };

      const chartData = Object.keys(interactionCounts).map((key) => ({
        title: key,
        value: interactionCounts[key],
        color: colors[key] || "#999999",
      }));

      setData(chartData);
    };

    fetchData();
  }, []);

  return (
    <div className="pt-20 pb-20 w-full">
      <h2 className="text-5xl font-bold mb-6">Friends Analytics</h2>

      <div className="card card-dash bg-base-100 mt-5">
        <div className="card-body">
          <h2 className="card-title font-semibold">
            By Interaction Type
          </h2>

          <div className="flex flex-col justify-center items-center">
            <PieChart
              style={{ width: "300px", height: "300px" }}
              paddingAngle={5}
              lineWidth={20}
              data={data}
            />
          </div>

          <div className="mt-4 flex justify-center flex-wrap gap-3 items-center">
            {data.map((item) => (
              <div
                key={item.title}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="capitalize">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPage;