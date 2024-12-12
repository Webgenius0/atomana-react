import ChartCard from "@/components/ChartCard";
import TabStepper from "@/components/TabStepper";
import { useState } from "react";

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

  return (
    <>
      <div>
        <TabStepper tabs={tabs} />
        <div>
          <div>
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
          <div>
            <div className="grid grid-cols-4 gap-5">

              <ChartCard/>
              <ChartCard/>
              <ChartCard/>
              <ChartCard/>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
