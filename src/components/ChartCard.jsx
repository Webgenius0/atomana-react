import BarCharts from "./BarChart";
import Dropdown from "./Dropdown";

const ChartCard = ({ data, xKey, yKey, yDomain,total }) => {
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
          <div className="flex justify-between items-center mb-2">
            {/* Large Number */}
            <div className="text-white text-2xl font-semibold">
              {total}
            </div>

            {/* Dropdown */}
            <div>
              <Dropdown options={options} onSelect={handleSelect} />
            </div>
          </div>
          <span className="text-green-600 text-sm ">+11% of target</span>

          <div className="mt-7">
            <div>
              <BarCharts
                data={data}
                xKey={xKey}
                yKey={yKey}
                yDomain={yDomain}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChartCard;
