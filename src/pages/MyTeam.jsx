import ChartCard from "@/components/ChartCard";
import Dropdown from "@/components/Dropdown";
import EssentialCard from "@/components/EssentialCard";
import ProgressBar from "@/components/ProgressBar";
import ArrowRightSvg from "@/components/svgs/ArrowRightSvg";
import TabStepper from "@/components/TabStepper";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";
import { useState } from "react";
import { Link } from "react-router-dom";

const MyTeam = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const { data } = useGetSystemsData();

  const tabs = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Updates", path: "/updates" },
  ];

  const ourMission = [
    {
      title: "To Create Lifelong Relationships and Raving Fans",
      subTitle: "",
    },
    {
      title: "Excellence",
      subTitle: "Consistent execution, Do things the right way consistently",
    },
    {
      title: "Relentless",
      subTitle: "Persist without exception",
    },
    {
      title: "Adaptive",
      subTitle: "Today’s market isn’t yesterday’s market",
    },
    {
      title: "Collaborate",
      subTitle: "Get to solutions together ",
    },
    {
      title: "Extreme Ownership",
      subTitle: "We own our problems and work towards solutions",
    },
  ];
  const options = [
    { value: "month", label: "This Month" },
    { value: "quater", label: "Quater" },
    { value: "year", label: "Yearly" },
  ];
  const chartData = [
    {
      id: 1,
      data: [{ name: "January", value: 200 }],
      xKey: "name",
      yKey: "value",
      yDomain: [0, 400],
    },
    {
      id: 2,
      data: [{ name: "Q1", amount: 100000 }],
      xKey: "name",
      yKey: "amount",
      yDomain: [0, 1000000],
    },
    {
      id: 3,
      data: [{ name: "Item A", sales: 30000 }],
      xKey: "name",
      yKey: "sales",
      yDomain: [0, 200000],
    },
    {
      id: 4,
      data: [{ name: "John", salary: 300 }],
      xKey: "name",
      yKey: "salary",
      yDomain: [0, 400],
    },
  ];

  const agenLeaderBoardData = [
    {
      name: "James L.",
      amount: "264,054",
      sales: 12,
      salesGoal: 25,
    },
    {
      name: "Sasha B.",
      amount: "251,839",
      sales: 10,
      salesGoal: 25,
    },
    {
      name: "Russel M.",
      amount: "204,576",
      sales: 10,
      salesGoal: 30,
    },
    {
      name: "Kim H.",
      amount: "202,843",
      sales: 9,
      salesGoal: 40,
    },
    {
      name: "Ralph D.",
      amount: "200,003",
      sales: 9,
      salesGoal: 42,
    },
    {
      name: "Irwin K.",
      amount: "199,398",
      sales: 8,
      salesGoal: 40,
    },
    {
      name: "Sasha M.",
      amount: "199,192",
      sales: 8,
      salesGoal: 40,
    },
    {
      name: "Sasha N.",
      amount: "198,278",
      sales: 1,
      salesGoal: 5,
    },
  ];

  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  const handleChange = (value) => {
    console.log("Selected Value:", value);
    setSelectedValue(value);
  };

  return (
    <>
      <div className="my-container mx-auto">
        <TabStepper tabs={tabs} />
        <div>
          <div className="mt-5 mb-5">
            <h1 className="section-title">MyData</h1>
            <div className="flex gap-5 pt-5">
              <div className="flex items-center ml-5">
                <input
                  id="inline-radio"
                  type="radio"
                  value="current"
                  name="inline-radio-group"
                  checked={selectedValue === "current"}
                  onChange={() => handleChange("current")}
                  className={`w-4 h-4 bg-[#009696] border-[#009696] ${
                    selectedValue === "current"
                      ? "focus:ring-[#009696]"
                      : "focus:ring-blue-500"
                  }`}
                />
                <label
                  htmlFor="inline-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Current Value
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="inline-2-radio"
                  type="radio"
                  value="goal"
                  name="inline-radio-group"
                  checked={selectedValue === "goal"}
                  onChange={() => handleChange("goal")}
                  className={`w-4 h-4 bg-gray-100 border-gray-300 ${
                    selectedValue === "goal"
                      ? "focus:ring-green-500"
                      : "focus:ring-blue-500"
                  }`}
                />
                <label
                  htmlFor="inline-2-radio"
                  className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Goal Value
                </label>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {chartData.map((chart) => (
              <ChartCard
                key={chart.id}
                data={chart.data}
                xKey={chart.xKey}
                yKey={chart.yKey}
                yDomain={chart.yDomain}
              />
            ))}
          </div>
          <div className="bg-[#242424] mt-5 px-5 py-6 rounded">
            <div className="flex justify-between gap-1 gap-y-3 flex-wrap">
              <h1 className="section-title">Agent Leaderboard</h1>
              <Dropdown options={options} onSelect={handleSelect} />
            </div>
            <div className="grid md:grid-cols-2 gap-y-4 md:gap-y-6 gap-12 w-full mt-5">
              {agenLeaderBoardData?.map((agent, index) => (
                <div key={index} className="w-full">
                  <div className="flex items-center justify-between mb-2.5 gap-x-2 flex-wrap">
                    <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                      {agent?.name}
                    </p>
                    <p className="text-sm leading-5 tracking-[0.25px] text-[#ffffff99]">
                      ${agent?.amount} ({agent?.sales} sales)
                    </p>
                  </div>

                  <ProgressBar
                    currentValue={agent?.sales}
                    goalValue={agent?.salesGoal}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6">
            <h1 className="section-title mb-4">MyEssentials</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
              {data?.slice(0, 5)?.map((item) => (
                <EssentialCard key={item?.id} data={item} />
              ))}
            </div>

            <div className="flex items-center justify-end">
              <Link to="" className="flex items-center gap-3">
                <p className="text-sm leading-6 capitalize text-light tracking-[-0.14px] hover:text-secondary duration-300">
                  View All Leads
                </p>
                <button className="w-8 h-8 rounded-full flex items-center justify-center border border-[#4D4D4D] bg-[#242424] shadow-[0px_0px_0px_1px_#000]">
                  <ArrowRightSvg />
                </button>
              </Link>
            </div>
          </div>
          <div className="mt-10">
            <h2 className="section-title">Our Mission</h2>

            <div className="my-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4 sm:gap-6 md:gap-8 lg:gap-10 p-4 bg-[#242424] rounded">
              {ourMission?.map((mission, idx) => (
                <div key={idx} className="flex flex-col items-center gap-2">
                  <h2 className="section-title text-center">
                    {mission?.title}
                  </h2>
                  <p className="text-xs text-center text-light font-medium tracking-[-0.12px]">
                    {mission?.subTitle}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
