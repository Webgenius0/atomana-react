import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

// Chart Data
const data = [
  {
    name: 'Page B',
    uv: 3000,
    pv: 198,
    amt: 2210,
  },
];

// Chart Component
const BarCharts = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart
        data={data}
        margin={{
          top: 5,
          left: 20,
          bottom: 5,
        }}
        barSize={20} // Adjust bar width here
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis domain={[0, 400]} orientation="right"  /> {/* Set fixed Y-axis domain */}
        <Tooltip />
        <Legend />
        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarCharts;
