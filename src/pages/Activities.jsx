import ProgressCard from "@/components/ProgressCard";
import React from "react";

const Activities = () => {
  const data = [
    {
      title: "Calls Today",
      currentValue: 21,
      goalValue: 15,
      goalType: "Daily",
    },
    {
      title: "Calls This Week",
      currentValue: 58,
      goalValue: 60,
      goalType: "Weekly",
    },
    {
      title: "Calls This Month",
      currentValue: 179,
      goalValue: 250,
      goalType: "Monthly",
    },
    {
      title: "Calls This Year",
      currentValue: 432,
      goalValue: 1250,
      goalType: "Yearly",
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-1 py-[25px] bg-[#1E1E1E]">
      {data?.map((item, idx) => (
        <ProgressCard key={idx} data={item} />
      ))}
    </div>
  );
};

export default Activities;
