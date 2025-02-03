import ChartCard from "@/components/ChartCard";
import Dropdown from "@/components/Dropdown";
import ProgressBar from "@/components/ProgressBar";
import ArrowLeftSvg from "@/components/svgs/ArrowLeftSvg";
import ThreeDotsSvg from "@/components/svgs/ThreeDotsSvg";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Mypl = () => {
  const [selectedValue, setSelectedValue] = useState("current");
  const chartData = [
    {
      id: 1,
      data: [
        { name: "Jan", "Total Income": 2056660, "Current Sales Volume": 300 },
        { name: "Feb", "Total Income": 250, "Current Sales Volume": 2056660 },
        { name: "Mar", "Total Income": 2056660, "Current Sales Volume": 400 },
        { name: "Apr", "Total Income": 2056660, "Current Sales Volume": 450 },
        { name: "May", "Total Income": 2056660, "Current Sales Volume": 500 },
        { name: "Jun", "Total Income": 450, "Current Sales Volume": 2056660 },
        { name: "Jul", "Total Income": 2056660, "Current Sales Volume": 600 },
        { name: "Aug", "Total Income": 550, "Current Sales Volume": 650 },
        {
          name: "Sep",
          "Total Income": 2056660,
          "Current Sales Volume": 2056660,
        },
        { name: "Oct", "Total Income": 2056660, "Current Sales Volume": 750 },
        {
          name: "Nov",
          "Total Income": 2056660,
          "Current Sales Volume": 2056660,
        },
        { name: "Dec", "Total Income": 2056660, "Current Sales Volume": 850 },
      ],
      xKey: "name",
      yKey: "Total Income",
      yDomain: [0, 20000000],
    },
    {
      id: 2,
      data: [
        { name: "Jan", "Total Income": 20090, "Current Sales Volume": 300 },
        { name: "Feb", "Total Income": 25099, "Current Sales Volume": 35009 },
        { name: "Mar", "Total Income": 30990, "Current Sales Volume": 400 },
        { name: "Apr", "Total Income": 39950, "Current Sales Volume": 450 },
        { name: "May", "Total Income": 49900, "Current Sales Volume": 500 },
        { name: "Jun", "Total Income": 49950, "Current Sales Volume": 550 },
        { name: "Jul", "Total Income": 50990, "Current Sales Volume": 600 },
        { name: "Aug", "Total Income": 55090, "Current Sales Volume": 650 },
        { name: "Sep", "Total Income": 60990, "Current Sales Volume": 700 },
        { name: "Oct", "Total Income": 69950, "Current Sales Volume": 750 },
        { name: "Nov", "Total Income": 70900, "Current Sales Volume": 800 },
        { name: "Dec", "Total Income": 79950, "Current Sales Volume": 850 },
      ],
      xKey: "name",
      yKey: "Total Income",
      yDomain: [0, 200000],
    },
  ];

  const progressBarData = [
    {
      name: "Commission 1",
      amount: "$264,054",
      sales: 12,
      salesGoal: 25,
    },
    {
      name: "Commission 2",
      amount: "$251,839",
      sales: 10,
      salesGoal: 25,
    },
    {
      name: "Commission 3",
      amount: "$204,576",
      sales: 10,
      salesGoal: 30,
    },
    {
      name: "Commission 4",
      amount: "$202,843",
      sales: 9,
      salesGoal: 40,
    },
  ];

  const progressBarData2 = [
    {
      name: "Expense 1",
      amount: "-$26,054",
      sales: 12,
      salesGoal: 25,
    },
    {
      name: "Expense 2",
      amount: "-$25,839",
      sales: 10,
      salesGoal: 25,
    },
    {
      name: "Expense 3",
      amount: "-$24,576",
      sales: 10,
      salesGoal: 30,
    },
    {
      name: "Expense 4",
      amount: "-$20,843",
      sales: 9,
      salesGoal: 40,
    },
  ];
  // Grouped Progress Bar Data
  const groupedProgressBarData = [
    {
      cardTitle: "Earnings",
      agents: progressBarData,
    },
    {
      cardTitle: "Expenses",
      agents: progressBarData2,
    },
  ];

  const heightoptions = [
    { value: "highestsales", label: "sort By: Highest sales" },
    { value: "quater", label: "Quater" },
    { value: "year", label: "Yearly" },
  ];

  const options = [
    { value: "This Month", label: " This Month" },
    { value: "This Year", label: "This Year" },
    { value: "option3", label: "Option 3" },
  ];

  const handleChange = (value) => {
    console.log("Selected Value:", value);
    setSelectedValue(value);
  };
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <div>
      <div className="flex items-center gap-4 justify-between">
        <div className="flex items-center gap-5 duration-300 hover:opacity-60 w-fit my-5">
          <Link
            to="/my-systems/finances"
          >
            <ArrowLeftSvg />
          </Link>
          <h2 className="section-title">My P&L</h2>
        </div>
        <button className="w-10 h-10 rounded-full border border-secondPrimary flex items-center justify-center duration-300 active:scale-95">
          <ThreeDotsSvg />
        </button>
      </div>

      <div className="my-5">
        <div className="flex gap-5">
          <div className="flex items-center ml-5">
            <button
              onClick={() => handleChange("current")}
              className="flex items-center gap-2"
            >
              <div
                className={`h-3 w-3 rounded-full bg-[#009696] transition-opacity ${selectedValue === "current" ? "opacity-100" : "opacity-50"
                  }`}
              ></div>
              <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">
                Current Value
              </span>
            </button>
          </div>

          <div className="flex items-center ml-5">
            <button
              onClick={() => handleChange("goal")}
              className="flex items-center gap-2"
            >
              <div
                className={`h-3 w-3 rounded-full bg-[#009696] transition-opacity ${selectedValue === "goal" ? "opacity-100" : "opacity-50"
                  }`}
              ></div>
              <span className=" text-sm font-medium text-gray-900 dark:text-gray-300">
                Goal Value
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className=" grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-5 mb-10">
        {/* Render Chart Cards */}
        {chartData.map((chart) => (
          <ChartCard
            key={chart.id}
            data={chart.data}
            xKey={chart.xKey}
            yKey={chart.yKey}
            yDomain={chart.yDomain}
            title="Total Income"
          />

        ))}

        {/* Render Progress Bars */}
        {groupedProgressBarData.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="w-full rounded-lg shadow bg-[#242424] p-4 md:p-6"
          >
            <div className="flex justify-between gap-1 gap-y-3 flex-wrap">
              <h1 className="section-title"> {group.cardTitle}</h1>
              <div className="flex gap-2 mb-10">
                <Dropdown options={heightoptions} onSelect={handleSelect} />
                <Dropdown options={options} onSelect={handleSelect} />
              </div>
            </div>
            {group.agents.map((agent, agentIndex) => (
              <div key={agentIndex} className="w-full mb-4 last:mb-0">
                <div className="flex items-center justify-between mb-2.5 gap-x-2 flex-wrap">
                  <p className="text-sm leading-5 tracking-[0.25px] text-[#009696] underline">
                    {agent.name}
                  </p>
                  <p
                    className={`text-sm leading-5 tracking-[0.25px] underline ${group.cardTitle === "Earnings"
                        ? "text-[#9AE4A7]"
                        : "text-[#E49A9A]"
                      }`}
                  >
                    {agent.amount}
                  </p>
                </div>
                <ProgressBar
                  currentValue={agent.sales}
                  goalValue={agent.salesGoal}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mypl;
