import ChartCard from "@/components/ChartCard";
import Dropdown from "@/components/Dropdown";
import EssentialCard from "@/components/EssentialCard";
import Pagination from "@/components/Pagination";
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
  const progressValues = [
    { name: "James L.", sales: "$264,054 (12 sales)", progress: 10 },
    { name: "Emily R.", sales: "$175,000 (8 sales)", progress: 30 },
    { name: "Michael S.", sales: "$90,500 (5 sales)", progress: 24 },
    { name: "Sarah T.", sales: "$320,700 (15 sales)", progress: 45 },
    { name: "David K.", sales: "$210,000 (10 sales)", progress: 60 },
    { name: "Anna W.", sales: "$150,000 (7 sales)", progress: 75 },
    { name: "Chris M.", sales: "$190,000 (9 sales)", progress: 50 },
    { name: "Sophia P.", sales: "$400,000 (20 sales)", progress: 80 },
  ];
  
  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      const response = [
        {
          id: 1,
          data: [{ name: "Dec", value: 200 }],
          xKey: "name",
          yKey: "Current Sales Volume",
          yDomain: [0, 400], 
          total:'$ 17,182,291.21'
        },
        {
          id: 2,
          data: [{ name: "Dec", amount: 100000 }],
          xKey: "name",
          yKey: "Units Sold",
          yDomain: [0, 1000000], 
          total:'345'
        },
        {
          id: 3,
          data: [{ name: "Dec", sales: 30000 }],
          xKey: "name",
          yKey: "Expenses",
          yDomain: [0, 200000],
          total:'$ 32,923.87'
        },
        {
          id: 4,
          data: [{ name: "Dec", salary: 300 }],
          xKey: "name",
          yKey: "Gross Profit",
          yDomain: [0, 400], 
          total:'$ 192,812.94'
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
  const [currentPage, setCurrentPage] = useState(1);
  const { data, isLoading, isError, error } = useGetSystemsData("team");
  
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
  return (
    <>
      <div className="container mx-auto">
        <TabStepper tabs={tabs} />
        <div>
          <div className="mt-5 mb-5">
            <h1 className="text-white section-title">MyData</h1>
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
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {chartData.map((chart) => (
                <ChartCard
                  key={chart.id}
                  data={chart.data}
                  xKey={chart.xKey}
                  yKey={chart.yKey}
                  yDomain={chart.yDomain}
                  total={chart.total}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="bg-[#242424] mt-5 p-5 rounded">
              <div className="flex justify-between">
                <h1 className=" text-xl section-title">Agent Leaderboard</h1>
                <div>
                  <Dropdown options={options} onSelect={handleSelect}/>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 w-full  rounded  ">
              {progressValues.map((item, index) => (
    <div key={index} className="w-full">
      <ProgressBar name={item.name} sales={item.sales} progress={item.progress} />
    </div>
  ))}



  <div>
    <Pagination  currentPage={currentPage}
        totalItems={45}
        itemsPerPage={12}
        onPageChange={(page) => setCurrentPage(page)} />
  </div>
              </div>
            </div>
          </div>


          <div>
            <h1 className="text-white section-title text-xl mt-5 mb-5">MyEssentials</h1>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pb-5">
      {data?.map((item) => (
        <EssentialCard key={item?.id} data={item} />
      ))}
    </div>

            <div>

            </div>

            <div>
              <div>
                <h1 className="text-white section-title text-xl mt-5 mb-5">
                Our Mission
                </h1>
                <div>
                  <div className="bg-[#242424] p-5 flex gap-10 rounded">
                    <div>
                      <p className="section-title max-w-xs ">To Create Lifelong Relationships and Raving Fans</p>
                    </div>

                    <div>
                      <h1 className="section-title max-w-xs">Excellence</h1>
                      <p className="max-w-xs text-light">Consistent execution, Do things the right way consistently</p>
                    </div>
                    <div>
                      <h1 className="section-title max-w-xs">Excellence</h1>
                      <p className="max-w-xs text-light">Consistent execution, Do things the right way consistently</p>
                    </div>
                    <div>
                      <h1 className="section-title max-w-xs">Excellence</h1>
                      <p className=" max-w-xs text-light">Consistent execution, Do things the right way consistently</p>
                    </div>
                    <div>
                      <h1 className="section-title max-w-xs">Excellence</h1>
                      <p className=" max-w-xs text-light">Consistent execution, Do things the right way consistently</p>
                    </div>
                    <div>
                      <h1 className="section-title max-w-xs">Excellence</h1>
                      <p className=" max-w-xs text-light">Consistent execution, Do things the right way consistently</p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTeam;
