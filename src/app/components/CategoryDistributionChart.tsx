import React from "react";
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

interface Props {
  categoryDistribution: {
    small_talk: number;
    technical_support: number;
    sales_inquiries: number;
    customer_service: number;
  };
}

const CategoryDistributionChart: React.FC<Props> = ({
  categoryDistribution,
}) => {
  // Convert categoryDistribution object to array of objects
  const data = (
    Object.keys(categoryDistribution) as (keyof typeof categoryDistribution)[]
  ).map((category) => ({
    category,
    count: categoryDistribution[category],
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="count" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CategoryDistributionChart;
