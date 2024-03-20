import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

interface ResponseTimesProps {
  dayData: TimeDataPoint[];
  weekData: WeekDataPoint[];
}

interface TimeDataPoint {
  date: string;
  average_time: number;
}
interface WeekDataPoint {
  week: string;
  average_time: number;
}

const LineChartComponent: React.FC<ResponseTimesProps> = ({
  dayData,
  weekData,
}) => {
  return (
    <div className="rtc_container">
      <h3>Day-wise Data</h3>
      <LineChart width={600} height={200} data={dayData}>
        <XAxis dataKey="date" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#8884d8" />
      </LineChart>

      <h3>Week-wise Data</h3>
      <LineChart width={600} height={200} data={weekData}>
        <XAxis dataKey="week" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="average_time" stroke="#82ca9d" />
      </LineChart>
    </div>
  );
};

export default LineChartComponent;
