import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Function to format the y-axis ticks based on the range
const formatYAxisTicks = (value, yDomain) => {
  const maxValue = yDomain[1];
  let formattedValue;

  // Handle the case for thousands (K), millions (M), etc.
  if (maxValue >= 1000000) {
    formattedValue = (value / 1000000).toFixed(1) + "M"; // Millions
  } else if (maxValue >= 1000) {
    formattedValue = (value / 1000).toFixed(1) + "K"; // Thousands
  } else {
    formattedValue = value; // Raw value
  }

  return formattedValue;
};

// Chart Component
const BarCharts = ({ data, xKey, yKey, yDomain }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          left: 20,
          bottom: 5,
        }}
        barSize={20} //  bar width
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        <CartesianGrid
          horizontal={true}
          vertical={false}
          stroke="#ccc"
          strokeWidth={1}
        />
        <XAxis dataKey={xKey} />
        <YAxis
          domain={yDomain}
          orientation="right"
          axisLine={false}
          tickFormatter={(value) => formatYAxisTicks(value, yDomain)}
        />

        <Bar dataKey={yKey} fill="#009696" background={{ fill: "#0e5959" }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
