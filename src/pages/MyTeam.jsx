import ChartCard from "@/components/ChartCard";
import Dropdown from "@/components/Dropdown";
import EssentialCard from "@/components/EssentialCard";
import ProgressBar from "@/components/ProgressBar";
import TabStepper from "@/components/TabStepper";
import { useGetSystemsData } from "@/hooks/useGetSystemsData";
import { useEffect, useState } from "react";

const MyTeam = () => {
  const tabs = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Updates", path: "/updates" },
  ];
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (value) => {
    console.log("Selected Value:", value);
    setSelectedValue(value);
  };
  const [chartData, setChartData] = useState([]);
  const progressValues = [10, 30, 24, 45, 60, 75, 50, 80];

  useEffect(() => {
    
    // Simulate API call
    const fetchData = async () => {
      const response = [
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
      setChartData(response);
    };

    fetchData();
  }, []);

  const options = [
    { value: "This Month", label: " This Month" },
    { value: "This Year", label: "This Year" },
    { value: "option3", label: "Option 3" },
  ];
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  const { data, isLoading, isError, error } = useGetSystemsData("team");

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="my-container mx-auto">
        <TabStepper tabs={tabs} />
        <div>
          <div className="mt-5 mb-5">
            <h1 className="text-white">MyData</h1>
            <div className="flex gap-5 pt-5">
              <div className="flex items-center ml-5">
                <input
                  id="inline-radio"
                  type="radio"
                  value="current"
                  name="inline-radio-group"
                  checked={selectedValue === "current"}
                  onChange={() => handleChange("current")}
                  className={`w-4 h-4 bg-gray-100 border-gray-300 ${
                    selectedValue === "current"
                      ? "focus:ring-green-500"
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
          <div className=" grid grid-cols-4 gap-5">
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
          <div>
            <div className="bg-[#242424] mt-5 p-5 rounded">
              <div className="flex justify-between">
                <h1 className="text-white text-xl">Agent Leaderboard</h1>
                <div>
                  <Dropdown options={options} onSelect={handleSelect} />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full  rounded  ">
                {progressValues.map((progress, index) => (
                  <div key={index} className="w-full">
                    <ProgressBar progress={progress} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6">
            <h1 className="text-white text-xl">MyEssentials</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
              {data?.map((item) => (
                <EssentialCard key={item?.id} data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
