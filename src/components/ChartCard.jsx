import ApexChart from "./ApexChart";
import BarCharts from "./BarChart";
import Dropdown from "./Dropdown";

const ChartCard = () => {
  const options = [
    { value: "This Month", label: " This Month" },
    { value: "This Year", label: "This Year" },
    { value: "option3", label: "Option 3" },
  ];
  const handleSelect = (option) => {
    console.log("Selected option:", option);
  };

  return (
    <>
      <div>
        <div className="max-w-sm w-full  rounded-lg shadow bg-[#242424] p-4 md:p-6">
          <div className="flex justify-between items-center">
            {/* Large Number */}
            <div className="text-white text-2xl font-semibold">
              $17,182,291.21
            </div>

            {/* Dropdown */}
            <div className="w-40">
              <Dropdown
                options={options}
                placeholder="Choose an option"
                onSelect={handleSelect}
              />
            </div>
          </div>
          <span className="text-green-600">+11% of target</span>


          <div>
          <div >
            {/* <ApexChart/> */}
            <BarCharts/>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartCard;
