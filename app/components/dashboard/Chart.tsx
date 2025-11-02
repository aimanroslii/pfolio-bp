"use client";

import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
} from "recharts";

interface iAppProps {
    data: {
        date: string;
        clicks: number;
    }
}

export function Chart({ data }: { data: any[] }) {
  return (
    // <LineChart width={600} height={300} data={data}>
    //   <CartesianGrid strokeDasharray="20 20" />
    //   <XAxis dataKey="date" />
    //   <YAxis />
    //   <Tooltip />
    //   <Line type="monotone" dataKey="clicks" stroke="#8884d8" />
    // </LineChart>
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          stroke="#3b82f6"
          activeDot={{ r: 8 }}
          dataKey="count"
        />
      </LineChart>
    </ResponsiveContainer>
  );
}