import ReactApexChart from "react-apexcharts";
import dayjs from "dayjs";
import quarterOfYear from "dayjs/plugin/quarterOfYear";
import { useState } from "react";

// Extend dayjs with the quarterOfYear plugin
dayjs.extend(quarterOfYear);

const ApexChart = () => {
  const [state] = useState({
    series: [
      {
        name: "Sales",
        data: [
          { x: "2019/01/01", y: 200 },
        
       
        ],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 380,
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: "category",
        labels: {
          formatter: function (val) {
            return "Q" + dayjs(val).quarter(); 
          },
        },
        categories: [
          "2019 Q1", "2019 Q2", "2019 Q3", "2019 Q4",
        ],
      },
      title: {
        text: "Grouped Labels on the X-axis",
        align: "center",
        style: {
          color: "#FFFFFF",
        },
      },
      tooltip: {
        x: {
          formatter: function (val) {
            return "Q" + dayjs(val).quarter() + " " + dayjs(val).format("YYYY");
          },
        },
      },
      theme: {
        mode: "dark",
      },
    },
  });

  return (
    <div style={{ width: "100%", height: "380px" }}>
      <ReactApexChart
        options={state.options}
        series={state.series}
        type="bar"
        height={380}
      />
    </div>
  );
};

export default ApexChart;
